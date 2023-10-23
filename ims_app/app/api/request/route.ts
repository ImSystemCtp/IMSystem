import { prismaDB } from "@/lib";
import { ims_details_asset } from "@prisma/client";
import { RequestType } from "@/root/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json() as RequestType;
        console.log(body)
        const newRequest = body.request
        const detailsAssets = body.detailsAssets
        const response = await prismaDB.ims_request.create({
            data: {
                ...newRequest,
            }
        });
        const requestId = response.req_id;
        await prismaDB.ims_details_asset.createMany({
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
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

export function GET() {
    try {
        const response = prismaDB.ims_request.findMany();
        if (response) {
            return NextResponse.json(response);
        }
        return new NextResponse("Not found", { status: 404 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

