import prisma from "@/lib/prisma";


export default async function getNumRegister<ims_registered_in>() {
    const response = await prisma.ims_registered_in.findMany()
    return response[0];

}