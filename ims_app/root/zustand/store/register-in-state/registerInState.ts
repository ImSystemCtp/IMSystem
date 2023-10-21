import { ims_registered_in } from "@prisma/client";
import { registerInProvider } from "@/root/zustand/provider";
import { create } from "zustand";
interface RegisterInState {
    registerIn: ims_registered_in;
    getRegisterIn: () => Promise<void>;
}
export const useRegisterInStore = create<RegisterInState>((set) => {
    return {
        registerIn: {} as ims_registered_in,
        getRegisterIn: async () => {
            console.log("store")
            const registerIn = await registerInProvider.getRegisterIn()
            set({ registerIn })
        },
    }
});