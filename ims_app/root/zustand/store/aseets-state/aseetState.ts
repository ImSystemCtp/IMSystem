import { ims_assets } from "@prisma/client"
import { create } from 'zustand'
import { assetsProvider } from "@/root/zustand/provider"
import { QueryOptions } from "@/app/types"
import { clear } from "console"
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
    getAssets: () => Promise<void>
    addAssets: (asset: ims_assets) => Promise<void>
    countAssets: () => Promise<number>
    seeMore: () => Promise<void>
    addAssetsCheck: (asset: ims_assets) => Promise<void>
    deleteAssetsCheck: (asset: ims_assets) => Promise<void>
    getAssetsByRequestId: (requestId: string) => Promise<void>
    clearAssetsCheck: () => Promise<void>
    clearAssets: () => Promise<void>
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
        getAssets: async () => {
            const assets = await assetsProvider.getAssets()
            set({ assets })
        },
        countAssets: async () => {
            if (get().count > 0) return get().count
            const count = await assetsProvider.contAssets()
            set({ count })
            return count
        },
        addAssets: async (asset: ims_assets) => {
            set((state: assetState) => ({ assets: [...state.assets, asset] }))
        },
        getAssetsByLocation: async (locationId: number) => {
            set({ filterBy: "assets_regis_location", filterCondition: "equals", filterValue: locationId.toString(), cursor: 0 })
            const query = { limit: LIMIT, offset: get().cursor, orderBy: "assets_no", order: "asc", filterBy: get().filterBy, filterValue: locationId.toString(), filterCondition: get().filterCondition } as QueryOptions
            const assetsByLocationQr = await assetsProvider.getAssetsByLocationQuery(query)
            set({ idLocation: locationId, assetsByLocation: assetsByLocationQr, cursor: get().cursor + LIMIT })
        },
        getAssetsByQuery: async (assetNo: string) => {
            set({ filterBy: "assets_no", filterCondition: "contains", filterValue: assetNo, cursor: 0 })
            const query = {  limit: LIMIT, offset: get().cursor,orderBy: "assets_no", order: "asc", filterBy: get().filterBy, filterValue: get().filterValue, filterCondition: get().filterCondition } as QueryOptions
            const assetsByLocation = await assetsProvider.getAssetsByLocationQuery(query)
            set({ assetsByLocation, cursor: get().cursor + LIMIT })
        },
        getAssetsByRequestId: async (requestId: string) => {
            const assetsByRequestId = await assetsProvider.getAssetsByRequestId(requestId)
            set({ assetsByRequestId })
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
        }
    }
})