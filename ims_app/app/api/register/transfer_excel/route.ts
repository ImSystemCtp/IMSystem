import prisma from "@/lib/prisma";
import { EnumAssetsState, EnumRegisterType, ims_register } from "@prisma/client";

type low_excel = {
    tomo: number,
    folio: number,
    asiento: number,
    plate: string,
    observation: string,
    location: string,
}


export async function POST(req: Request) {
    try {
        const body = await req.json() as low_excel;
        console.log(body);
        const plate = body.plate;
        const response = await prisma.ims_register.create({
            data: {
                reg_folio: body.folio,
                reg_inst_id: 1,
                reg_tomo: body.tomo,
                reg_asiento: body.asiento,
                reg_type: EnumRegisterType.Transfer,
                reg_observation: body.observation,
                reg_usu_id: 1,
                reg_date: new Date(),
            }
        })
        const platesFormatted = formatString(plate);

        const assets = await prisma.ims_assets.findMany({
            where: {
                assets_no: {
                    in: platesFormatted
                }
            }
        })
        let location = await prisma.ims_locations.findFirst({
            where: { location_name: body.location }
        });
        if (location === null) {
            location = await prisma.ims_locations.create({
                data: { location_name: body.location }
            });
            console.log("UBICACION CREADA")
        }
        for (const element of assets) {
            await prisma.ims_assets.update({
                where: {
                    assets_no: element.assets_no,
                },
                data: {
                    assets_state: EnumAssetsState.Regular,
                    assets_curr_location: location.location_id,
                },
            });
            const updateRegister = await prisma.$queryRaw<ims_register[]>`
        SELECT r.* FROM ims_register r JOIN ims_register_assets rs on r.reg_id = rs.reg_id
                JOIN ims_assets a on a.assets_no= rs.assets_no
                WHERE a.assets_no = ${element.assets_no} and r.reg_type = 'Register'`
            await prisma.ims_register.update({
                where: {
                    reg_id: updateRegister[0].reg_id,
                },
                data: {
                    reg_observation: updateRegister[0].reg_observation + "-" + `T:Ver ${response.reg_tomo},${response.reg_folio},${response.reg_asiento}`
                },
            });
            await prisma.ims_register_assets.create({ data: { reg_id: response.reg_id, assets_no: element.assets_no } })
        }
    } catch (e) {
        console.log(e);
    }
}

function formatString(input: string): string[] {

    const numbers = input.split(',');


    const formattedNumbers = numbers.map(num => {

        const paddedNum = num.padStart(4, '0');

        return `4167-${paddedNum}`;
    });


    return formattedNumbers;
}