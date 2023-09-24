
import { ims_register } from '@prisma/client';
import axios from 'axios';

/* const createRegister = async (location: ims_register) => {
    console.log(location)
    const response = await axios.post('/api/register', location);
    console.log(response.data)
    return response.data as ims_register;
}; */
const getRegister = async () => {
    const response = await axios.get('/api/register');

    return response.data as ims_register[];
}
export const registerProvider = {
    getRegister,
};
