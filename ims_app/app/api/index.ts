
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  console.log("test 01")
  const response = await prisma.$queryRaw`SELECT NOW();`
  console.log(response);
  res.status(200).json( response );
}
/*
const handlers = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => await loginAuth(req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}
*/