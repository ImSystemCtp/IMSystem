import { prismaDB } from "@/lib";
import { NextResponse } from "next/server";
import { EnumAssetsState, Prisma, ims_assets, ims_register, ims_registered_in } from "@prisma/client";
import { registerGood } from "@/root/types";
export async function POST(req: Request) {
    try {
        const body = await req.json() as registerGood;
        const assets = body.assets;
        const response = await prismaDB.ims_register.create({
            data: {
                reg_folio: 2,
                reg_inst_id: 1,
                reg_tomo: 2,
                reg_asiento: 2,
                reg_type: body.register.reg_type,
                reg_observation: body.register.reg_observation,
                reg_usu_id: body.register.reg_usu_id,
            }
        });
        console.log(response)
        assets.forEach(async (element: ims_assets) => {
            const asset = await prismaDB.ims_assets.update({
                where: {
                    assets_no: element.assets_no,
                },
                data: {
                    assets_state: EnumAssetsState.Malo,
                },
            });
            console.log(asset)
            const updateRegister = await prismaDB.$queryRaw<ims_register[]>`
                SELECT r.* FROM ims_register r JOIN ims_register_assets rs on r.reg_id = rs.reg_id 
                        JOIN ims_assets a on a.assets_no= rs.assets_no
                        WHERE a.assets_no = ${element.assets_no} and r.reg_type = 'Register'`
            console.log(updateRegister[0])
            await prismaDB.ims_register.update({
                where: {
                    reg_id: updateRegister[0].reg_id,
                },
                data: {
                    reg_observation: updateRegister[0].reg_observation + " " + `Ver ${response.reg_tomo},  ${response.reg_folio},  ${response.reg_asiento}`
                },
            });
            console.log(updateRegister[0])
            await prismaDB.ims_register_assets.create({ data: { reg_id: response.reg_id, assets_no: element.assets_no } })
        });


        return NextResponse.json({ message: "Low" });
    } catch (error : any) {
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}