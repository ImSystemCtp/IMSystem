import { ims_assets, ims_request } from "@prisma/client";
import axios from "axios";
const createRequest = async (request: ims_request,assetsCheck:ims_assets[]) => {
    const response = await axios.post('/api/request', request);
    return response.data as ims_request;
}
export const requestProvider = {
    createRequest
}