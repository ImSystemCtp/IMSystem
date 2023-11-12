import { reportProvider } from "@/root/zustand";
import { create } from "zustand";
interface reportState {
    reportRegister: registerToReport[];
    getRegisterToReport: (id: number) => Promise<void>;
}
export const useReportStore = create<reportState>((set) => {
    return {
        reportRegister: [],
        getRegisterToReport: async (id: number) => {
            const response = await reportProvider.getAssetsByLocation(id);
            console.log(response);
            set({ reportRegister: response});
        }
    };
});
export default useReportStore;