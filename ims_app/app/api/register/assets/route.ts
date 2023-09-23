import { prismaDB } from "@/lib";
import { NextResponse } from "next/server";
import { ims_goods, ims_registered_in } from "@prisma/client";
import { registerGood } from "@/root/types";
import getNumRegister from "../../function/getNumRegister";
import { getNextNumber, updateRegisterNumber } from "../../function";
export async function POST(req: Request) {
    try {
        console.log("await req.json()")
        const body = await req.json() as registerGood;
        console.log(body)
        const type = body.register.reg_type;
        const goods = body.goods;
        console.log(type)
        let tomoNew: number;
        let folioNew: number;
        let asientoNew: number;
        if (type == 'Register') {
            let registerIN = await getNumRegister() as ims_registered_in;

            tomoNew = registerIN.tomo;
            folioNew = registerIN.folio;
            asientoNew = registerIN.asiento;

            goods.forEach(async (element: ims_goods) => {

                console.log(tomoNew, folioNew, asientoNew)
                const response = await prismaDB.ims_register.create({
                    data: {
                        reg_folio: folioNew,
                        reg_tomo: tomoNew,
                        reg_asiento: asientoNew,
                        reg_type: body.register.reg_type,
                        reg_observation: body.register.reg_observation,
                        reg_usu_id: body.register.reg_usu_id,
                    }
                });
                console.log(response)
                const registerId = response.reg_id;

                await prismaDB.ims_goods.create({ data: element })
                await prismaDB.ims_register_goods.create({ data: { reg_id: registerId, goods_no: element.goods_no } })

                const newNumber = await getNextNumber(tomoNew, folioNew, asientoNew) as ims_registered_in;
                tomoNew = newNumber.tomo;
                folioNew = newNumber.folio;
                asientoNew = newNumber.asiento;
                registerIN = newNumber;
                console.log(tomoNew, folioNew, asientoNew)
            });
            updateRegisterNumber(tomoNew, folioNew, asientoNew)
            return NextResponse.json({ message: "Register" });
        }
        return new NextResponse("type no .... ", { status: 401 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}