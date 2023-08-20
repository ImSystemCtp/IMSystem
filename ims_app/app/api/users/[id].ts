import { notAllowedResponse } from "@/root/api";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export async function searchUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log("hola")
        const { id } = req.query;
        const prisma = new PrismaClient();

        const response = await prisma.ims_users.findUnique({
            where: {
                usu_id: Number(id)
            }
        });
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the user" });
    }
}

export async function updateUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id } = req.query;
        const prisma = new PrismaClient();
        const response = await prisma.ims_users.update({
            where: { usu_id: Number(id) },
            data: req.body,
        });
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the user" });
    }
}

const handlers = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => await searchUser(req, res),
    PUT: async (req: NextApiRequest, res: NextApiResponse) => await updateUser(req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}