import { registerGood, registerLowProvider } from "@/root";
import { ims_assets, ims_register } from "@prisma/client";
import { create } from "zustand";

interface registerLowState {
    register: ims_register;
    assets: ims_assets[];
    addRegisterLow: (register: ims_register, assets: ims_assets[]) => Promise<void>;
}
export const useRegisterLowStore = create<registerLowState>((set) => {
    return {
        register: {} as ims_register,
        assets: [],
        addRegisterLow: async (register: ims_register, assets: ims_assets[]) => {
            const registerLow: registerGood = {
                register,
                assets,
            };
            const newRegisterLow = await registerLowProvider.createLow(registerLow);
            console.log(newRegisterLow)
        },
    };
});

export default useRegisterLowStore;