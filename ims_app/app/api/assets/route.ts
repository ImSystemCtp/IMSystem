import prismaDB from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        console.log(req.body)
        const body = await req.json();
        const response = await prismaDB.ims_goods.create({ data:{
            ...body
        }  });
        console.log("RESPONSE",response)
        return NextResponse.json(response);
    } catch (error) {
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

export async function GET() {
    try {
        const response = await prismaDB.ims_goods.findMany();
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}