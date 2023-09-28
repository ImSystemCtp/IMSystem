import { ims_assets } from "@prisma/client"
import { create } from 'zustand'
import { assetsProvider } from "@/root/zustand/provider"
import { QueryOptions } from "@/app/types";
const LIMIT = 5
interface assetState {
    assets: ims_assets[];
    assetsByLocation: ims_assets[];
    count: number;
    idLocation: number;
    cursor: number
    getAssetsByLocation: (locationId: number) => Promise<void>;
    getAssetsByQuery: (assetNo:string) => Promise<void>;
    getAssets: () => Promise<void>;
    addAssets: (asset: ims_assets) => Promise<void>;
    countAssets: () => Promise<number>;
    seeMore: () => Promise<void>;
}

export const useAssetStore = create<assetState>((set, get) => {
    return {
        assets: [],
        assetsByLocation: [],
        count: 0,
        idLocation: 0,
        cursor: 0,

        getAssets: async () => {
            const assets = await assetsProvider.getAssets()
            set({ assets })
        },
        countAssets: async () => {
            if (get().count > 0) return get().count;
            const count = await assetsProvider.contAssets();
            set({ count })
            return count
        },
        addAssets: async (asset: ims_assets) => {
            set((state: assetState) => ({ assets: [...state.assets, asset] }));
        },
        getAssetsByLocation: async (locationId: number) => {
            const query = { limit: LIMIT, offset: get().cursor , orderBy:"assets_no" , order:"asc" , filterBy:"assets_regis_location", filterValue: locationId.toString(), filterCondition:"equals" } as QueryOptions;
            const assetsByLocationQr = await assetsProvider.getAssetsByLocationQuery(query);
            set({idLocation:locationId , assetsByLocation: assetsByLocationQr , cursor: get().cursor + LIMIT })
        },
        getAssetsByQuery: async (assetNo:string) => {
            const query = { assetNo, limit: LIMIT, offset: get().cursor } as QueryOptions;
            const assetsByLocation = await assetsProvider.getAssetsByLocationQuery(query);
            set({ assetsByLocation , cursor: get().cursor + LIMIT });
        },
        seeMore: async () => {
            const query = { limit: LIMIT, offset: get().cursor , orderBy:"assets_no" , order:"asc" ,filterBy:"assets_regis_location", filterValue: get().idLocation.toString(), filterCondition:"equals"} as QueryOptions;
            const assetsByLocationQr = await assetsProvider.getAssetsByLocationQuery(query);
            const assets = [...get().assetsByLocation, ...assetsByLocationQr];
            set({ assetsByLocation: assets , cursor: get().cursor + LIMIT });
        }
        
    }
});