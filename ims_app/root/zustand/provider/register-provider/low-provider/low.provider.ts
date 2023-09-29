import { registerGood } from '@/root/types'
import { ims_register } from '@prisma/client'
import axios from 'axios'

const createLow = async ( register : registerGood) => {
    const response =  await axios.post('/api/register/low', register)
    return response.data as ims_register
}
export const registerLowProvider= {
    createLow,

}