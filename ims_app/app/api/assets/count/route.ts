import prisma from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";

export async function GET() {

    try {

        const result = await prisma.ims_assets.count();
        return NextResponse.json(result);

    } catch (error) {
        return new NextResponse("Error to count", { status: 500 });
    }
}
