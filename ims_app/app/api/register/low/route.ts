import { prismaDB } from "@/lib";
import { NextResponse } from "next/server";
import { EnumAssetsState, ims_assets, ims_registered_in } from "@prisma/client";
import { registerGood } from "@/root/types";
export async function POST(req: Request) {
    try {
        const body = await req.json() as registerGood;
        const assets = body.assets;
        const response = await prismaDB.ims_register.create({
            data: {
                reg_folio: 1,
                reg_inst_id: 1,
                reg_tomo:  1,
                reg_asiento: 1,
                reg_type: body.register.reg_type,
                reg_observation: body.register.reg_observation,
                reg_usu_id: body.register.reg_usu_id,
            }
        });
            assets.forEach(async (element: ims_assets) => {
                
                element.assets_description = `Ver/${response.reg_tomo},${response.reg_asiento},${response.reg_folio},${response.reg_type}`
                element.assets_state = EnumAssetsState.Malo;
            });
            return NextResponse.json({ message: "Low" });
        return new NextResponse("type no .... ", { status: 401 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}