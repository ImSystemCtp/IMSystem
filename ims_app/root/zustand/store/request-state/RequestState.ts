import { RequestType } from "@/root/types";
import { requestProvider } from "@/root/zustand";
import { ims_assets, ims_request } from "@prisma/client";
import { create } from "zustand";
interface requestState {
    request: ims_request;
    assets: ims_assets[];
    addRequest: ( requestDetails: RequestType) => Promise<void>;
}
export const useRequestStore = create<requestState>(() => {
    return {
        request: {} as ims_request,
        assets: [],
        addRequest: async ( requestDetails: RequestType) => {
            await requestProvider.createRequest(requestDetails);
        },
    };
});
export default useRequestStore;