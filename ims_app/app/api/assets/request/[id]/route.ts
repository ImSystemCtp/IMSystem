import { ParameterId } from "@/lib/definitions";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_request: Request, { params }: ParameterId) {
    try {
        const id = Number.parseInt(params.id);
        const response = await prisma.$queryRaw`
        SELECT a.* 
        FROM ims_details_asset da 
        JOIN ims_request r ON da.deta_req_id = r.req_id 
        JOIN ims_assets a ON da.deta_assets_no = a.assets_no 
        WHERE r.req_id = ${id};`;
    
        if (response) {
            return NextResponse.json(response);
        }
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}