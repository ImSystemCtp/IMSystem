import { detailsRequestProvider } from "@/root/zustand";
import { ims_details_asset } from "@prisma/client";
import { create } from "zustand";
interface detailsRequestState {
    details: ims_details_asset[]
    detailsCheck: ims_details_asset[]
    detailsByIdRequest: ims_details_asset[]
    setDetailRequest: (request: ims_details_asset) => Promise<void>;
    getDetailsRequestByRequestId: (requestId: string) => Promise<void>;
    addDetailsCheck: (detail: ims_details_asset) => Promise<void>;
    deleteDetailsCheck: (detail: ims_details_asset) => Promise<void>;
    updateDetailRequest: (detail: ims_details_asset) => Promise<void>;
}
export const useDetailsRequestStore = create<detailsRequestState>((set, get) => {
    return {
        details: [],
        detailsCheck: [],
        detailsByIdRequest: [],
        setDetailRequest: async (detail: ims_details_asset) => {
            set((state: detailsRequestState) => ({ details: [...state.details, detail] }))
        },
        getDetailsRequestByRequestId: async (requestId: string) => {
            const detailsByIdRequest = await detailsRequestProvider.getDetailsRequestsByIdRequest(requestId);
            set({ detailsByIdRequest });
        },
        addDetailsCheck: async (detail: ims_details_asset) => {
            set((state: detailsRequestState) => ({ detailsCheck: [...state.detailsCheck, detail] }))
        },
        deleteDetailsCheck: async (detail: ims_details_asset) => {
            const detailsCheck = get().detailsCheck.filter((item: ims_details_asset) => item && item.deta_id !== detail.deta_id);
            set({ detailsCheck });
        },
        updateDetailRequest: async (detail: ims_details_asset) => {
            const updatedDetails = get().details.map((d) => (d.deta_id === detail.deta_id ? detail : d));
            set({ details: updatedDetails });
        },

    };
});
export default useDetailsRequestStore;