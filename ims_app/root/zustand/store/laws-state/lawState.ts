import { ims_laws } from "@prisma/client"
import { create } from 'zustand'
import { lawProvider } from "../../provider"

interface lawState {
    laws: ims_laws[];
    getLocation: () => Promise<void>;
    addLocation: (location: ims_laws) => Promise<void>;
}

export const uselawStore = create<lawState>((set) => {
    return {
        laws: [],

        getLocation: async () => {
            const laws = await lawProvider.getlaw()
            set({ laws })
        },
        addLocation: async (location: ims_laws) => {
            const newLocation = await lawProvider.createLaw(location);
            set((state: lawState) => ({ laws: [...state.laws, newLocation] }));
        },

    }
});