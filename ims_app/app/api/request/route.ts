import prisma from "@/lib/prisma";
import { RequestType } from "@/lib/definitions";
import { ims_details_asset } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json() as RequestType;
        const newRequest = body.request
        const detailsAssets = body.detailsAssets
        const response = await prisma.ims_request.create({
            data: {
                ...newRequest,
            }
        });
        const requestId = response.req_id;
        await prisma.ims_details_asset.createMany({
            data: detailsAssets.map((element: ims_details_asset) => {
                return {
                    ...element,
                    deta_req_id: requestId
                }
            })
        })
        if (response) {
            return NextResponse.json(response);
        }
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

export function GET() {
    try {
        const response = prisma.ims_request.findMany();
        if (response) {
            return NextResponse.json(response);
        }
        return new NextResponse("Not found", { status: 404 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

