import { prismaDB } from "@/lib";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const response = await prismaDB.ims_request.create({
            data: {
                ...body
            }
        });
        if (response) {
            return NextResponse.json(response);
        }
    } catch (error) {
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

