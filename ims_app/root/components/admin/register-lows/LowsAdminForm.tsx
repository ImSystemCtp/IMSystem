"use client";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import { CustomInput, CustomSelect, CustomTextArea } from "../../Formik";
import lowsAdminFormMessage from "@/schemas/lows-admin-form-message";
interface FormValues {
    number: string;
    observation: string;
}

const initialValues: FormValues = {
    number: "",
    observation: "",
};
const handleSubmit = async (values: FormValues) => {
    // Lógica para manejar el envío del formulario
};
export default function LowsAdminForm() {
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