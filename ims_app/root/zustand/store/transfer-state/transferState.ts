import { transfersProvider } from "@/root/zustand"
import { create } from "zustand"
interface transferState {
    countTransfers: number
    countTransfersGet: () => Promise<number>
}
export const useTransferStore = create<transferState>((set, get) => {
    return {
        countTransfers: 0,
        countTransfersGet: async () => {
            const countTransfers = await transfersProvider.countTransfers()
            set({ countTransfers })
            return countTransfers
        },
    }
})