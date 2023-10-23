import { registerProvider } from "@/root/zustand";
import { registerGood,  } from "@/root/types";
import { ims_assets, ims_register } from "@prisma/client";
import { create } from "zustand";
interface registerState {
    register: ims_register;
    assets: ims_assets[];
    addRegister: ( register: registerGood) => Promise<void>;
}
export const useRegisterStore = create<registerState>((set) => {
    return {
        register: {} as ims_register,
        assets: [],
        addRegister: async ( register: registerGood) => {
            await registerProvider.create(register);
        },
    };
});
export default useRegisterStore;