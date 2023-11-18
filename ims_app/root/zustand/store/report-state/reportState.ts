import { reportProvider } from "@/root/zustand";
import { create } from "zustand";
interface reportState {
    reportRegister: registerToReport[];
    getRegisterToReport: (id: number) => Promise<void>;
    getTotalRegister: () => Promise<void>;
    clearReportRegister: () => void;
}
export const useReportStore = create<reportState>((set) => {
    return {
        reportRegister: [],
        getRegisterToReport: async (id: number) => {
            const response = await reportProvider.getAssetsByLocation(id);
            set({ reportRegister: response});
        },
        getTotalRegister: async () => {
            const response = await reportProvider.getTotalRegister();
            set({ reportRegister: response });
        },
        clearReportRegister: () => {
            set({ reportRegister: [] });
        },
    };
});
export default useReportStore;