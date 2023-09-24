import { prismaDB } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        console.log("in")
        const response = await prismaDB.$queryRaw`SELECT increment_register_in()` as any[];
        console.log(response)

        if (response && response[0]['increment_register_in()']) {
            const result = JSON.parse(response[0]['increment_register_in()']);
            console.log(result);
            return NextResponse.json(result);
        }
        return new NextResponse("Not found", { status: 404 });
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}