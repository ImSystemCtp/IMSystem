import prismaDB from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {

    try {
        console.log("jajaj")
        const { searchParams } = new URL(_req.url)

        const tableName = searchParams.get('table')

        const result = await prismaDB.$queryRaw`SELECT COUNT(*) FROM "${tableName}"`;
        console.log(result)
        return NextResponse.json(result);


    } catch (error) {

    }
}