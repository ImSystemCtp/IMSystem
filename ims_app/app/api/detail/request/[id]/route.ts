import { prismaDB } from "@/lib/prisma";
import { ParameterId } from "@/root/types";
import { NextResponse } from "next/server";

export async function GET(_request: Request, { params }: ParameterId) {
    try {
        const id = Number.parseInt(params.id);
        const response = await prismaDB.ims_details_asset.findMany ({
            where: {
                deta_req_id: id
            }
        });
        if (response) {
            return NextResponse.json(response);
        }
        return new NextResponse("Not found", { status: 404 });

    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}