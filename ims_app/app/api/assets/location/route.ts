import getParams from "@/app/api/(function)/getParams";
import { QueryOptions } from "@/app/types";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(_req: Request ) {
    try {
        const object = { limit: 0, offset: 0, orderBy: "", order: "asc", filterBy: "", filterValue: "", filterCondition: "content" } as QueryOptions
        const url = _req.url
        const parameters = getParams(url, object)
        const { limit, offset, orderBy, order, filterBy, filterValue, filterCondition } = parameters
        const hasPaginationData = offset && limit;
        const hasOrderData = orderBy && order;
        const whereCondition = (filterBy && filterCondition && filterValue)
            ? {
                where: {
                    [filterBy]: {
                        [filterCondition]: !isNaN(filterValue)?parseInt(filterValue,10):filterValue,
                    },
                },
            }
            : {};

        let assents;
        if (hasPaginationData && hasOrderData) {
            assents = await prisma.ims_assets.findMany({
                skip: parseInt(offset),
                take: parseInt(limit),
                orderBy: {
                    [orderBy]: order,
                },
                where: whereCondition.where,
            });
        } else if (hasPaginationData) {
            assents = await prisma.ims_assets.findMany({
                skip: parseInt(offset),
                take: parseInt(limit),
                where: whereCondition.where,
            });
        } else if (hasOrderData) {
            assents = await prisma.ims_assets.findMany({
                orderBy: {
                    [orderBy]: order,
                },
                where: whereCondition.where,
            });
        }
        else {
            assents = await prisma.ims_assets.findMany();
        }
        return NextResponse.json(assents);

    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

