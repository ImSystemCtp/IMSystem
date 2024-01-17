import { ParameterId } from "@/lib/definitions";
import prisma from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";

export async function GET(_request: Request, { params }: ParameterId) {
    try {
        const id = Number.parseInt(params.id);

        const response = await prisma.ims_laws.findUnique({
            where: {
                law_id: id
            }
        });
        if (response) {
            return NextResponse.json(response);
        }
        return new NextResponse("Unauthorized", { status: 401 });

    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

export async function PUT(_request: Request, { params }: ParameterId) {
    try {
        const id = Number.parseInt(params.id);
        const body = await _request.json();
        const response = await prisma.ims_laws.update({
            where: {  law_id: id },
            data: body,
        });
        return NextResponse.json(response);

    } catch (error) {
        return new NextResponse("No updated", { status: 401 });
    }
}