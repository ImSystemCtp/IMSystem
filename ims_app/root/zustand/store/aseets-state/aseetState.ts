import { EnumAssetsState, ims_assets } from "@prisma/client"
import { create } from 'zustand'
import { assetsProvider } from "@/root/zustand/provider"
import { QueryOptions } from "@/app/types"
import { SearchAssets } from "@/lib/definitions"
const LIMIT = 5
interface assetState {
    assets: ims_assets[]
    assetsByRequestId: ims_assets[]
    assetsByLocation: ims_assets[]
    assetsCheck: ims_assets[]
    count: number
    idLocation: number
    cursor: number
    filterBy: string
    filterCondition: string
    filterValue: string
    getAssetsByLocation: (locationId: number) => Promise<void>
    getAssetsByQuery: (assetNo: string) => Promise<void>
    // getAssets: () => Promise<void>
    addAssets: (asset: ims_assets) => Promise<void>
    countAssets: () => Promise<number>
    seeMore: () => Promise<void>
    addAssetsCheck: (asset: ims_assets) => Promise<void>
    deleteAssetsCheck: (asset: ims_assets) => Promise<void>
    clearAssetsCheck: () => Promise<void>
    clearAssets: () => Promise<void>
    clearAssetsByLocation: (assetsToClear: ims_assets[]) => Promise<void>
    removeAssets: (asset: ims_assets) => Promise<void>
    clearAllAssetsByLocation: () => Promise<void>
    searchAssets: (query: SearchAssets) => Promise<void>
}

export const useAssetStore = create<assetState>((set, get) => {
    return {
        assets: [],
        assetsByRequestId:[],
        assetsByLocation: [],
        count: 0,
        idLocation: 0,
        cursor: 0,
        assetsCheck: [],
        filterBy: "",
        filterCondition: "",
        filterValue: "",
        // getAssets: async () => {
        //     const assets = await assetsProvider.getAssets()
        //     set({ assets })
        // },
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
        getAssetsByLocation: async (locationId: number) => {
            set({ filterBy: "assets_regis_location", filterCondition: "equals", filterValue: locationId.toString(), cursor: 0 })
            const query = { limit: LIMIT, offset: get().cursor, orderBy: "assets_no", order: "asc", filterBy: get().filterBy, filterValue: locationId.toString(), filterCondition: get().filterCondition } as QueryOptions
            const assetsByLocationQr = await assetsProvider.getAssetsByLocationQuery(query) as ims_assets[]
            const  filteredAssets = await assetsByLocationQr.filter(
                (asset) => asset.assets_state !== EnumAssetsState.Malo
            );
            set({ idLocation: locationId, assetsByLocation: filteredAssets, cursor: get().cursor + LIMIT })
        },
        getAssetsByQuery: async (assetNo: string) => {
            const assetsByLocation = await assetsProvider.getAssetsNo(assetNo)
            set({ assetsByLocation:[assetsByLocation], cursor: get().cursor + LIMIT })
        },
        seeMore: async () => {
            const query = { limit: LIMIT, offset: get().cursor, orderBy: "assets_no", order: "asc", filterBy: get().filterBy, filterValue: get().filterValue, filterCondition: get().filterCondition } as QueryOptions
            const assetsByLocationQr = await assetsProvider.getAssetsByLocationQuery(query)
            const assets = [...get().assetsByLocation, ...assetsByLocationQr]
            set({ assetsByLocation: assets, cursor: get().cursor + LIMIT })
        },
        addAssetsCheck: async (asset: ims_assets) => {
            set((state: assetState) => ({ assetsCheck: [...state.assetsCheck, asset] }))
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
        clearAssets: async () => {
            set((state) => ({
                assets: state.assets.length > 0 ? [] : state.assets
            }));
        },
        clearAssetsByLocation: async (assetsToClear: ims_assets[]) => {
            const filteredAssetsByLocation = get().assetsByLocation.filter(
                (currentAsset) => !assetsToClear.some((assetToClear) => assetToClear.assets_no === currentAsset.assets_no)
            );
            set({ assetsByLocation: filteredAssetsByLocation });
        },
        searchAssets: async (query: SearchAssets) => {
            const assetsByLocation = await assetsProvider.searchAssets(query)
            set({ assetsByLocation })
        },
        clearAllAssetsByLocation: async () => {
            set({ assetsByLocation: [] });
        }
    }
})