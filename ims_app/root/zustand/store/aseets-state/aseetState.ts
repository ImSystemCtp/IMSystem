import { ims_assets } from "@prisma/client"
import { create } from 'zustand'
import { assetsProvider } from "@/root/zustand/provider"
import { SearchAssets } from "@/lib/definitions"
interface assetState {
    assetsBySearch: ims_assets[]
    editAssets: ims_assets
    count: number
    countAssets: () => Promise<number>
    clearAllAssetsByLocation: () => Promise<void>
    searchAssets: (query: SearchAssets) => Promise<void>
    setEditAssets: (assets: ims_assets) => void
}

export const useAssetStore = create<assetState>((set, get) => {
    return {
        assetsBySearch: [],
        editAssets:{} as ims_assets,
        count: 0,
        countAssets: async () => {
            if (get().count > 0) return get().count
            const count = await assetsProvider.contAssets()
            set({ count })
            return count
        },
        setEditAssets: (assets: ims_assets) => {
            set({ editAssets: assets })
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