
import { ims_register } from '@prisma/client';
import axios from 'axios';
const getRegister = async () => {
    const response = await axios.get('/api/register');

    return response.data as ims_register[];
}
export const registerProvider = {
    getRegister,
};
