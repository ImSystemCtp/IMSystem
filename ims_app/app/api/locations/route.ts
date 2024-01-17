import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import {  ims_locations } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const response = await prisma.ims_locations.create({
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
        const response = await prisma.ims_locations.findMany();
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
