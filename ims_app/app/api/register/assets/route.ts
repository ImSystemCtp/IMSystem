import prisma from "@/lib/prisma";
import { registerAsset } from "@/lib/definitions";
import { NextResponse } from "next/server";
import { getNextNumber, getNumRegister, updateRegisterNumber } from "../../(function)";
export async function POST(req: Request) {
    try {
        const body = await req.json() as registerAsset;
        const type = body.register.reg_type;
        const assets = body.assets;
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
                    await prisma.ims_assets.create({ data:{...element, assets_curr_location:element.assets_regis_location} });
                    await prisma.ims_register_assets.create({ data: { reg_id: reg.reg_id, assets_no: element.assets_no } });
                    currentRegisterin =await  getNextNumber(currentRegisterin)
                }
                updateRegisterNumber(currentRegisterin.tomo, currentRegisterin.folio, currentRegisterin.asiento)
            return NextResponse.json({ message: "Register" });
        }
        return new NextResponse("type no .... ", { status: 401 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}