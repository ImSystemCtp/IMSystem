import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { EnumReqState, } from "@prisma/client";
export async function GET() {
    try {
        const result = await prisma.ims_request.count({
            where: {
                req_state: EnumReqState.Pending,
            },
        });
        return NextResponse.json(result);
    } catch (error) {
        return new NextResponse("Error to count", { status: 500 });
    }
}