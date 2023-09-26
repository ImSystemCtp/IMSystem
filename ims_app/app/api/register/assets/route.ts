import { prismaDB } from "@/lib";
import { NextResponse } from "next/server";
import { ims_assets, ims_registered_in } from "@prisma/client";
import { registerGood } from "@/root/types";
import { getNextNumber } from "../../function";
export async function POST(req: Request) {
    try {
        console.log("hola")
        const body = await req.json() as registerGood;
        console.log(body)
        const type = body.register.reg_type;
        const assets = body.assets;
        if (type == 'Register') {
            assets.forEach(async (element: ims_assets) => {
                const newRegister = await getNextNumber() as ims_registered_in;
                console.log(newRegister)
                const response = await prismaDB.ims_register.create({
                    data: {
                        reg_folio: newRegister.folio,
                        reg_inst_id: newRegister.inst_id,
                        reg_tomo:  newRegister.tomo,
                        reg_asiento: newRegister.asiento,
                        reg_type: body.register.reg_type,
                        reg_observation: body.register.reg_observation,
                        reg_usu_id: body.register.reg_usu_id,
                    }
                });
                console.log(response)
                const registerId = response.reg_id;

                await prismaDB.ims_assets.create({ data: element })
                await prismaDB.ims_register_assets.create({ data: { reg_id: registerId, assets_no: element.assets_no } })

            });

            return NextResponse.json({ message: "Register" });
        }
        return new NextResponse("type no .... ", { status: 401 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}