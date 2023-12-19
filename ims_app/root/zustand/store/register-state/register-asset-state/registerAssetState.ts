
import { registerAssetProvider } from "@/root/zustand";
import { ims_assets, ims_register } from "@prisma/client";
import {create} from "zustand";
import { registerAsset } from "@/lib/definitions";
interface registerAssetState {
    register: ims_register;
    assets: ims_assets[];
    addRegisterAssets: (register: ims_register, assets: ims_assets[]) => Promise<void>;
}
export const useRegisAssetStore = create<registerAssetState>((set) => {
    return {
        register: {} as ims_register,
        assets: [],
        addRegisterAssets: async (register: ims_register, assets: ims_assets[]) => {
            const registerAsset: registerAsset = {
                register,
                assets,
            };
            await registerAssetProvider.createRegister(registerAsset);
        },
    };
});

export default useRegisAssetStore;