import { prismaDB } from "@/lib/prisma";
import { $Enums } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    try {
        const url = req.url;
        const { searchParams } = new URL(url)
        const Asset = searchParams.get('asset')|| ""
        const location = searchParams.get('location')|| ""

        const assetQuery:any = {
            where: {
                AND: [
                    {
                        OR: [
                            { assets_no: { contains: Asset } },
                            { assets_description: { contains: Asset } },
                            { assets_model: { contains: Asset } },
                            { assets_series: { contains: Asset } },
                            { assets_brand: { contains: Asset } }
                        ]
                    },
                    {
                        assets_state: {
                            not: $Enums.EnumAssetsState.Malo
                        }
                    }
                ]
            },
            take: 10
        };
    
        if (location !== '') {
            assetQuery.where.AND.push({
                assets_curr_location: {
                    equals: parseInt(location)
                }
            });
            if (Asset === '') {
                assetQuery.take=100;
            }
        }
        console.log(assetQuery)
        const response = await prismaDB.ims_assets.findMany(assetQuery);
        return NextResponse.json(response);
    } catch (error) {
        console.log(error)
        return new NextResponse("Unauthorized", { status: 401 });
    }
}