import { prismaDB } from "@/lib";
import { NextResponse } from "next/server";
import { registerGood } from "@/root/types";
export async function POST(req: Request) {
    try {
        const body = await req.json() as registerGood;
        const type = body.register.reg_type;
        const assets = body.assets;
        if (type == 'Register') {

                for (const element of assets) {
                    console.log('1')
                    setTimeout(function () {
                        console.log('2');
                    }, 2000)
                    const reg = await prismaDB.ims_register.create({
                        data: {
                        reg_inst_id: 1,
                        reg_folio: 1,
                        reg_tomo: 1,
                        reg_asiento: 1,
                        reg_type: body.register.reg_type,
                        reg_observation: body.register.reg_observation,
                        reg_usu_id: body.register.reg_usu_id,
                        },
                    });
                    console.log(reg.reg_asiento);
                    await prismaDB.ims_assets.create({ data: element });
                    await prismaDB.ims_register_assets.create({ data: { reg_id: reg.reg_id, assets_no: element.assets_no } });
                }
                
            return NextResponse.json({ message: "Register" });
        }
        return new NextResponse("type no .... ", { status: 401 });
    } catch (error) {
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}