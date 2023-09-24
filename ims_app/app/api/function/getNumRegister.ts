import { prismaDB } from "@/lib/prisma";


export default async function getNumRegister<ims_registered_in>() {
    let tomo: number;
    let folio: number;
    let asiento: number;
    const register = await prismaDB.ims_registered_in.findFirst({
        select: {
            tomo: true,
            folio: true,
            asiento: true,
            inst_id: true,  
        },
    });

    if (!register) {
        tomo = 1;
        folio = 1;
        asiento = 1;
        await prismaDB.ims_registered_in.create({
            data: {
                tomo: tomo,
                folio: folio,
                asiento: asiento,
                inst_id:1
            },
        });
    }else{
        tomo=register.tomo;
        folio=register.folio;
        asiento=register.asiento;
    } 

    return {
        tomo,
        folio,
        asiento,
    } as ims_registered_in;
}