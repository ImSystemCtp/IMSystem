import { prismaDB } from "@/lib";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        console.log("entro")
        const response = await prismaDB.ims_registered_in.findMany();
        console.log(response)
        if (response) {
            return NextResponse.json(response[0]);
        }
    } catch (error) {
        console.log("err", error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
