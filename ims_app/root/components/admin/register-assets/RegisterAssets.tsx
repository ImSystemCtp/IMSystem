"use client";
import { Form, Formik } from "formik";
import CustomInput from "../../Formik/CustomInput";
import CustomSelect from "../../Formik/CustomSelect";
import { motion } from "framer-motion";
import registerAssetsMessage from "@/schemas/registerAssetsMessage";
interface FormValues {
    number: string;
    description: string;
    series: string;
    brand: string;
    model: string;
    invoice: string;
    value: string;
    location: string;
    law: string;
}
const initialValues: FormValues = {
    number: "",
    description: "",
    series: "",
    brand: "",
    model: "",
    invoice: "",
    value: "",
    location: "",
    law: "",
};
const handleSubmit = async (values: FormValues) => { };
export default function RegisterAssets() {
    return (
        <div className="justify-center items-center  ">
            <Formik
                initialValues={initialValues}
                validationSchema={registerAssetsMessage}
                onSubmit={handleSubmit}
            >
                <div className="">
                    <Form className="">
                        <h1 className="text-center text-lg font-bold mb-6">
                            Registrar Bienes
                        </h1>
                            <div className="justify-center  w-full flex flex-col sm:flex-row lg:p-4 lg:px-20 ">
                                <div className="w-full h-full p-2">
                                    <CustomInput
                                        label="Número de Patrimonio:"
                                        name="email"
                                        inputType="email"
                                    />
                                    <CustomInput
                                        label="Descripción del Bien:"
                                        name="username"
                                        inputType="text"
                                    />
                                    <CustomInput label="Serie:" name="serie" inputType="text" />
                                    <CustomInput label="Marca:" name="brand" inputType="text" />
                                </div>
                                <div className="w-full p-2">
                                    <CustomInput
                                        label="Modelo:"
                                        name="model"
                                        inputType="text"
                                    />
                                    <CustomInput
                                        label="Número de Factura:"
                                        name="invoice"
                                        inputType="text"
                                    />
                                    <CustomInput
                                        label="Valor de adquisición:"
                                        name="value"
                                        inputType="text"
                                    />
                                    <CustomSelect label="Ubicación:" name="location">
                                        <option value="admin">Ubicacion1</option>
                                        <option value="driver">Ubicacion2</option>
                                    </CustomSelect>
                                    <CustomSelect label="Ley que financió:" name="law">
                                        <option value="admin">Ley1</option>
                                        <option value="driver">Ley2</option>
                                    </CustomSelect>
                                </div>
                            </div>
                        <div className="my-6 flex justify-center">
                        <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
                                Registrar
                            </motion.button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    );
}
