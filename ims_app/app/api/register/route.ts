import prisma from "@/lib/prisma";
import { ims_registered_in } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        const response = await prisma.ims_register.findMany();
        if (response) {
            return NextResponse.json(response);
        }
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
