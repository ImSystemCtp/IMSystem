import { ims_responsible } from "@prisma/client"
import { create } from 'zustand'
import { lawProvider, responsibleProvider } from "@/root/zustand/provider"

interface responsibleState {
    responsibles: ims_responsible[];
    responsibleToEdit: ims_responsible | null;
    loadingResponsible: boolean;
    getResponsibles: () => Promise<void>;
    createResponsible: (responsible: ims_responsible) => Promise<void>;
    selectResponsibleToEdit: (responsible: ims_responsible) => void;
    updateResponsible: (responsibleToUpdate: ims_responsible) => Promise<void>;
}

export const useResponsibleStore = create<responsibleState>((set) => {
    return {
        responsibles: [],
        responsibleToEdit: null,
        loadingResponsible: false,
        getResponsibles: async () => {
            set({ loadingResponsible: true })
            const responsibles = await responsibleProvider.getResponsible()
            set({ loadingResponsible: false })
            set({ responsibles })
        },
        createResponsible: async (responsible: ims_responsible) => {
            const newResponsible = await responsibleProvider.createResponsible(responsible);
            set((state: responsibleState) => ({
                ...state,
                responsibles: [...state.responsibles, newResponsible]
            }));
        },
        selectResponsibleToEdit: (responsible: ims_responsible) => {
            set({ responsibleToEdit: responsible })
        },
        updateResponsible: async (responsibleToUpdate: ims_responsible) => {
            const updatedResponsible = await responsibleProvider.updateResponsible(responsibleToUpdate);
            set((state: responsibleState) => ({
                ...state,
                laws: state.responsibles.map((responsible) =>
                    responsible.responsible_id === updatedResponsible.responsible_id ? updatedResponsible : responsible
                ),
            }));
        },

    }
});