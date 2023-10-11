import prismaDB from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";
import getParams from "../(function)/getParams";
import { Prisma } from "@prisma/client";

export async function GET(_req: Request) {

    try {
        const url = _req.url
        const parameters = getParams(url, {table: ""}) as {table: string}
        const result = await prismaDB.$queryRaw(
            Prisma.sql`SELECT COUNT(*) FROM ims_assets;`);
        return NextResponse.json(result);

    } catch (error) {
        }
    }
