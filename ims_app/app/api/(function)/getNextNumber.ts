import { prismaDB } from "@/lib/prisma";
import { ims_registered_in } from "@prisma/client";

export default async function getNextNumber<ims_registered_in>() {
    const response = await prismaDB.$queryRaw`SELECT increment_register_in()` as any[];

    if (response && response[0]['increment_register_in()']) {
        const result = JSON.parse(response[0]['increment_register_in()']);

        return {
            tomo: parseInt(result.tomo_actual),
            folio: parseInt(result.folio_actual),
            asiento: parseInt(result.asiento_actual),
            inst_id: 1
        } as ims_registered_in;
    }
    return {
        tomo: 1,
        folio: 1,
        asiento: 1,
        inst_id: 1
    } as ims_registered_in;
}