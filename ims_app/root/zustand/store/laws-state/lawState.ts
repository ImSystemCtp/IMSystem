import { ims_laws } from "@prisma/client"
import { create } from 'zustand'
import { lawProvider } from "../../provider"

interface lawState {
    laws: ims_laws[];
    getLaws: () => Promise<void>;
    addLaws: (law: ims_laws) => Promise<void>;
}

export const useLawStore = create<lawState>((set) => {
    return {
        laws: [],

        getLaws: async () => {
            const laws = await lawProvider.getLaw()
            set({ laws })
        },
        addLaws: async (law: ims_laws) => {
            console.log(law)
            const newLaw = await lawProvider.createLaw(law);
            console.log(newLaw)
            set((state: lawState) => ({ laws: [...state.laws, newLaw] }));
        },

    }
});