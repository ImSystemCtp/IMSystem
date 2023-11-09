import { ims_laws } from "@prisma/client"
import { create } from 'zustand'
import { lawProvider } from "@/root/zustand/provider"

interface lawState {
    laws: ims_laws[];
    lawToEdit: ims_laws | null;
    loadingLaw:boolean;
    getLaws: () => Promise<void>;
    createLaw: (law: ims_laws) => Promise<void>;
    selectLawToEdit: (law: ims_laws) => void;
    updateLaw: (lawToUpdate: ims_laws) => Promise<void>;
}

export const useLawStore = create<lawState>((set) => {
    return {
        laws: [],
        lawToEdit: null,
        loadingLaw:false,
        getLaws: async () => {
            set({loadingLaw:true})
            const laws = await lawProvider.getLaw()
            set({loadingLaw:false})
            set({ laws })
        },
        createLaw: async (law: ims_laws) => {
            const newLaw = await lawProvider.createLaw(law);
            set((state: lawState) => ({ laws: [...state.laws, newLaw] }));
        },
        selectLawToEdit: (law: ims_laws) => {
            set({ lawToEdit: law })
        },
        updateLaw: async (lawToUpdate: ims_laws) => {
            const updatedLaw = await lawProvider.updateLaw(lawToUpdate);
            set((state: lawState) => ({
                ...state,
                laws: state.laws.map((law) =>
                    law.law_id === updatedLaw.law_id ? updatedLaw : law
                ),
            }));
        },

    }
});