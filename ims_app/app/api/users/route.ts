import { checkAuthorization } from "@/lib/authorization";
import prismaDB from "@/lib/prisma/prismadb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { USER_ROLES } from "../enums/roles";
import { ims_users } from "@prisma/client";

/* export async function POST(req: Request) {
    try {
        const body = await req.json();
        const user = await currentUser();

        const response = await prismaDB.ims_users.create({
            data: {
                ...body
            }
        });
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
} */

export async function GET(req: Request) {
    try {
        const response = await prismaDB.ims_users.findMany();
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { usu_id , usu_name, usu_email , usu_is_active} = body as ims_users;

        const user = await currentUser();

        if (!usu_name || !usu_email || !usu_is_active) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const newUser = await prismaDB.ims_users.create({
            data: {
                ...(body as ims_users),
            },
        });

        return NextResponse.json(newUser);
    } catch (error) {
        console.log("[USER_CREATE_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

