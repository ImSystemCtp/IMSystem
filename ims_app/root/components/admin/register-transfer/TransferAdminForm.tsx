"use client";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import {  CustomSelect, CustomTextArea } from "@/root/components";
import { transferAdminFormMessage } from "@/schemas";
interface FormValues {
    newUbication: string;
    observation: string;
}

const initialValues: FormValues = {
    newUbication: "",
    observation: "",
};
const handleSubmit = async (values: FormValues) => {
    // Lógica para manejar el envío del formulario
};
export default function TransferAdminForm() {
    return (
        <div className="w-full">
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
                                <CustomSelect label="Nueva ubicación del bien:" name="newUbication" placeholder="Nueva ubicación del bien" />
                            </div>
                            <div className="w-full text-center justify-center items-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
                                    Registrar
                                </motion.button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}