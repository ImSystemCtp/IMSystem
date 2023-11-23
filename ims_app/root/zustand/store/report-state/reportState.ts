import { reportProvider } from "@/root/zustand";
import { create } from "zustand";
interface reportState {
    reportRegister: registerToReport[];
    reportRequest: requestToReport[];
    getRegisterToReport: (id: number) => Promise<void>;
    getTotalRegister: () => Promise<void>;
    clearReportRegister: () => void;
    getRequestToReport: (id: number) => Promise<void>;
}
export const useReportStore = create<reportState>((set) => {
    return {
        reportRegister: [],
        reportRequest:[],
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
        getRequestToReport: async (id: number) => {
            const response = await reportProvider.getReportToRequest(id);
            set({ reportRequest: response});
        }
    };
});
export default useReportStore;