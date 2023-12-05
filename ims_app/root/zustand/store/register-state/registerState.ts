import { registerAsset } from "@/lib/definitions";
import { registerProvider } from "@/root/zustand";
import { ims_assets, ims_register } from "@prisma/client";
import { create } from "zustand";
interface registerState {
    register: ims_register;
    assets: ims_assets[];
    registerAssetId: ims_register;
    addRegister: ( register: registerAsset) => Promise<void>;
    registerByAssetId: (id: string) => Promise<void>;
}
export const useRegisterStore = create<registerState>((set) => {
    return {
        register: {} as ims_register,
        assets: [],
        registerAssetId: {} as ims_register,
        addRegister: async ( register: registerAsset) => {
            await registerProvider.create(register);
        },
        registerByAssetId: async (id: string) => {
            const response = await registerProvider.getRegisterByAssetId(id);
            set({ registerAssetId: response});
        }
    };
});
export default useRegisterStore;