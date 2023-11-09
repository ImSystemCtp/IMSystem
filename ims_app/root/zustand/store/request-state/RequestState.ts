import { RequestType } from "@/root/types";
import { requestProvider } from "@/root/zustand";
import { ims_assets, ims_request } from "@prisma/client";
import { create } from "zustand";
interface requestState {
    request: ims_request;
    requestSelected: ims_request;
    assets: ims_assets[];
    requestPending: ims_request[];
    isLoadRequest: boolean;
    addRequest: ( requestDetails: RequestType) => Promise<void>;
    getRequestsPending: () => Promise<void>;
    setRequestSelected: (requestSelected: ims_request) => void;
}
export const useRequestStore = create<requestState>((set) => {
    return {
        request: {} as ims_request,
        requestSelected: {} as ims_request,
        assets: [],
        isLoadRequest: false,
        requestPending: [],
        addRequest: async ( requestDetails: RequestType) => {
            await requestProvider.createRequest(requestDetails);
        },
        getRequestsPending: async () => {
            set({ isLoadRequest: true })
            const requestPending =  await requestProvider.getRequestsPending();
            set({ requestPending, isLoadRequest: false })
        },
        setRequestSelected: async (requestSelected: ims_request) => {
            set({ requestSelected });
        },
    };
});
export default useRequestStore;