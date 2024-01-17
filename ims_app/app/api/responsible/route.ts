import prisma from "@/lib/prisma";
import {   ims_responsible } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const response = await prisma.ims_responsible.create({
            data: {
                ...(body as ims_responsible)
            }
        });
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
export async function GET() {
    try {
        const response = await prisma.ims_responsible.findMany();
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

}