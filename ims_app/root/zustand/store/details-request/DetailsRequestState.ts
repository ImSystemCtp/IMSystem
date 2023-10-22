
import { ims_details_asset } from "@prisma/client";
import { create } from "zustand";
interface requestState {
    details: ims_details_asset[];
    setDetailRequest: ( request: ims_details_asset) => Promise<void>;
}
export const useDetailsRequestStore = create<requestState>((set) => {
    return {
        details: [],
        setDetailRequest: async (detail: ims_details_asset) => {
            set((state: requestState) => ({ details: [...state.details, detail] }))
        },
    };
});
export default useDetailsRequestStore;