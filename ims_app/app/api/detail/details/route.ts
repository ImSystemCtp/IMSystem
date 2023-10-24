import { prismaDB } from "@/lib/prisma";
import { ParameterId } from "@/root/types";
import { ims_details_asset } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    try {

        const body = await req.json() as ims_details_asset[]
        let response: ims_details_asset[] = [];
        body.forEach(async (element) => {

            const detail = await prismaDB.ims_details_asset.update({
                where: { deta_id: element.deta_id },
                data: {
                    ...element
                },
            });
            response.push(detail);
        });
        if (response) {
            return NextResponse.json(response);
        }
        return new NextResponse("Not found", { status: 404 });


    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}