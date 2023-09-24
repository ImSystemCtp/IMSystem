
import { registerGood } from '@/root/types';
import { ims_register } from '@prisma/client';
import axios from 'axios';

const createRegister = async (register: registerGood) => {
    console.log(register)
    const response = await axios.post('/api/register/assets', register);
    console.log(response.data)
    return response.data as ims_register;
};
const getRegister = async () => {

    const response = await axios.get('/api/register/assets');

    return response.data as ims_register[];
}
export const registerProvider = {
    createRegister,
    getRegister,
};
