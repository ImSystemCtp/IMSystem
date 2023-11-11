import { prismaDB } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response = await prismaDB.ims_assets.findMany();
        return NextResponse.json(response);
    } catch (error) {
    }
}