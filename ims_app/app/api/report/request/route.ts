import { prismaDB } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { EnumReqState, ims_request } from "@prisma/client";
export async function GET() {
    try {
        const requests = await prismaDB.$queryRaw<requestLowToReport[]>`SELECT 	r.* ,a.* , u.usu_name
        FROM ims_assets a JOIN ims_details_asset da on a.assets_no = da.deta_assets_no
        JOIN ims_request r on r.req_id=da.deta_req_id
        JOIN ims_users u on u.usu_id = r.req_usu_id
        WHERE r.req_state = ${EnumReqState.Pending} and r.req_type = 'Low'`;
        return NextResponse.json(requests);
    } catch (error) {
        return new NextResponse("Error interno del servidor", { status: 500 });
    }
}