import { ims_assets } from "@prisma/client"
import { create } from 'zustand'
interface assetCheckState {
    assetsCheck: ims_assets[]
    addAssetsCheck: (asset: ims_assets) => Promise<void>
    deleteAssetsCheck: (asset: ims_assets) => Promise<void>
    clearAssetsCheck: () => Promise<void>
}

export const useAssetCheckStore = create<assetCheckState>((set,get) => {
    return {
        assetsCheck: [],
        addAssetsCheck: async (asset: ims_assets) => {
            set((state: assetCheckState) => ({ assetsCheck: [...state.assetsCheck, asset] }))
        },
        deleteAssetsCheck: async (asset: ims_assets) => {
            const assetsCheck = get().assetsCheck.filter((item:ims_assets) => item.assets_no !== asset.assets_no)
            set({ assetsCheck })
        },
        clearAssetsCheck: async () => {
            set((state) => ({
                assetsCheck: state.assetsCheck.length > 0 ? [] : state.assetsCheck
            }));
        },
    }
})