import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { EnumAssetsState, ims_assets, ims_register, ims_registered_in } from "@prisma/client";
import { registerAsset } from "@/lib/definitions";
import { getNextNumber, getNumRegister, updateRegisterNumber } from "../../(function)";
export async function POST(req: Request) {
    try {
        const body = await req.json() as registerAsset;
        let currentRegisterin = await getNumRegister()
        const assets = body.assets;
        const response = await prisma.ims_register.create({
            data: {
                reg_folio: currentRegisterin.folio,
                reg_inst_id: 1,
                reg_tomo: currentRegisterin.tomo,
                reg_asiento: currentRegisterin.asiento,
                reg_type: body.register.reg_type,
                reg_observation: body.register.reg_observation,
                reg_usu_id: body.register.reg_usu_id,
                reg_date: body.register.reg_date,
            }
        });
        assets.forEach(async (element: ims_assets) => {
                await prisma.ims_assets.update({
                where: {
                    assets_no: element.assets_no,
                },
                data: {
                    assets_state: EnumAssetsState.Malo,
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
                    reg_observation: updateRegister[0].reg_observation + " " + ` B: Ver ${response.reg_tomo},  ${response.reg_folio},  ${response.reg_asiento}`
                },
            });
            await prisma.ims_register_assets.create({ data: { reg_id: response.reg_id, assets_no: element.assets_no } })
            currentRegisterin =await  getNextNumber(currentRegisterin)
        });
        updateRegisterNumber(currentRegisterin.tomo, currentRegisterin.folio, currentRegisterin.asiento)
        return NextResponse.json({ message: "Low" });
    } catch (error : any) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}