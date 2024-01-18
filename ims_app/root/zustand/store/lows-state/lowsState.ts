import { lowsProvider } from "@/root/zustand"
import { create } from "zustand"
interface lowState {
    countLows: number
    countLowsGet: () => Promise<number>
}
export const useLowStore = create<lowState>((set, get) => {
    return {
        countLows: 0,
        countLowsGet: async () => {
            const countLows = await lowsProvider.countLows()
            set({ countLows })
            return countLows
        },
    }
})