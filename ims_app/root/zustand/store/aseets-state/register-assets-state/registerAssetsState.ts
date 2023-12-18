import { ims_assets } from "@prisma/client"
import { create } from 'zustand'
import { registerAssetsProvider } from "@/root/zustand/provider"
interface assetState {
    assets: ims_assets[]
    addAssets: (asset: ims_assets) => Promise<void>
    asset_current_no_plate: Number
    clearAssets: () => Promise<void>
    getCurrentNoPlate: () => Promise<void>
    removeAssets: (asset: ims_assets) => Promise<void>
}

export const useRegisterAssetStore = create<assetState>((set, get) => {
    return {
        assets: [],
        asset_current_no_plate: 0,
        addAssets: async (asset: ims_assets) => {
            set((state: assetState) => ({ assets: [...state.assets, asset] }))
        },
        getCurrentNoPlate: async () => {
            const asset_current_no_plate = await registerAssetsProvider.getCurrentNoPlate()
            set({ asset_current_no_plate })
        },
        removeAssets: async (asset: ims_assets) => {
            const assets = get().assets.filter((item: ims_assets) => item.assets_no !== asset.assets_no)
            set({ assets })
        },
        clearAssets: async () => {
            set((state) => ({
                assets: state.assets.length > 0 ? [] : state.assets
            }));
        },
    }
})