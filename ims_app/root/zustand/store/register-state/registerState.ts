import { registerProvider } from "@/root/zustand";
import { registerGood,  } from "@/root/types";
import { ims_assets, ims_register } from "@prisma/client";
import { create } from "zustand";
interface registerState {
    register: ims_register;
    assets: ims_assets[];
    registerAssetId: ims_register[];
    addRegister: ( register: registerGood) => Promise<void>;
    registerByAssetId: (id: string) => Promise<void>;
}
export const useRegisterStore = create<registerState>((set) => {
    return {
        register: {} as ims_register,
        assets: [],
        registerAssetId: [],
        addRegister: async ( register: registerGood) => {
            await registerProvider.create(register);
        },
        registerByAssetId: async (id: string) => {
            const response = await registerProvider.getRegisterByAssetId(id);
            console.log(response);
            set({ registerAssetId: response});
        }
    };
});
export default useRegisterStore;