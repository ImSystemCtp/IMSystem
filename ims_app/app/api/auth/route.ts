import prisma from "@/lib/prisma";
import { User, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
export async function POST(_req : Request) {
    try {

        const user = await currentUser() as User;
        if (!user) {
            throw new Error("User not found");
        }
        const response = await prisma.ims_users.findMany({
            where: {
                usu_email: user.emailAddresses[0].emailAddress,
            },
        });
        if (response) {
            if (response[0]) {
                return NextResponse.json(response[0]);
            }
        }
        const postUser = await prisma.ims_users.create({
            data: {
                usu_email: user.emailAddresses[0].emailAddress,
                usu_name: user.firstName!,
                usu_surnames: user.lastName!,
            },
        });
        return NextResponse.json(postUser);
    } catch (error :any) {
        return NextResponse.json({ error:error }, { status: 500 })

    }
}
