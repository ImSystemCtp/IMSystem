import { registerGood } from '@/root/types'
import { ims_register } from '@prisma/client'
import axios from 'axios'

const createTransfer = async ( register : registerGood) => {

    const response =  await axios.post('/api/register/transfer', register)

    return response.data as ims_register


}


export const transferProvider= {
    createTransfer,

}