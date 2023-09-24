import prismaDB from "@/lib/prisma/prismadb";
import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        const user = await currentUser() as User;
        console.log("user", user)
        if (!user) {
            throw new Error("User not found");
        }
        const response = await prismaDB.ims_users.findMany({
            where: {
                usu_email: user.emailAddresses[0].emailAddress,
            },
        });
        if (response) {
            if (response[0]) {
                return NextResponse.json(response[0]);
            }
        }
        const postUser = await prismaDB.ims_users.create({
            data: {
                usu_email: user.emailAddresses[0].emailAddress,
                usu_name: user.firstName!,
                usu_surnames: user.lastName!,
            },
        });
        console.log("user", user)
        return NextResponse.json(postUser);
    } catch (error) {
        console.error(error);
        return new NextResponse("Unauthorized", { status: 401 });

    }
}
