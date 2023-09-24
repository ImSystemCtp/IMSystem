/* import { PrismaClient } from "@prisma/client";

const prismaDB = new PrismaClient();

export default prismaDB; */

import { PrismaClient } from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined
}

const prismaDB = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismaDB

export default prismaDB;