import prisma from "@/lib/prisma";
import { registerAsset } from "@/lib/definitions";
import { NextResponse } from "next/server";
import { ims_assets, ims_responsible, ims_locations, ims_laws, EnumAssetsState } from "@prisma/client";
import { getNextNumber, getNumRegister, updateRegisterNumber } from "@/app/api/(function)";
import { convertDate } from "../../(function)/convertDate";
export async function POST(req: Request) {
    console.log("1")
    try {
        const body = await req.json() as registerAsset;
        const type = body.register.reg_type;
        let assets: any[] = body.assets;
        const dbNumRegister = await prisma.ims_institution.findMany().then((res) => res[0].inst_current_no_plate)
        if (type == 'Register') {
            for (const element of assets) {
                const [tomo, folio, asiento] = element.assets_register_in.split(',');
                const reg = await prisma.ims_register.create({
                    data: {
                        reg_inst_id: 1,
                        reg_folio: parseInt(folio),
                        reg_tomo: parseInt(tomo),
                        reg_asiento: parseInt(asiento),
                        reg_type: body.register.reg_type,
                        reg_observation: body.register.reg_observation,
                        reg_usu_id: body.register.reg_usu_id,
                        reg_date: body.register.reg_date,
                    },
                });
                // necesito validar si el nombre de la ubicacion, ley y funcionario responsable estan en la base de datos. Sino, crearlos
                // Assuming element.assets_regis_location contains the location_id
                let location = await prisma.ims_locations.findFirst({
                    where: { location_name: element.assets_regis_location }
                });
                if (location === null) {
                    location = await prisma.ims_locations.create({
                        data: { location_name: element.assets_regis_location }
                    });
                }
                // Assuming element.assets_law contains the law_id
                let law = await prisma.ims_laws.findFirst({
                    where: { law_name: element.asset_law_id }
                });
                if (law === null) {
                    law = await prisma.ims_laws.create({
                        data: { law_name: element.asset_law_id }
                    });
                }
                // Assuming element.assets_responsible contains the responsible_id
                let responsible = await prisma.ims_responsible.findFirst({
                    where: { responsible_name: element.asset_responsible_id }
                });
                if (responsible === null) {
                    responsible = await prisma.ims_responsible.create({
                        data: { responsible_name: element.asset_responsible_id }
                    });
                }
                delete element.assets_register_in;
                const dateCurrent = convertDate(element.invoice_date)
                if (dateCurrent === "0000-00-00 00:00:00.000") {
                    await prisma.ims_assets.create({ data: { ...element, invoice_date: null, assets_regis_location: location.location_id, assets_curr_location: location.location_id, assets_state: EnumAssetsState.Bueno, asset_law_id: law.law_id, asset_responsible_id: responsible.responsible_id } });
                } else {
                    const newDate = new Date(dateCurrent)
                    await prisma.ims_assets.create({ data: { ...element, assets_regis_location: location.location_id, assets_curr_location: location.location_id, assets_state: EnumAssetsState.Bueno, invoice_date: newDate, asset_law_id: law.law_id, asset_responsible_id: responsible.responsible_id } });
                }
                console.log(element.assets_no)
                await prisma.ims_register_assets.create({ data: { reg_id: reg.reg_id, assets_no: element.assets_no } });
            }
            await prisma.ims_institution.update({ where: { inst_id: 1 }, data: { inst_current_no_plate: dbNumRegister + assets.length } })
            return NextResponse.json({ message: "Register" });
        }
        return new NextResponse("type no .... ", { status: 401 });
    } catch (error) {
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

