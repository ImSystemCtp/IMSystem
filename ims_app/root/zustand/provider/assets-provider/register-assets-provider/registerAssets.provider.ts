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
const putNoPlate = async (no_plate:Number) => {
    const response = await axios.put('/api/assets/plate-no', { no_plate });
    return response.data;
}
export const registerAssetsProvider = {
    getCurrentNoPlate,
    createRegister,
    putNoPlate
};