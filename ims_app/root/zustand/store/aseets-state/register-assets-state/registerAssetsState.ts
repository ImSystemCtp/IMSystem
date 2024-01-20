import { ims_assets, ims_register } from "@prisma/client"
import { create } from 'zustand'
import {  registerAssetsProvider } from "@/root/zustand/provider"
import { formatPlateNumber } from "@/root/functions"
import { registerAsset } from "@/lib/definitions";
interface assetState {
    assets: ims_assets[]
    addAssets: (asset: ims_assets) => Promise<void>
    asset_current_no_plate: number
    asset_get_no_plate: number
    clearAssets: () => Promise<void>
    getCurrentNoPlate: () => Promise<void>
    removeAssets: (asset: ims_assets) => Promise<void>
    updateNoPlate: () => Promise<void>
    updateAssetsNoPlate: () => Promise<void>
    addRegisterAssets: (register: ims_register, assets: ims_assets[], plate_num:number ) => Promise<void>;
}
export const useRegisterAssetStore = create<assetState>((set, get) => {
    return {
        assets: [],
        asset_current_no_plate: 0,
        asset_get_no_plate: 0,
        addAssets: async (asset: ims_assets) => {
            set((state: assetState) => ({ assets: [...state.assets, asset] }))
        },
        getCurrentNoPlate: async () => {
            const asset_current_no_plate = await registerAssetsProvider.getCurrentNoPlate()
            set({ asset_current_no_plate })
            set({ asset_get_no_plate: asset_current_no_plate })
        },
        removeAssets: async (asset: ims_assets) => {
            const assets = get().assets.filter((item: ims_assets) => item.assets_no !== asset.assets_no)
            set({ assets })
            get().updateAssetsNoPlate();
        },
        updateNoPlate: async () => {
            const { asset_current_no_plate } = get();
            set({ asset_current_no_plate: Number(asset_current_no_plate)+1 });
        },
        clearAssets: async () => {
            set((state) => ({
                assets: state.assets.length > 0 ? [] : state.assets
            }));
        },
        updateAssetsNoPlate: async () => {
            const { asset_get_no_plate, assets } = get();
            const newAssets = assets.map((asset, index) => ({
                ...asset,
                assets_no: formatPlateNumber(Number(asset_get_no_plate) + index + 1)
            }));
            set({ assets: newAssets });
        },
        addRegisterAssets: async (register: ims_register, assets: ims_assets[], plate_num:number ) => {
            const registerAsset: registerAsset = {
                register,
                assets,
                plate_num
            };
            await registerAssetsProvider.createRegister(registerAsset);
        },
    }
})