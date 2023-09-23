import prismaDB from "@/lib/prisma/prismadb";
import { ParameterId } from "@/root/types";
import { NextResponse } from "next/server";


export async function GET({ params }: ParameterId) {
    try {
        const id = Number.parseInt(params.id);
        const response = await prismaDB.ims_assets.findMany({
            where: {
                assets_curr_location: id
            }
        });
        return NextResponse.json(response);
    } catch (error) {
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

