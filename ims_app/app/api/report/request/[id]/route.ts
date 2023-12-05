import { prismaDB } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { EnumReqState, } from "@prisma/client";
import { ParameterId } from "@/lib/definitions";
export async function GET(_req: Request, { params }: ParameterId) {
    try {
        const id = params.id as string;
        const requests = await prismaDB.$queryRaw<requestToReport[]>`SELECT r.* ,a.* ,da.*, u.usu_name
        FROM ims_assets a JOIN ims_details_asset da on a.assets_no = da.deta_assets_no
        JOIN ims_request r on r.req_id=da.deta_req_id
        JOIN ims_users u on u.usu_id = r.req_usu_id
        WHERE r.req_id = ${id} and r.req_state = ${EnumReqState.Pending} and r.req_type = 'Low'` ;
        return NextResponse.json(requests);
    } catch (error) {
        return new NextResponse("Error interno del servidor", { status: 500 });
    }
}