import prisma from "@/lib/prisma";
import { registerAsset } from "@/lib/definitions";
import { NextResponse } from "next/server";
import { getNextNumber, getNumRegister, updateRegisterNumber } from "../../(function)";
import { ims_assets } from "@prisma/client";
import {updatePlateNumber} from "../../(function)/plateUpdate";
export async function POST(req: Request) {
    try {
        const body = await req.json() as registerAsset;
        const type = body.register.reg_type;
        let assets: ims_assets[] = body.assets;
        const register_num = body.plate_num || 0
        const dbNumRegister = await prisma.ims_institution.findMany().then((res) => res[0].inst_current_no_plate)
        console.log(register_num == dbNumRegister)
        if (register_num != dbNumRegister) {
            assets = await updatePlateNumber(assets, dbNumRegister)

        }
        let currentRegisterin = await getNumRegister()
        if (type == 'Register') {
            for (const element of assets) {

                const reg = await prisma.ims_register.create({
                    data: {
                        reg_inst_id: 1,
                        reg_folio: currentRegisterin.folio,
                        reg_tomo: currentRegisterin.tomo,
                        reg_asiento: currentRegisterin.asiento,
                        reg_type: body.register.reg_type,
                        reg_observation: body.register.reg_observation,
                        reg_usu_id: body.register.reg_usu_id,
                        reg_date: body.register.reg_date,
                    },
                });
                await prisma.ims_assets.create({ data: { ...element, assets_curr_location: element.assets_regis_location } });
                await prisma.ims_register_assets.create({ data: { reg_id: reg.reg_id, assets_no: element.assets_no } });
                currentRegisterin = await getNextNumber(currentRegisterin)
            }
            updateRegisterNumber(currentRegisterin.tomo, currentRegisterin.folio, currentRegisterin.asiento)
            await prisma.ims_institution.update({ where: { inst_id: 1 }, data: { inst_current_no_plate: dbNumRegister + assets.length } })
            return NextResponse.json({ message: "Register" });
        }
        return new NextResponse("type no .... ", { status: 401 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

