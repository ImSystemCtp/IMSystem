
import { notAllowedResponse } from "@/root/api";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export async function loginByEmailPassword(req: NextApiRequest, res: NextApiResponse) {
    try {
        const prisma = new PrismaClient();
        const { usu_email, usu_password } = req.body as { usu_email: string, usu_password: string };
        const response = await prisma.ims_users.findMany({
            where: {
                usu_email
            },
        });
        if (response) {
            if (response[0].usu_password === usu_password) {
                res.status(200).json(response[0]);
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the user" });
    }
}

const handlers = {

    POST: async (req: NextApiRequest, res: NextApiResponse) => await loginByEmailPassword(req, res),

};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}