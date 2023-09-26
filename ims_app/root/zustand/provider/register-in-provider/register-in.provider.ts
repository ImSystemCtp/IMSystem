import { ims_registered_in } from "@prisma/client";
import axios from "axios";
const getRegisterIn = async () => {
    const response = await axios.get('/api/register-in');

    return response.data as ims_registered_in;
}
export const registerInProvider = {
    getRegisterIn,
};