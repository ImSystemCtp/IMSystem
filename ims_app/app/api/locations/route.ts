import prismaDB from "@/lib/prisma/prismadb";
import { currentUser } from "@clerk/nextjs";
import {  ims_locations } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
        console.log(req)
        const body = await req.json();
        console.log(body)
        const response = await prismaDB.ims_locations.create({
            data: {
                ...(body as ims_locations)
            }
        });
        console.log("hola"+response)
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
export async function GET() {
    try {
        const user = await currentUser()
        console.log(user);
        const response = await prismaDB.ims_locations.findMany();
        if (response.length > 0) {
            return NextResponse.json(response);
        }
        return new NextResponse("No data found", { status: 404 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
