import { RequestType } from "@/root/types";
import { requestProvider } from "@/root/zustand";
import { ims_assets, ims_request } from "@prisma/client";
import { create } from "zustand";
interface requestState {
    request: ims_request;
    assets: ims_assets[];
    requestPending: ims_request[];
    addRequest: ( requestDetails: RequestType) => Promise<void>;
    getRequestsPending: () => Promise<void>;
}
export const useRequestStore = create<requestState>((set) => {
    return {
        request: {} as ims_request,
        assets: [],
        requestPending: [],
        addRequest: async ( requestDetails: RequestType) => {
            await requestProvider.createRequest(requestDetails);
        },
        getRequestsPending: async () => {
            const requestPending =  await requestProvider.getRequestsPending();
            set({ requestPending })
        }
    };
});
export default useRequestStore;