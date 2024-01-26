import { ims_assets } from "@prisma/client"
import { create } from "zustand"

interface modalState {
    isSelect: boolean
    asset: ims_assets
    setAsset: (asset: ims_assets) => void
    clearAsset: () => void
}

export const useModalStore = create<modalState>((set, get) => {
    return {
        isSelect: false,
        asset: {} as ims_assets,
        setAsset: (asset: ims_assets) => {
            set({ asset , isSelect: true})
            
        }        ,
        clearAsset: () => {
            set({ asset: {} as ims_assets,  isSelect: false })
        }
    }
})