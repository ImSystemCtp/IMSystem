import { notAllowedResponse } from "@/root/api";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
export async function createLocation(req: NextApiRequest, res: NextApiResponse) {
    try {
        const prisma = new PrismaClient();
        const response = await prisma.ims_locations.create({
            data: req.body
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the location" });
    }
}
export async function getLocations(res: NextApiResponse) {
    try {
        const prisma = new PrismaClient();
        const response = await prisma.ims_locations.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the location" });
    }
}
const handlers = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => await createLocation(req, res),
    GET: async (req: NextApiRequest, res: NextApiResponse) => await getLocations(res)
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}