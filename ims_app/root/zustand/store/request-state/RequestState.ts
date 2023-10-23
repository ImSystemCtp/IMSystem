import { RequestType } from "@/root/types";
import { requestProvider } from "@/root/zustand";
import { ims_assets, ims_request } from "@prisma/client";
import { create } from "zustand";
interface requestState {
    request: ims_request;
    requestSelected: ims_request;
    assets: ims_assets[];
    requestPending: ims_request[];
    addRequest: ( requestDetails: RequestType) => Promise<void>;
    getRequestsPending: () => Promise<void>;
    setRequestSelected: (requestSelected: ims_request) => void;
    updateRequestState: (request: ims_request) => Promise<void>;
}
export const useRequestStore = create<requestState>((set,get) => {
    return {
        request: {} as ims_request,
        requestSelected: {} as ims_request,
        assets: [],
        requestPending: [],
        addRequest: async ( requestDetails: RequestType) => {
            await requestProvider.createRequest(requestDetails);
        },
        getRequestsPending: async () => {
            const requestPending =  await requestProvider.getRequestsPending();
            set({ requestPending })
        },
        setRequestSelected: async (requestSelected: ims_request) => {
            set({ requestSelected });
        },
        updateRequestState: async (request: ims_request) => {
            const requestUpdated = await requestProvider.updateRequestState(request);
            const currentRequestPending = get().requestPending;
            const updatedRequestPending = currentRequestPending.filter(
                (req:ims_request) => req.req_id !== requestUpdated.req_id
            );
            set({ requestPending: updatedRequestPending });
        }
    };
});
export default useRequestStore;