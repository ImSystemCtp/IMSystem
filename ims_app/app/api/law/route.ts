import prismaDB from "@/lib/prisma/prismadb";
import {  ims_laws } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
        console.log(req)
        const body = await req.json();
        console.log(body)
        const response = await prismaDB.ims_laws.create({
            data: {
                ...(body as ims_laws)
            }
        });
        console.log(response)
        return NextResponse.json(response);
    } catch (error) {
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
export async function GET() {
    try {
        const response = await prismaDB.ims_laws.findMany();
        if (response.length > 0) {
            return NextResponse.json(response);
        }
        return new NextResponse("No data found", { status: 404 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

}