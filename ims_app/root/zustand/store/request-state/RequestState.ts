import { requestProvider } from "@/root/zustand";
import { ims_assets, ims_request } from "@prisma/client";
import { create } from "zustand";
interface requestState {
    request: ims_request;
    assets: ims_assets[];
    addRequest: ( request: ims_request, assetsCheck: ims_assets[]) => Promise<void>;
}
export const useRequestStore = create<requestState>(() => {
    return {
        request: {} as ims_request,
        assets: [],
        addRequest: async ( request: ims_request,assetsCheck: ims_assets[]) => {
            await requestProvider.createRequest(request,assetsCheck);
        },
    };
});
export default useRequestStore;