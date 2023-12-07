import { PrismaClient } from "@prisma/client"


// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prismaDB = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismaDB

export default prismaDB


// import { PrismaClient } from "@prisma/client"

// declare global {
//     var prisma: PrismaClient | undefined
// }

// const prismaDB = globalThis.prisma || new PrismaClient()
// if (process.env.NODE_ENV !== "production") globalThis.prisma = prismaDB

// export default prismaDB;