import { prismaDB } from "@/lib/prisma";
import { $Enums } from "@prisma/client";


export async function GET(req: Request) {
    try {
        const url = req.url;
        const { searchParams } = new URL(url)
        let Asset = searchParams.get('asset')
        let location = searchParams.get('location')
        let response;
        console.log(Asset)
        console.log(location)
        if (Asset === null) {
            Asset = ''; // or any default value
        }
        if (location === null) {
            location = ''; // or any default value
        }
        if (location !== '') {
            response = await prismaDB.ims_assets.findMany({
                where: {
                    AND: [
                        {
                            OR: [{
                                assets_no: { contains: Asset }
                            }, {
                                assets_description: { contains: Asset }
                            }, {
                                assets_model: { contains: Asset }
                            }, {
                                assets_series: { contains: Asset }
                            }, {
                                assets_brand: { contains: Asset }
                            }]
                        },
                        {
                            assets_curr_location: {
                                equals: parseInt(location)
                            }
                        }, {
                            assets_state: {
                                not: $Enums.EnumAssetsState.Malo
                            }
                        }]
                },
                take:10
            })
        } else {
            response = await prismaDB.ims_assets.findMany({
                where: {
                    AND: [
                        {
                            OR: [{
                                assets_no: { contains: Asset }
                            }, {
                                assets_description: { contains: Asset }
                            }, {
                                assets_model: { contains: Asset }
                            }, {
                                assets_series: { contains: Asset }
                            }, {
                                assets_brand: { contains: Asset }
                            }]
                        },
                        {
                            assets_state: {
                                not: $Enums.EnumAssetsState.Malo
                            }
                        }]
                    
                },
                take:10
            })
        }

        return Response.json(response);
    } catch (error) {
        console.log(error)
        return new Response("Unauthorized", { status: 401 });
    }
}