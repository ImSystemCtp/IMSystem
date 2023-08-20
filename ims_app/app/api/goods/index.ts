import { notAllowedResponse } from "@/root/api";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


export async function createGoods(req: NextApiRequest, res: NextApiResponse) {
    try {
        const prisma = new PrismaClient();
        console.log(req.body)
        const response = await prisma.ims_goods.create({ data: req.body });
        console.log("RESPONSE",response)
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "An error occurred while creating the good" });
    }
}

export async function getGoods(res: NextApiResponse) {
    try {
        const prisma = new PrismaClient();
        const response = await prisma.ims_goods.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while get the goods" });
    }
}



const handlers = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => await createGoods(req, res),
    GET: async (req: NextApiRequest, res: NextApiResponse) => await getGoods(res)
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}
