import { notAllowedResponse } from "@/root/api";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export async function searchLocation(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id } = req.query;
        const prisma = new PrismaClient();

        const response = await prisma.ims_locations.findUnique({
            where: {
                location_id: Number(id)
            }
        });
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the Location" });
    }
}

export async function updateLocation(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id } = req.query;
        const prisma = new PrismaClient();
        const response = await prisma.ims_locations.update({
            where: { location_id: Number(id) },
            data: req.body,
        });
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the location" });
    }
}

const handlers = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => await searchLocation(req, res),
    PUT: async (req: NextApiRequest, res: NextApiResponse) => await updateLocation(req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}