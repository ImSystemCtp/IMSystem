import { EmailType } from "@/root/types";
import { ims_request } from "@prisma/client";
import axios from "axios";
const sendEmail = async (request:ims_request) => {
    const userRequest= await axios.get(`/api/users/${request.req_usu_id}`);
    const emailRequest = {
        request,
        user: userRequest.data
    } as EmailType
    const response = await axios.post('/api/send',emailRequest);
    return response.data;
}
export const emailProvider = {
    sendEmail
}