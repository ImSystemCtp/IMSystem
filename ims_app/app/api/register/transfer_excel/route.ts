import prisma from "@/lib/prisma";
import { EnumRegisterType , ims_register } from "@prisma/client";

type low_excel = {
    tomo:number,
    folio:number,
    asiento:number,
    plate:string,
    observation:string,
}


export async function POST(req: Request) {
    const body = await req.json() as low_excel;
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

    for (const element of assets) {
      
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
    

}

function formatString(input: string): string[] {
    // Separar la cadena de entrada en un arreglo de strings
    const numbers = input.split(',');

    // Mapear cada número para formatearlo
    const formattedNumbers = numbers.map(num => {
        // Añadir ceros a la izquierda si el número tiene menos de 4 dígitos
        const paddedNum = num.padStart(4, '0');
        // Concatenar el prefijo "4167-" con el número formateado
        return `4167-${paddedNum}`;
    });

    // Retornar el nuevo arreglo de strings formateadas
    return formattedNumbers;
}