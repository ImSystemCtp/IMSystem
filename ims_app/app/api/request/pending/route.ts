import { prismaDB } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { EnumReqState } from "@prisma/client";
export async function GET() {
    try {
        console.log("GET: /api/request/pending")
        const response = await prismaDB.ims_request.findMany({
            where: {
                req_state: EnumReqState.Pending
            },
        });
        console.log(response)
        if (response) {
            return NextResponse.json(response);
        }
        return new NextResponse("Not found", { status: 404 });
    } catch (error) {
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

