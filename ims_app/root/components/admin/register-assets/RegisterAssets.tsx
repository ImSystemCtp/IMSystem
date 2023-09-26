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
        <div className="justify-center items-center">
            <div className="flex flex-row">
                <div className="justify-center items-center rounded-lg border border-gray-300 m-2 w-2/3 flex flex-col">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={registerAssetsMessage}
                        onSubmit={handleSubmit}
                    >
                        <Form  className="w-full ">
                            <div>
                                <h1 className="text-center text-lg font-bold mb-6">
                                    Registrar Bienes
                                </h1>
                            </div>
                            <div className=" justify-center w-full flex flex-col sm:flex-row lg:p-4 lg:px-10">
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
                                    <CustomInput label="Modelo:" name="model" inputType="text" />
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
                            <div className="flex justify-center items-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className=" m-2 p-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Insertar a la lista
                                </motion.button>
                            </div>
                        </Form>
                    </Formik>
                </div>

                <div className="w-1/3 rounded-lg border border-gray-300 p-4 m-2 ">
                    <h2 className="text-center text-gray-500 text-lg font-semibold pb-4">
                        Bienes Registrados
                    </h2>
                    <div className="my-1"></div>
                    <div className="bg-sky-400 h-px mb-6"></div>
                    <div className="w-full overflow-hidden rounded-lg shadow-xs">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th className="px-4 py-3">Numero de Placa</th>
                                        <th className="px-4 py-3">Nombre</th>
                                        <th className="px-4 py-3">Ubicacion</th>
                                    </tr>
                                </thead>
                                <tbody className="h-80 bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    {/* Aquí deberías colocar tus filas de datos, si tienes datos para mostrar */}
                                </tbody>
                            </table>
                            <div className="w-full flex justify-center items-center ">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="m-2 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Registrar Bienes
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}