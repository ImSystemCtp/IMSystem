import { prismaDB } from "@/lib";
import { NextResponse } from "next/server";
import { ims_assets, ims_registered_in } from "@prisma/client";
import { registerGood } from "@/root/types";
import getNumRegister from "../../function/getNumRegister";
import { getNextNumber, updateRegisterNumber } from "../../function";
export async function POST(req: Request) {
    try {
        console.log("await req.json()")
        const body = await req.json() as registerGood;
        console.log(body)
        const type = body.register.reg_type;
        const assets = body.assets;
        console.log(type)
        let tomoNew: number;
        let folioNew: number;
        let asientoNew: number;
        if (type == 'Register') {
            let registerIN = await getNumRegister() as ims_registered_in;

            tomoNew = registerIN.tomo;
            folioNew = registerIN.folio;
            asientoNew = registerIN.asiento;

            assets.forEach(async (element: ims_assets) => {

                console.log(tomoNew, folioNew, asientoNew)
                const response = await prismaDB.ims_register.create({
                    data: {
                        reg_folio: folioNew,
                        reg_inst_id:1,
                        reg_tomo: tomoNew,
                        reg_asiento: asientoNew,
                        reg_type: body.register.reg_type,
                        reg_observation: body.register.reg_observation,
                        reg_usu_id: body.register.reg_usu_id,
                    }
                });
                console.log(response)
                const registerId = response.reg_id;

                await prismaDB.ims_assets.create({ data: element })
                await prismaDB.ims_register_assets.create({ data: { reg_id: registerId, assets_no: element.assets_no } })

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