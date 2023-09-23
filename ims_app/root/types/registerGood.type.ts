import { ims_assets, ims_register } from "@prisma/client"


export type registerGood ={
    register: ims_register,
    assets: ims_assets[] 
}