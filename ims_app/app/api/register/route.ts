import prisma from "@/lib/prisma";
import { ims_registered_in } from "@prisma/client";
import { NextResponse } from "next/server";


/* export async function POST(req: Request) {
    try {
        const registerIN = {} as ims_registered_in;
        const body = await req.json() as registerAsset;
        const response = await prisma.ims_register.create({
            data: {
                reg_inst_id: 1,
                reg_folio: registerIN.folio,
                reg_tomo: registerIN.tomo,
                reg_asiento: registerIN.asiento,
                reg_type: body.register.reg_type,
                reg_observation: body.register.reg_observation,
                reg_usu_id: body.register.reg_usu_id,
            }
        });
        const registerId = response.reg_id;
        const type = body.register.reg_type;
        const assets = body.assets;
        if (type == 'Register') {
            assets.forEach(async (element: any) => {
                const resp = await prisma.ims_assets.create({ data: element })
                await prisma.ims_register_assets.create({ data: { reg_id: registerId, assets_no: element.assets_no } })
            });
        } else if (type == 'Transfer') {
            assets.forEach(async (good: any) => {
                prisma.ims_assets.update({ where: { assets_no: good.assets_no }, data: good })
            });
        } else if (type == 'Low') {
            assets.forEach(async (good: any) => {
                prisma.ims_assets.update({ where: { assets_no: good.assets_no }, data: good })
            })
        }
        return NextResponse.json(response);

    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
} */

export async function GET() {
    try {
        const response = await prisma.ims_register.findMany();
        if (response) {
            return NextResponse.json(response);
        }
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
