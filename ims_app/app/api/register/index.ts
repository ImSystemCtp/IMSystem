import { notAllowedResponse } from "@/root/api";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

interface NewRegisterData {
    reg_folio_out: number;
    reg_tomo_out: number;
    reg_asiento_out: number;
    // Agrega aquí otros campos que se devuelven en la consulta de newRegisterIn
    }
export async function createRegister(req: NextApiRequest, res: NextApiResponse) {
    try {
        const prisma = new PrismaClient();
        const currentRegisterIn = await prisma.ims_registered_in.findMany();
        console.log(currentRegisterIn)
        // Obtén los valores necesarios de currentRegisterIn para los parámetros de la función
        const reg_folio_in = currentRegisterIn[0].folio;
        const reg_tomo_in = currentRegisterIn[0].tomo;
        const reg_asiento_in = currentRegisterIn[0].asiento;

        const newRegisterIn = await prisma.$queryRawUnsafe<any>(`
        SELECT * FROM increment_registerin($1::integer, $2::integer, $3::integer)`, reg_folio_in, reg_tomo_in, reg_asiento_in);
        const reg_folio_out = newRegisterIn[0].reg_folio_out;
        const reg_tomo_out = newRegisterIn[0].reg_tomo_out;
        const reg_asiento_out = newRegisterIn[0].reg_asiento_out;
        const response = await prisma.ims_register.create({
            data: { reg_folio: reg_folio_out,
                reg_tomo: reg_tomo_out,
                reg_asiento: reg_asiento_out, reg_type: req.body.register.reg_type,
                reg_observation: req.body.register.reg_observation,
                reg_usu_id: req.body.register.reg_usu_id, }
        });
        const registerId = response.reg_id;
        const type = req.body.register.reg_type;
        const goods = req.body.goods;
        if (type == 'R') {
            goods.forEach(async (element: any) => {
                const resp = await prisma.ims_goods.create({ data: element })
                await prisma.ims_register_goods.create({ data: { reg_id: registerId, goods_no: element.goods_no } }) //TODO: add IMS //
            });
        } else if (type == 'T') {
            goods.forEach(async (good: any) => {
                prisma.ims_goods.update({ where: { goods_no: good.goods_no }, data: good })
            });
        } else if (type == 'L') {
            goods.forEach(async (good: any) => {
                prisma.ims_goods.update({ where: { goods_no: good.goods_no }, data: good })
            })
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "An error occurred while creating the location" });
    }
}



export async function getRegister(res: NextApiResponse) {
    try {
        const prisma = new PrismaClient();
        const timeNow = await prisma.$queryRawUnsafe('SELECT NOW()');
        console.log(timeNow);
        const response = await prisma.ims_register.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the location" });
    }
}
const handlers = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => await createRegister(req, res),
    GET: async (req: NextApiRequest, res: NextApiResponse) => await getRegister(res)
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers] || notAllowedResponse;
    return await handler(req, res);
}