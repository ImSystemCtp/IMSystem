import { PrismaClient, ims_registered_in } from "@prisma/client";

const prisma = new PrismaClient();

export default async function increment_registerIn() {
    let tomo_actual: number | null;
    let folio_actual: number | null;
    let asiento_actual: number | null;

    const register = await prisma.ims_registered_in.findFirst({
        select: {
            tomo: true,
            folio: true,
            asiento: true,
        },
    });

    if (!register) {
        tomo_actual = 1;
        folio_actual = 1;
        asiento_actual = 1;
        await prisma.ims_registered_in.create({
            data: {
                tomo: tomo_actual,
                folio: folio_actual,
                asiento: asiento_actual,
            },
        });
    } else {
        tomo_actual = register.tomo;
        folio_actual = register.folio;
        asiento_actual = register.asiento + 1;

        if (asiento_actual > 25) {
            asiento_actual = 1;
            folio_actual++;

            if (folio_actual > 500) {
                folio_actual = 1;
                tomo_actual++;
            }
        }

        await prisma.$executeRaw`UPDATE ims_registered_in SET tomo = ${tomo_actual}, folio = ${folio_actual}, asiento = ${asiento_actual}`;

    }

    return {
        tomo_actual,
        folio_actual,
        asiento_actual,
    };
}
