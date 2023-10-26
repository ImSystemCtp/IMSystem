import { prismaDB } from "@/lib";
import { NextResponse } from "next/server";
import { ims_assets, ims_registered_in } from "@prisma/client";
import { registerGood } from "@/root/types";
import { getNextNumber } from "../../(function)";
export async function POST(req: Request) {
    try {
        const body = await req.json() as registerGood;
        const type = body.register.reg_type;
        const assets = body.assets;
        if (type == 'Register') {
            
            assets.forEach(async (element: ims_assets) => {
                //const registerId = response.reg_id;
                
                const [reg] = await prismaDB.$transaction([
                    prismaDB.ims_register.create({
                        data: {
                            reg_inst_id: 1,
                            reg_folio: 1,
                            reg_tomo:  1,
                            reg_asiento: 1,
                            reg_type: body.register.reg_type,
                            reg_observation: body.register.reg_observation,
                            reg_usu_id: body.register.reg_usu_id,
                        }
                    }),
                   prismaDB.$executeRaw`call increment_register_in()`
                ]);
                prismaDB.ims_assets.create({ data: element })
                prismaDB.ims_register_assets.create({ data: { reg_id: reg.reg_id, assets_no: element.assets_no } })
            });
            return NextResponse.json({ message: "Register" });
        }
        return new NextResponse("type no .... ", { status: 401 });
    } catch (error) {
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}