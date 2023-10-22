"use client";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import { CustomTextArea } from "@/root/components";
import { lowsAdminFormMessage } from "@/schemas";
import {  useAssetStore, useRequestStore } from "@/root/zustand";
import toast from "react-hot-toast";
import { EnumRegisterType, ims_request } from "@prisma/client";
interface FormValues {
    observation: string;
}
const initialValues: FormValues = {
    observation: "",
};
export default function RequestLowForm() {
    const {addRequest} = useRequestStore();
    const {assetsCheck } = useAssetStore();
    const handleSubmit = async (values: FormValues) => {
        const request = {
            req_type: EnumRegisterType.Low,
            req_date: new Date(),
            req_description: values.observation,
            req_usu_id: 2,
        } as  ims_request
        toast.promise(addRequest(request,assetsCheck), {
            loading: "Enviando solicitud...",
            success: "Solicitud enviada exitosamente!",
            error: "No se pudo enviar la solicitud",
        });
    };
    return (
        <div className="w-full">
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