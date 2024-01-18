import { RequestType } from "@/lib/definitions";
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
const updateRequestState = async (request: ims_request) => {
    const response = await axios.put(`/api/request/${request.req_id}`,request);
    return response.data as ims_request;
}
const countRequestsPending = async () => {
    const response = await axios.get('/api/request/pending/count');
    return response.data as number;
}
export const requestProvider = {
    createRequest,
    getRequestsPending,
    updateRequestState,
    countRequestsPending,
}