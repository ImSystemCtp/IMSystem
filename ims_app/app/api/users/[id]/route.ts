import { prismaDB } from "@/lib/prisma";
import { ParameterId } from "@/root/types";
import { NextResponse } from "next/server";
import { USER_ROLES } from "../../enums/roles";
import { currentUser } from "@clerk/nextjs";
import { checkAuthorization } from "@/lib/authorization";

export async function GET(_request: Request, { params }: ParameterId) {
    try {
        console.log(params)
        const id = Number.parseInt(params.id);
        console.log(id)
        const response = await prismaDB.ims_users.findUnique({
            where: {
                usu_id: id
            }
        });
        if (response) {
            return NextResponse.json(response);
        }
        return new NextResponse("Not found", { status: 404 });

    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

export async function PUT(req: Request, { params }: ParameterId) {
    try {
        const id = Number.parseInt(params.id);
        const body = await req.json();
        console.log(body);
        const response = await prismaDB.ims_users.update({
            where: { usu_id: Number(id) },
            data: {
                ...body
            },
        });
        if (response) {
            return NextResponse.json(response);
        }
        return new NextResponse("Not found", { status: 404 });


    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

export async function DELETE(_request: Request, { params }: ParameterId) {
    try {
        const id = Number.parseInt(params.id);
/*         const user = await currentUser();

        const loginEmail = user!.emailAddresses[0].emailAddress || null;
        if (!loginEmail) {
            return new NextResponse("Unauthorized", { status: 401 });
        } */

/*         const hasPermission = await checkAuthorization(loginEmail, [USER_ROLES.ADMIN]);
        if (!hasPermission) {
            return new NextResponse("Additional Permissions Required", {
                status: 403,
            });
        }
 */
        const deletedUser = await prismaDB.ims_users.delete({
            where: {
                usu_id:id
            },
        });

        return NextResponse.json(deletedUser);
    } catch (error) {
        console.log("[USER_REMOVE_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
