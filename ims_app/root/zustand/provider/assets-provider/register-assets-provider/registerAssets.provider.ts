import { registerAsset } from '@/lib/definitions';
import { ims_register } from '@prisma/client';
import axios from 'axios';
const getCurrentNoPlate = async () => {
    const response = await axios.get('/api/assets/plate-no');
    return response.data;
}
const createRegister = async (register: registerAsset) => {
    const response = await axios.post('/api/register/assets', register);
    return response.data as ims_register;
};
export const registerAssetsProvider = {
    getCurrentNoPlate,
    createRegister
};