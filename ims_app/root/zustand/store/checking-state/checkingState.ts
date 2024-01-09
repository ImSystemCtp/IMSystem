import { create } from "zustand";


interface checkingState {
    isAuthorized: boolean;
    setIsAuthorized: (isAuthorized: boolean) => void;
}

export const useCheckingStore = create<checkingState>((set, get) => {
    return {
        isAuthorized: false,
        setIsAuthorized: (isAuthorized: boolean) => {
            set({ isAuthorized });
        }
    }
});