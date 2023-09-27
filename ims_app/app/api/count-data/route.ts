import prismaDB from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";
import getParams from "../function/getParams";

export async function GET(_req: Request) {

    try {
        console.log("jajaj")
        const parameters = getParams(_req.url, {table: ""}) as {table: string}
        console.log(parameters)
        
        const result = await prismaDB.$queryRaw`SELECT COUNT(*) FROM "${parameters.table}"`;
        console.log(result)
        return NextResponse.json(result);
        

    } catch (error) {
            
        }
    }