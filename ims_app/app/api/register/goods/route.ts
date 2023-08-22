import { prismaDB } from "@/lib";
import increment_registerIn from "../../function";
import { registerGood } from "@/app/root";
import { NextResponse } from "next/server";
import { ims_goods } from "@prisma/client";

export async function POST(req: Request) {
    try {
        const body = await req.json() as registerGood;
        const type = body.reg_type;
        const goods = body.goods;
        if (type == 'Register') {
            goods.forEach(async (element: ims_goods) => {
                const registerIN = await increment_registerIn();
                const response = await prismaDB.ims_register.create({
                    data: {
                        reg_folio: registerIN.folio_actual,
                        reg_tomo: registerIN.tomo_actual,
                        reg_asiento: registerIN.asiento_actual,
                        reg_type: body.reg_type,
                        reg_observation: body.reg_observation,
                        reg_usu_id: body.reg_usu_id
                    }
                });

                const registerId = response.reg_id;

                await prismaDB.ims_goods.create({ data: element })
                await prismaDB.ims_register_goods.create({ data: { reg_id: registerId, goods_no: element.goods_no } })
            });
            return NextResponse.json({ message: "Register" });
        }
        return new NextResponse("type no .... ", { status: 401 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}