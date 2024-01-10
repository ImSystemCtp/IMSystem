import { prismaDB } from "@/lib";
import { NextResponse } from "next/server";
export async function GET(req: Request, res: Response) {
    try {
        const response = await prismaDB.ims_institution.findUnique({
            where: {
                inst_id: 1
            }
        })
        return NextResponse.json(response?.inst_current_no_plate)
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}
export async function PUT(req: Request, res: Response) {
    const  {no_plate}  = await req.json() as any
    try {
        const response = await prismaDB.ims_institution.update({
            where: {
                inst_id: 1
            },
            data: {
                inst_current_no_plate: no_plate
            }
        })
        return NextResponse.json(response?.inst_current_no_plate)
    } catch (error) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
}