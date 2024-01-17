import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ParameterId } from "@/lib/definitions";

export async function GET(_request: Request, { params }: ParameterId) {
    try {
        const id = Number.parseInt(params.id);
        const response = await prisma.ims_users.findUnique({
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
        const response = await prisma.ims_users.update({
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
        const deletedUser = await prisma.ims_users.delete({
            where: {
                usu_id:id
            },
        });

        return NextResponse.json(deletedUser);
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 });
    }
}
