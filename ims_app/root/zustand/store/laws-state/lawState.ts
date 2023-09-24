import { ims_laws } from "@prisma/client"
import { create } from 'zustand'
import { lawProvider } from "../../provider"

interface lawState {
    laws: ims_laws[];
    getLaws: () => Promise<void>;
    addLaws: (law: ims_laws) => Promise<void>;
}

export const uselawStore = create<lawState>((set) => {
    return {
        laws: [],

        getLaws: async () => {
            const laws = await lawProvider.getlaw()
            set({ laws })
        },
        addLaws: async (law: ims_laws) => {
            const newLaw = await lawProvider.createLaw(law);
            set((state: lawState) => ({ laws: [...state.laws, newLaw] }));
        },

    }
});