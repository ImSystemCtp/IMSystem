"use client";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import { CustomTextArea } from "@/root/components";
import { lowsAdminFormMessage } from "@/schemas";
import { useAssetStore, useDetailsRequestStore, useRequestStore } from "@/root/zustand";
import toast from "react-hot-toast";
import { EnumRegisterType, ims_details_asset, ims_request } from "@prisma/client";
import { RequestType } from "@/root/types";
interface FormValues {
    observation: string;
}
const initialValues: FormValues = {
    observation: "",
};
export default function RequestLowForm() {
    const { addRequest } = useRequestStore();
    const { assetsCheck } = useAssetStore();
    const { setDetailRequest,details } = useDetailsRequestStore();
    const checkedDetails = details.filter((detail) => {
        return assetsCheck.some((checkedAsset) => checkedAsset.assets_no === detail.deta_assets_no);
    });
    const assetsWithoutDetails = assetsCheck.filter((checkedAsset) => {
        return !checkedDetails.some((detail) => detail.deta_assets_no === checkedAsset.assets_no);
    });
    assetsWithoutDetails.forEach((asset) => {
        checkedDetails.push({
            deta_assets_no: asset.assets_no,
            deta_description: "Inservible",
        } as ims_details_asset);
    });
    const handleSubmit = async (values: FormValues) => {
        const request = {
            req_type: EnumRegisterType.Low,
            req_date: new Date(),
            req_description: values.observation,
            req_usu_id: 2,
        } as ims_request
        const requestDetails = {
            request:request,
            detailsAssets:checkedDetails
        } as RequestType
        toast.promise(addRequest(requestDetails), {
            loading: "Enviando solicitud...",
            success: "Solicitud enviada exitosamente!",
            error: "No se pudo enviar la solicitud",
        });
    };
    return (
        <div className="w-full">
            <div className="m-2 max-h-80 border border-gray-300 my-2  rounded-lg relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Descripción</th>
                        <th className="px-6 py-3">Número de Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {checkedDetails.map((detail, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{detail.deta_description}</td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{detail.deta_assets_no}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={lowsAdminFormMessage}
                onSubmit={handleSubmit}
            >
                <div className=" lg:h-full">
                    <Form>
                        <div className="flex flex-col   w-full  ">
                            <div className="p-2 w-full h-full ">
                                <CustomTextArea label="Observación:" name="observation" placeholder="Observacion" />
                            </div>
                            <div className="w-full text-center justify-center items-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
                                    Enviar Solicitud!
                                </motion.button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}