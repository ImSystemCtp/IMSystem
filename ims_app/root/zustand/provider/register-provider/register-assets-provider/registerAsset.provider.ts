
import { registerAsset } from '@/root/types';
import { ims_register } from '@prisma/client';
import axios from 'axios';

const createRegister = async (register: registerAsset) => {
    const response = await axios.post('/api/register/assets', register);
    return response.data as ims_register;
};
const getRegister = async () => {

    const response = await axios.get('/api/register/assets');
    return response.data as ims_register[];
}
export const registerAssetProvider = {
    createRegister,
    getRegister,
};
