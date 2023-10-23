import { ims_details_asset } from "@prisma/client";
import axios from "axios";
const getDetailsRequestsByIdRequest = async (idRequest:string) => {
    const response = await axios.get(`/api/detail/request/${idRequest}`);
    return response.data as ims_details_asset[];
}
export const detailsRequestProvider = {
    getDetailsRequestsByIdRequest,
}