import { prismaDB } from "@/lib/prisma";
import { ParameterId } from "@/root/types";
import { NextResponse } from "next/server";

export async function GET( {params}:ParameterId) {
    try {
        const id= Number.parseInt(params.id);

        const response = await prismaDB.ims_users.findUnique({
            where: {
                usu_id: id
            }
        });
        if (response) {
            return NextResponse.json(response);
        }
        return new NextResponse("Not found", { status: 404 });

    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

export async function PUT(req: Request, {params}:ParameterId) {
    try {
        const id= Number.parseInt(params.id);
        const body = await req.json();

        const response = await prismaDB.ims_users.update({
            where: { usu_id: Number(id) },
            data: {
                ...body
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