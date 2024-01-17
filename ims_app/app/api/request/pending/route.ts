import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { EnumReqState } from "@prisma/client";
export async function GET() {
    try {
        const response = await prisma.ims_request.findMany({
            where: {
                req_state: EnumReqState.Pending
            },
        });
        if (response) {
            return NextResponse.json(response);
        }
        return new NextResponse("Not found", { status: 404 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

