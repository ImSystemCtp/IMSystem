import { ParameterId } from "@/root/types";
import prismaDB from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";

export async function GET(_request: Request, { params }: ParameterId) {
    try {
        const id = Number.parseInt(params.id);

        const response = await prismaDB.ims_locations.findUnique({
            where: {
                location_id: id
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
        console.log(id, body)
        const response = await prismaDB.ims_locations.update({
            where: { location_id: Number(id) },
            data: body,
        });
        return NextResponse.json(response);

    } catch (error) {
        return new NextResponse("No updated", { status: 401 });
    }
}