import { ParameterId } from "@/lib/definitions";
import { prismaDB } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_request: Request, { params }: ParameterId) {
    try {
        const id = params.id

        const response = await prismaDB.ims_assets.findUnique({
            where: {
                assets_no: id
            }
        });

        return NextResponse.json(response);
    } catch (error) {
    }
}