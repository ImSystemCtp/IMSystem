import { ims_goods, ims_register } from "@prisma/client"


export type registerGood = ims_register & { goods: ims_goods[] };