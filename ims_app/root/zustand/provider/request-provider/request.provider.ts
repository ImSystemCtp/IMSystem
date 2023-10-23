import { RequestType } from "@/root/types";
import {ims_request } from "@prisma/client";
import axios from "axios";
const createRequest = async (requestDetails: RequestType) => {
    const response = await axios.post('/api/request', requestDetails);
    return response.data as ims_request;
}
const getRequestsPending = async () => {
    const response = await axios.get('/api/request/pending');
    return response.data as ims_request[];
}

export const requestProvider = {
    createRequest,
    getRequestsPending,
}