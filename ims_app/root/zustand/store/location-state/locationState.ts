import { ims_locations } from "@prisma/client"
import { create } from 'zustand'
import { locationProvider } from "../../provider"

interface LocationState {
    locations: ims_locations[];
    locationToEdit: ims_locations | null;
    getLocation: () => Promise<void>;
    addLocation: (location: ims_locations) => Promise<void>;
    selectLocationToEdit: (location: ims_locations) => void;
}

export const useLocationStore = create<LocationState>((set) => {
    return {
        locations: [],
        locationToEdit: null,
        getLocation: async () => {
            const locations = await locationProvider.getLocation()
            set({ locations })
        },
        addLocation: async (location: ims_locations) => {
            const newLocation = await locationProvider.createLocation(location);
            set((state: LocationState) => ({ locations: [...state.locations, newLocation] }));
        },
        selectLocationToEdit: (location: ims_locations) => {
            set({ locationToEdit: location })
        }
    }
});