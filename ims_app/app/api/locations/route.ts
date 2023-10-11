import prismaDB from "@/lib/prisma/prismadb";
import { currentUser } from "@clerk/nextjs";
import {  ims_locations } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const response = await prismaDB.ims_locations.create({
            data: {
                ...(body as ims_locations)
            }
        });
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
export async function GET() {
    try {
        const response = await prismaDB.ims_locations.findMany();
        if (response.length > 0) {
            return NextResponse.json(response);
        }
        return new NextResponse("No data found", { status: 404 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
