import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ParameterId } from "@/lib/definitions";

export async function GET(_req: Request, { params }: ParameterId) {
    try {
        const id = params.id as string;
        const registers = await prisma.$queryRaw<registerToReport[]>`
        SELECT r.* ,a.* ,l.location_name, la.law_name, u.usu_name, re.responsible_name
        FROM ims_assets a JOIN ims_register_assets ra on a.assets_no = ra.assets_no
        JOin ims_register r on r.reg_id=ra.reg_id
        JOIN ims_locations l on l.location_id=a.assets_curr_location
        JOIN ims_laws la on la.law_id = a.asset_law_id
        JOIN ims_users u on u.usu_id = r.reg_usu_id
        JOIN ims_responsible re on re.responsible_id = a.asset_responsible_id
        WHERE a.assets_curr_location = ${id} and a.assets_state != 'Malo'`;
        return NextResponse.json(registers);
    } catch (error) {
        return new NextResponse("Error interno del servidor", { status: 500 });
    }
}
