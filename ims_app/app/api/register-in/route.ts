import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        const response = await prisma.ims_registered_in.findMany();
        if (response) {
            return NextResponse.json(response[0]);
        }
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
