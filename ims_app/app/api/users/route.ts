// import { checkAuthorization } from "@/lib/authorization";
// import { USER_ROLES } from "../enums/roles";
// import { QueryOptions } from "@/app/types";
import prismaDB from "@/lib/prisma/prismadb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ims_users } from "@prisma/client";

export async function GET() {
    try {
        const response = await prismaDB.ims_users.findMany();
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
/* 
export async function GET(req: Request) {
    try {
        const body = await req.json();
        const {
            offset,
            limit,
            orderBy,
            order,
            filterBy,
            filterValue,
            filterCondition,
        } = body as QueryOptions;

        const user = await currentUser();

        const loginEmail = user!.emailAddresses[0].emailAddress || null;
        if (!loginEmail) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const hasPermision = await checkAuthorization(loginEmail, [USER_ROLES.ADMIN]);
        if (!hasPermision) {
            return new NextResponse("Additional Permissions Required", {
                status: 403,
            });
        }
        // Verifica si se proporcionan datos de paginación
        const hasPaginationData = offset && limit;

        // Verifica si se proporcionan datos de ordenamiento
        const hasOrderData = orderBy && order;

        // Construye la condición de filtrado si se proporciona
        const whereCondition = (filterBy && filterCondition && filterValue)
            ? {
                where: {
                    [filterBy]: {
                        [filterCondition]: filterValue,
                    },
                },
            }
            : {};
        // Realiza la consulta a la base de datos usando Prisma
        let users;
        if (hasPaginationData && hasOrderData) {
            users = await prismaDB.ims_users.findMany({
                skip: offset,
                take: limit,
                orderBy: {
                    [orderBy]: order,
                },
                where: whereCondition.where || undefined,
            });
        } else if (hasPaginationData) {
            users = await prismaDB.ims_users.findMany({
                skip: offset,
                take: limit,
                where: whereCondition?.where ?? {},
            });
        } else {
            // Si no se proporciona paginación ni ordenamiento, realiza una consulta sin ellos.
            users = await prismaDB.ims_users.findMany({
                where: whereCondition.where ?? {},
            });
        }
    
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
 */
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { usu_id, usu_name, usu_email, usu_is_active } = body as ims_users;

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

