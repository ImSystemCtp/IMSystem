
import { detailsRequestProvider } from "@/root/zustand";
import { ims_details_asset } from "@prisma/client";
import { create } from "zustand";
interface requestState {
    details: ims_details_asset[];
    detailsByIdRequest: ims_details_asset[];
    setDetailRequest: ( request: ims_details_asset) => Promise<void>;
    getDetailsRequestByRequestId: (requestId:string) => Promise<void>;
}
export const useDetailsRequestStore = create<requestState>((set) => {
    return {
        details: [],
        detailsByIdRequest: [],
        setDetailRequest: async (detail: ims_details_asset) => {
            set((state: requestState) => ({ details: [...state.details, detail] }))
        },
        getDetailsRequestByRequestId: async (requestId:string) => {
            const detailsByIdRequest = await detailsRequestProvider.getDetailsRequestsByIdRequest(requestId);
            set({ detailsByIdRequest });
        }

    };
});
export default useDetailsRequestStore;