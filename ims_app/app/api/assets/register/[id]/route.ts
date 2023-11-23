import { ParameterId } from "@/root/types";
import { NextResponse } from "next/server";
import prismaDB from "@/lib/prisma/prismadb";
import { ims_assets, ims_register } from "@prisma/client";
export async function GET(_req: Request, { params }: ParameterId) {
    try {
        const id = params.id as string;
        const registers = await prismaDB.$queryRaw<ims_register[]>`
                SELECT r.* FROM ims_register r JOIN ims_register_assets rs on r.reg_id = rs.reg_id
                        JOIN ims_assets a on a.assets_no= rs.assets_no
                        where a.assets_no = ${id} and r.reg_type = 'Register'`;
        return NextResponse.json(registers);
    } catch (error) {
        return new NextResponse("Error interno del servidor", { status: 500 });
    }
}
