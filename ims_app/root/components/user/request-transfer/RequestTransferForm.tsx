"use client";
import { Formik, Form } from "formik";

import {  CustomSelect, CustomTextArea } from "@/root/components";
import { transferAdminFormMessage } from "@/schemas";
import toast from "react-hot-toast";
import { EmailStore, useAssetStore, useAuthStore, useDetailsRequestStore, useRequestStore } from "@/root/zustand";
import { EnumRegisterType, ims_details_asset, ims_request } from "@prisma/client";
import { RequestType } from "@/root/types";
import { useAuth } from "@/root/hooks";
interface FormValues {
    newLocation: string;
    observation: string;
}

const initialValues: FormValues = {
    newLocation: "",
    observation: "",
};

export default function RequestTransferForm() {
    useAuth();
    const { sendEmail } = EmailStore();
    const {addRequest} = useRequestStore();
    const { assetsCheck, clearAssetsCheck,clearAssetsByLocation } = useAssetStore();
    const { setDetailRequest,details } = useDetailsRequestStore();
    const {userAuth} = useAuthStore()
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
            req_date:new Date(),
            req_description: values.observation,
            req_usu_id: userAuth.usu_id,
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
        await sendEmail(request);
        await clearAssetsByLocation(assetsCheck);
        await clearAssetsCheck();
    };
    return (
        <div className="w-full">
            <div className="m-2 max-h-40 border border-gray-300 my-2  rounded-lg relative overflow-x-auto">
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
                validationSchema={transferAdminFormMessage}
                onSubmit={handleSubmit}
            >
                <div className=" lg:h-full">
                    <Form>
                        <div className="flex flex-col   w-full  ">
                            <div className="p-2 w-full h-full ">
                                <CustomTextArea label="Observación:" name="observation" placeholder="Observacion" />
                                <CustomSelect label="Nueva ubicación del bien:" name="newLocation" placeholder="Nueva ubicación del bien" />
                            </div>
                            <div className="w-full text-center justify-center items-center">
                                <button
                                    
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
                                    Enviar Solicitud!
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}