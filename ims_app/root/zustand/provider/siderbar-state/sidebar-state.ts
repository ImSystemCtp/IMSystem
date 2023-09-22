import { get } from "http";
import create from "zustand";

export interface SideBarState {
    isOpen: boolean;
}

export const useSideBarStore = create((set) => ({
    isOpen: false,
    toggle: () => set((state: SideBarState) => ({ isOpen: !state.isOpen })),
}));