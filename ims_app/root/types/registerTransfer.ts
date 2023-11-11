import { ims_assets, ims_register } from "@prisma/client"


export type registerTransfer ={
    register: ims_register,
    assets: ims_assets[],
    new_location: string
}