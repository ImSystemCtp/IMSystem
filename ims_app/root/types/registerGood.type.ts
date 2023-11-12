import { ims_assets, ims_register } from "@prisma/client"


export type registerAsset ={
    register: ims_register,
    assets: ims_assets[]
}