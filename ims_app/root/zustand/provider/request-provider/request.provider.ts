import { ims_request } from "@prisma/client";
import axios from "axios";
import { RequestType } from "@/root/types";

const createRequest = async (request: RequestType) => {
    console.log(request)
    const response = await axios.post('/api/request', request);
    console.log(response.data)
    return response.data as ims_request;
}

export const requestProvider = {
    createRequest
}