import { prismaDB } from "@/lib";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const registerIN = await increment_registerIn();
        const body = await req.json() as registerGood;
        const response = await prismaDB.ims_register.create({
            data: {
                reg_folio: registerIN.folio_actual,
                reg_tomo: registerIN.tomo_actual,
                reg_asiento: registerIN.asiento_actual,
                reg_type: body.reg_type,
                reg_observation: body.reg_observation,
                reg_usu_id: body.reg_usu_id,
            }
        });
        const registerId = response.reg_id;
        const type = body.reg_type;
        const assets = body.assets;
        if (type == 'Register') {
            assets.forEach(async (element: any) => {
                const resp = await prismaDB.ims_assets.create({ data: element })
                await prismaDB.ims_register_assets.create({ data: { reg_id: registerId, assets_no: element.assets_no } })
            });
        } else if (type == 'Transfer') {
            assets.forEach(async (good: any) => {
                prismaDB.ims_assets.update({ where: { assets_no: good.assets_no }, data: good })
            });
        } else if (type == 'Low') {
            assets.forEach(async (good: any) => {
                prismaDB.ims_assets.update({ where: { assets_no: good.assets_no }, data: good })
            })
        }
        return NextResponse.json(response);

    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

export async function GET() {
    try {
        const timeNow = await prismaDB.$queryRawUnsafe('SELECT NOW()');
        console.log(timeNow);
        const response = await prismaDB.ims_register.findMany();
        if (response) {
            return NextResponse.json(response);
        }
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
