
import prismaDB from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
        const { usu_email, usu_password } = await req.json() as { usu_email: string, usu_password: string };
        const response = await prismaDB.ims_users.findMany({
            where: {
                usu_email
            },
        });
        if (response) {
            if (response[0].usu_password === usu_password) {
                return NextResponse.json(response);
            }
        }
    } catch (error) {
        console.error(error);
        return new NextResponse("Unauthorized", { status: 401 });

    }
}
