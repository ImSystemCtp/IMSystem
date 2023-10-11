import prismaDB from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const response = await prismaDB.ims_assets.create({ data:{
            ...body
        }  });
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

export async function GET() {
    try {
        const response = await prismaDB.ims_assets.findMany();
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}