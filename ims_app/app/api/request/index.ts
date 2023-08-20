import { notAllowedResponse } from "@/root/api";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export async function createRequest(req: NextApiRequest, res: NextApiResponse) {
    try {
        const prisma = new PrismaClient();
        const response = await prisma.iMS_Request.create({data: req.body});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the request" });
    }
}

export function getRequest(req: NextApiRequest, res: NextApiResponse) {
    try {
        const prisma = new PrismaClient();
        const response = prisma.iMS_Request.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while get the request" });
    }
}

const handlers = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => await createRequest(req, res),
    GET: async (req:NextApiRequest, res:  NextApiResponse) => await getRequest(req,res)
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}
