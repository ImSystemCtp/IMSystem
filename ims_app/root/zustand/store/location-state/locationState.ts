import { locationProvider } from "@/root/zustand/provider";
import { ims_locations } from "@prisma/client"
import { create } from 'zustand'

interface LocationState {
    locations: ims_locations[];
    locationToEdit: ims_locations | null;
    getLocation: () => Promise<void>;
    createLocation: (location: ims_locations) => Promise<void>;
    selectLocationToEdit: (location: ims_locations) => void;
    updateLocation: (locationToUpdate: ims_locations) => Promise<void>;
}

export const useLocationStore = create<LocationState>((set) => {
    return {
        locations: [],
        locationToEdit: null,
        getLocation: async () => {
            const locations = await locationProvider.getLocation()
            set({ locations })
        },
        createLocation: async (location: ims_locations) => {
            const newLocation = await locationProvider.createLocation(location);
            set((state: LocationState) => ({ locations: [...state.locations, newLocation] }));
        },
        selectLocationToEdit: (location: ims_locations) => {
            set({ locationToEdit: location })
        },
        updateLocation: async (locationToUpdate: ims_locations) => {
            const updatedLocation = await locationProvider.updateLocation(locationToUpdate);
            set((state: LocationState) => ({
                locations: state.locations.map((location) =>
                    location.location_id === updatedLocation.location_id ? updatedLocation : location
                ),
            }));
        },
    }
});