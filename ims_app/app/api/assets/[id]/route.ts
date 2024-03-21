import { ParameterId } from "@/lib/definitions";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_request: Request, { params }: ParameterId) {
    try {
        const id = params.id

        const response = await prisma.ims_assets.findUnique({
            where: {
                assets_no: id
            }
        });

        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Error", { status: 500 });
    }
}

export async function PUT(request: Request, { params }: ParameterId) {
    try {
        const id = params.id
        const body = await request.json();
        const response = await prisma.ims_assets.update({
            where: {
                assets_no: id
            },
            data: body
        });

        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Error", { status: 500 });
    }
}