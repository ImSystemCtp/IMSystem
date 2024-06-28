import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { EnumAssetsState, } from "@prisma/client";
export async function GET() {
    try {
        const result = await prisma.ims_assets.count({
            where: {
                assets_state: EnumAssetsState.Regular,
            },
        });
        return NextResponse.json(result);
    } catch (error) {
        return new NextResponse("Error to count", { status: 500 });
    }
}