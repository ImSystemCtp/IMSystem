import { ParameterId } from "@/root/types";
import { NextResponse } from "next/server";
import prismaDB from "@/lib/prisma/prismadb";

export async function GET(_req: Request, { params }: ParameterId) {
    try {
        const id = params.id as string;
        console.log(id);
        const registers = await prismaDB.$queryRaw<registerToReport[]>`SELECT r.* ,a.* ,l.location_name, la.law_name, u.usu_name FROM ims_assets a JOIN ims_register_assets ra on a.assets_no = ra.assets_no 
        JOin ims_register r on r.reg_id=ra.reg_id
        JOIN ims_locations l on l.location_id=a.assets_curr_location
        JOIN ims_laws la on la.law_id = a.assent_law_id
        JOIN ims_users u on u.usu_id = r.reg_usu_id
        WHERE a.assets_curr_location = ${id} and a.assets_state != 'Malo'`;
        console.log(registers)
        return NextResponse.json(registers);
    } catch (error) {
        console.error(error);
        return new NextResponse("Error interno del servidor", { status: 500 });
    }
}
