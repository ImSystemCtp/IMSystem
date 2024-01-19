import { QueryOptions } from "@/app/types";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import {  NextResponse } from "next/server";
import { ims_users } from "@prisma/client";
import getParams from "../(function)/getParams";

export async function GET(_req: Request) {
    try {
        const object = { limit: 0, offset: 0, orderBy: "", order: "asc", filterBy: "", filterValue: "", filterCondition: "contains" } as QueryOptions
        const url = _req.url
        const parameters = getParams(url, object)
        const { limit, offset, orderBy, order, filterBy, filterValue, filterCondition } = parameters
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
            console.log(whereCondition)
        let users;
        if (hasPaginationData && hasOrderData) {
            users = await prisma.ims_users.findMany({
                skip: parseInt(offset),
                take: parseInt(limit),
                orderBy: {
                    [orderBy]: order,
                },
                where: whereCondition.where,
            });
        } else if (hasPaginationData) {
            users = await prisma.ims_users.findMany({
                skip: parseInt(offset),
                take: parseInt(limit),
                where: whereCondition.where,
            });
        } else if (hasOrderData) {
            users = await prisma.ims_users.findMany({
                orderBy: {
                    [orderBy]: order,
                },
                where: whereCondition.where,
            });
        }
        else {
            users = await prisma.ims_users.findMany({where: whereCondition.where});
        }
        return NextResponse.json(users);
    } catch (error) {
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

        const newUser = await prisma.ims_users.create({
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
    const response = await prisma.ims_users.update({
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