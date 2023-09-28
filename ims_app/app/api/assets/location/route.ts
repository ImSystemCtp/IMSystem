import getParams from "@/app/api/(function)/getParams";
import { QueryOptions } from "@/app/types";
import prismaDB from "@/lib/prisma/prismadb";
import { ParameterId } from "@/root/types";
import { NextResponse } from "next/server";


export async function GET(_req: Request ) {
    try {
        const objete = { limit: 0, offset: 0, orderBy: "", order: "asc", filterBy: "", filterValue: "", filterCondition: "content" } as QueryOptions
        console.log(objete)
        const parameters = getParams(_req.url, objete) 
        console.log(parameters)  
        const { limit, offset, orderBy, order, filterBy, filterValue, filterCondition } = parameters
        console.log(offset, limit, orderBy, order, filterBy, filterValue, filterCondition)
        const hasPaginationData = offset && limit;
        console.log(hasPaginationData)
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

        let asents;
        if (hasPaginationData && hasOrderData) {
            asents = await prismaDB.ims_assets.findMany({
                skip: parseInt(offset),
                take: parseInt(limit),
                orderBy: {
                    [orderBy]: order,
                },
                where: whereCondition.where,
            });
        } else if (hasPaginationData) {
            asents = await prismaDB.ims_assets.findMany({
                skip: parseInt(offset),
                take: parseInt(limit),
                where: whereCondition.where,
            });
        } else if (hasOrderData) {
            asents = await prismaDB.ims_assets.findMany({
                orderBy: {
                    [orderBy]: order,
                },
                where: whereCondition.where,
            });
        }
        else {
            asents = await prismaDB.ims_assets.findMany();
        }
        console.log(asents)
        return NextResponse.json(asents);

    } catch (error) {
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}

