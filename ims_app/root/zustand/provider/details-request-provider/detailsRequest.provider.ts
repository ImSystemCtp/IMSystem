import { ims_details_asset, ims_request } from "@prisma/client";
import axios from "axios";
const getDetailsRequestsByIdRequest = async (idRequest:string) => {
    const response = await axios.get(`/api/detail/request/${idRequest}`);
    return response.data as ims_details_asset[];
}
const updateDetailsRequestState = async (details: ims_details_asset[]) => {
    const response = await axios.put('/api/detail/details/',details);
    return response.data as ims_details_asset[];
}
export const detailsRequestProvider = {
    getDetailsRequestsByIdRequest,
    updateDetailsRequestState
}