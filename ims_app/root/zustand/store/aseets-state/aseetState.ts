import { ims_assets } from "@prisma/client"
import { create } from 'zustand'
import { assetsProvider } from "../../provider"

interface assetState {
    assets: ims_assets[];
    getAssets: () => Promise<void>;
}

export const useAssetStore = create<assetState>((set) => {
    return {
        assets: [],

        getAssets: async () => {
            const assets = await assetsProvider.getAssets()
            set({ assets })
        },
    }
});