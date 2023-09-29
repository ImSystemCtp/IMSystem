import { registerGood } from '@/root/types'
import { ims_register } from '@prisma/client'
import axios from 'axios'

const createLow = async (register: registerGood) => {
    console.log(register)
    const response = await axios.post('/api/register/low', register)
    console.log(response.data)
    return response.data as ims_register

}
export const registerLowProvider = {
    createLow,

}