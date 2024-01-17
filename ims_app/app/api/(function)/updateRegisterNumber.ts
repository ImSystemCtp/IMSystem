import prisma from "@/lib/prisma";
export default async function updateRegisterNumber( tomo:number, folio: number , asiento: number  ) {

    await prisma.ims_registered_in.updateMany({
        data: {
            tomo: tomo,
            folio: folio,
            asiento: asiento
        }
    });

}