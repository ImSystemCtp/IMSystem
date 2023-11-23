import { registerAsset } from '@/root/types'
import { EnumRegisterType, ims_register } from '@prisma/client';
import axios from 'axios';
const create = async (register: registerAsset) => {
    let response;
    if (register.register.reg_type === EnumRegisterType.Low){
        response = await axios.post('/api/register/low', register)
        return response.data as ims_register
    }
    else if (register.register.reg_type === EnumRegisterType.Transfer){
        response = await axios.post('/api/register/transfer', register)
        return response.data as ims_register
    }
}
const getRegister = async () => {
    const response = await axios.get('/api/register');
    return response.data as ims_register[];
}
const getRegisterByAssetId = async (id: string) => {
    const response = await axios.get(`/api/assets/register/${id}`);
    return response.data as ims_register;
}
export const registerProvider = {
    getRegister,
    create,
    getRegisterByAssetId
};
