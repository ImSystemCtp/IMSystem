import { prismaDB } from "@/lib/prisma";
import { ims_registered_in } from "@prisma/client";
export default async function updateRegisterNumber( tomo:number, folio: number , asiento: number  ) {

    await prismaDB.$executeRaw`UPDATE ims_registered_in SET tomo = ${tomo}, folio = ${folio}, asiento = ${asiento}`;

}