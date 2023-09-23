import { ims_locations } from "@prisma/client"
import { create } from 'zustand'
import { locationProvider } from "../provider"

interface LocationState {
    locations: ims_locations[];
    getLocation: () => Promise<void>;
    addLocation: (location: ims_locations) => Promise<void>;
}

export const useLocationStore = create<LocationState>((set) => {
    return {
        locations: [],

        getLocation: async () => {
            const locations = await locationProvider.getLocation()
            set({ locations })
        },
        addLocation: async (location: ims_locations) => {
            console.log(location)
            const newLocation = await locationProvider.createLocation(location);
            console.log(newLocation)
            set((state: LocationState) => ({ locations: [...state.locations, newLocation] }));
        },

    }
});