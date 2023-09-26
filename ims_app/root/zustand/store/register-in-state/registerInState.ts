import { ims_registered_in } from "@prisma/client";
import { registerInProvider } from "../../provider/register-in-provider/register-in.provider";
import { create } from "zustand";
interface RegisterInState {
    registerIn: ims_registered_in;
    getRegisterIn: () => Promise<void>;
}
export const useRegisterInStore = create<RegisterInState>((set) => {
    return {
        registerIn: {} as ims_registered_in,
        getRegisterIn: async () => {
            const registerIn = await registerInProvider.getRegisterIn()
            set({ registerIn })
        },
    }
});