import { ims_assets } from "@prisma/client"
import { create } from 'zustand'
import { assetsProvider } from "@/root/zustand/provider"
import { SearchAssets } from "@/lib/definitions"
interface assetState {
    assets: ims_assets[]
    assetsByRequestId: ims_assets[]
    assetsBySearch: ims_assets[]
    count: number
    addAssets: (asset: ims_assets) => Promise<void>
    countAssets: () => Promise<number>
    clearAssets: () => Promise<void>
    removeAssets: (asset: ims_assets) => Promise<void>
    clearAllAssetsByLocation: () => Promise<void>
    searchAssets: (query: SearchAssets) => Promise<void>
}

export const useAssetStore = create<assetState>((set, get) => {
    return {
        assets: [],
        assetsByRequestId:[],
        assetsBySearch: [],
        count: 0,
        countAssets: async () => {
            if (get().count > 0) return get().count
            const count = await assetsProvider.contAssets()
            set({ count })
            return count
        },
        addAssets: async (asset: ims_assets) => {
            set((state: assetState) => ({ assets: [...state.assets, asset] }))
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
        searchAssets: async (query: SearchAssets) => {
            const assetsBySearch = await assetsProvider.searchAssets(query)
            set({ assetsBySearch })
        },
        clearAllAssetsByLocation: async () => {
            set({ assetsBySearch: [] });
        }
    }
})