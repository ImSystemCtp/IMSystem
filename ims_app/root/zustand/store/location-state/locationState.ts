import { locationProvider } from "@/root/zustand/provider";
import { ims_locations } from "@prisma/client"
import { create } from 'zustand'

interface LocationState {
    locations: ims_locations[];
    location: ims_locations | null;
    locationToEdit: ims_locations | null;
    loadingLocation: boolean;
    getLocation: () => Promise<void>;
    createLocation: (location: ims_locations) => Promise<void>;
    selectLocationToEdit: (location: ims_locations) => void;
    updateLocation: (locationToUpdate: ims_locations) => Promise<void>;
    currentLocation: number | null;
    setCurrentLocation: (locationId: number) => void;
    getLocationById: (locationId: number) => Promise<void>;
}

export const useLocationStore = create<LocationState>((set) => {
    return {
        locations: [],
        location: null,
        locationToEdit: null,
        loadingLocation: false,
        currentLocation: null,
        getLocation: async () => {
            set({loadingLocation : true})
            const locations = await locationProvider.getLocation()
            set({loadingLocation : false})
            set({ locations })
        },
        getLocationById: async (locationId: number) => {
            const location = await locationProvider.getLocationById(locationId)
            set({ location })
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
        setCurrentLocation: (locationId: number) => {
            set({ currentLocation: locationId })
        }
    }
});