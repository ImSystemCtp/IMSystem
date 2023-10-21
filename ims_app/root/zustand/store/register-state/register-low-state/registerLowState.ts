import { registerGood,  } from "@/root/types";
import {  registerLowProvider } from "@/root/zustand";
import { ims_assets, ims_register } from "@prisma/client";
import { create } from "zustand";

interface registerLowState {
    register: ims_register;
    assets: ims_assets[];
    addRegisterLow: ( registerLow: registerGood) => Promise<void>;
}
export const useRegisterLowStore = create<registerLowState>((set) => {
    return {
        register: {} as ims_register,
        assets: [],
        addRegisterLow: async ( registerLow: registerGood) => {
            console.log(registerLow);
            const newRegisterLow = await registerLowProvider.createLow(registerLow);
        },
    };
});

export default useRegisterLowStore;