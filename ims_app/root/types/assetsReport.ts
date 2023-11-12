import { ims_assets, ims_register } from "@prisma/client"
export type assetsReport ={
    register: ims_register,
    assets: ims_assets
    location: string | null,
    law: string | null,
}