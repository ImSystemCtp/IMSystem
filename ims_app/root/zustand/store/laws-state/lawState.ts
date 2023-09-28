import { ims_laws } from "@prisma/client"
import { create } from 'zustand'
import { lawProvider } from "@/root/zustand/provider"

interface lawState {
    laws: ims_laws[];
    lawToEdit: ims_laws | null;
    getLaws: () => Promise<void>;
    addLaws: (law: ims_laws) => Promise<void>;
    selectLawToEdit: (law: ims_laws) => void;
}

export const useLawStore = create<lawState>((set,get) => {
    return {
        laws: [],
        lawToEdit: null,
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
        selectLawToEdit: (law: ims_laws) => {
            set({ lawToEdit: law })
        }

    }
});