import { ParameterId } from "@/lib/definitions";
import prismaDB from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";


export async function GET(_req: Request , { params }: ParameterId) {
    try {
        const id = Number.parseInt(params.id);
        const response = await prismaDB.ims_assets.findMany({
            where: {
                assets_regis_location: id
            }
        });
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

