import { ims_assets } from "@prisma/client"
import { create } from 'zustand'
import { assetsProvider } from "../../provider"

interface assetState {
    assets: ims_assets[];
    assetsByLocation: ims_assets[];
    count: number;
    getAssetsByLocation: (locationId: number) => Promise<void>;
    getAssets: () => Promise<void>;
    addAssets: (asset: ims_assets) => Promise<void>;
    countAssets: () => Promise<number>;
}

export const useAssetStore = create<assetState>((set,get) => {
    return {
        assets: [],
        assetsByLocation: [],
        count: 0,
        getAssets: async () => {
            const assets = await assetsProvider.getAssets()
            set({ assets })
        },
        countAssets: async () => {
            if(get().count>0) return get().count;
            const count =  await assetsProvider.contAssets();
            set({count})
            return count
        },
        addAssets: async (asset: ims_assets) => {
            set((state: assetState) => ({ assets: [...state.assets, asset] }));
        },
        getAssetsByLocation: async (locationId: number) => {
            const assetsByLocation = await assetsProvider.getAssetsByLocation(locationId);
            set({ assetsByLocation });
        }
    }
});