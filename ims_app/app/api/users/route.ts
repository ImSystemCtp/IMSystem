import { checkAuthorization } from "@/lib/authorization";
import { USER_ROLES } from "../enums/roles";
import { QueryOptions } from "@/app/types";
import prismaDB from "@/lib/prisma/prismadb";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { ims_users } from "@prisma/client";
import { NextApiRequest } from "next";
import getParams from "../(function)/getParams";


/* export async function GET() {
    try {
        const response = await prismaDB.ims_users.findMany();
        return NextResponse.json(response);
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
} */

export async function GET(_req: Request) {
    try {
        const object = { limit: 0, offset: 0, orderBy: "", order: "asc", filterBy: "", filterValue: "", filterCondition: "contains" } as QueryOptions
        const url = _req.url
        const parameters = getParams(url, object)
        const { limit, offset, orderBy, order, filterBy, filterValue, filterCondition } = parameters

        /*     const user = await currentUser();
    
            const loginEmail = user!.emailAddresses[0].emailAddress || null;
            if (!loginEmail) {
                return new NextResponse("Unauthorized", { status: 401 });
            }
    
            const hasPermission = await checkAuthorization(loginEmail, [USER_ROLES.ADMIN]);
            if (!hasPermission) {
                return new NextResponse("Additional Permissions Required", {
                    status: 403,
                });
            } */
        const hasPaginationData = offset && limit;

        const hasOrderData = orderBy && order;


        const whereCondition = (filterBy && filterCondition && filterValue)
            ? {
                where: {
                    [filterBy]: {
                        [filterCondition]: filterValue,
                    },
                },
            }
            : {};


        let users;
        if (hasPaginationData && hasOrderData) {
            users = await prismaDB.ims_users.findMany({
                skip: parseInt(offset),
                take: parseInt(limit),
                orderBy: {
                    [orderBy]: order,
                },
                where: whereCondition.where,
            });
        } else if (hasPaginationData) {
            users = await prismaDB.ims_users.findMany({
                skip: parseInt(offset),
                take: parseInt(limit),
                where: whereCondition.where,
            });
        } else if (hasOrderData) {
            users = await prismaDB.ims_users.findMany({
                orderBy: {
                    [orderBy]: order,
                },
                where: whereCondition.where,
            });
        }
        else {
            users = await prismaDB.ims_users.findMany();
        }
        return NextResponse.json(users);
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { usu_id, usu_name, usu_email } = body as ims_users;

        const user = await currentUser();

        if (!usu_name || !usu_email) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const newUser = await prismaDB.ims_users.create({
            data: {
                ...(body as ims_users),
            },
        });

        return NextResponse.json(newUser);
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 });
    }
}
export async function PUT(req: Request) {
    const body = await req.json() as ims_users;
    const response = await prismaDB.ims_users.update({
        where: { usu_id: body.usu_id },
        data: {
            ...body
        },
    });
    if (response) {
        return NextResponse.json(response);
    }
    return new NextResponse("Not found", { status: 404 });
}