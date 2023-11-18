import { ims_request } from "@prisma/client";
import axios from "axios";

const sendEmail = async (request:ims_request) => {
    console.log('send email2222');
    const response = await axios.post('/api/send',request);
    return response.data;
}
export const emailProvider = {
    sendEmail
}