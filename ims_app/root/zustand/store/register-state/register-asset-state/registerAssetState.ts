import { registerAsset } from "@/root/types";
import { registerAssetProvider } from "@/root/zustand";
import { ims_assets, ims_register } from "@prisma/client";
import {create} from "zustand";
interface registerAssetState {
    register: ims_register;
    assets: ims_assets[];
    addRegisterAssets: (register: ims_register, assets: ims_assets[]) => Promise<void>;
}
export const useRegisterAssetStore = create<registerAssetState>((set) => {
    return {
        register: {} as ims_register,
        assets: [],
        addRegisterAssets: async (register: ims_register, assets: ims_assets[]) => {
            const registerAsset: registerAsset = {
                register,
                assets,
            };
            const newRegisterAsset = await registerAssetProvider.createRegister(registerAsset);
        },
    };
});

export default useRegisterAssetStore;