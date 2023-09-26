import { ims_assets } from "@prisma/client"
import { create } from 'zustand'
import { assetsProvider } from "../../provider"

interface assetState {
    assets: ims_assets[];
    getAssets: () => Promise<void>;
    addAssets: (asset: ims_assets) => Promise<void>;
}

export const useAssetStore = create<assetState>((set) => {
    return {
        assets: [],
        getAssets: async () => {
            const assets = await assetsProvider.getAssets()
            set({ assets })
        },
        addAssets: async (asset: ims_assets) => {
            set((state: assetState) => ({ assets: [...state.assets, asset] }));
        },
    }
});