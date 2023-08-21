import { PrismaClient, ims_locations } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
        console.log(req)
        const prismadb = new PrismaClient();
        const body = await req.json();
        console.log(body)
        const response = await prismadb.ims_locations.create({
            data: {
                ...(body as ims_locations)
            }
        });
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
