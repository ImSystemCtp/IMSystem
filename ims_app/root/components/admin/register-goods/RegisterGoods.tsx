"use client";
import { Form, Formik } from "formik";
import CustomInput from "../../Formik/CustomInput";
import CustomSelect from "../../Formik/CustomSelect";
import { registerGoodsMessage } from "@/schemas";
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
export default function RegisterGoods() {
    return (
        <div className="w-full  ">
            <Formik
                initialValues={initialValues}
                validationSchema={registerGoodsMessage}
                onSubmit={handleSubmit}
            >
                <div className="border-2 rounded-lg border-slate-300 shadow-lg shadow-slate-300 bg-gradient-to-br from-slate-300 to-white p-4 lg:w-3/4 lg:h-full">
                    <Form>
                        <h1 className="text-center text-lg font-bold mb-6">
                            Registrar Bienes
                        </h1>
                            <div className="justify-center  w-full flex flex-col sm:flex-row lg:p-2 lg:m-4 lg:w-3/4 ">
                                <div className="w-full h-full sm:m-2">
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
                                    <CustomInput label="Serie:" name="contact" inputType="text" />
                                    <CustomInput label="Marca:" name="contact" inputType="text" />
                                </div>
                                <div className="w-full sm:m-2">
                                    <CustomInput
                                        label="Modelo:"
                                        name="contact"
                                        inputType="text"
                                    />
                                    <CustomInput
                                        label="Número de Factura:"
                                        name="contact"
                                        inputType="text"
                                    />
                                    <CustomInput
                                        label="Valor de adquisición:"
                                        name="contact"
                                        inputType="text"
                                    />
                                    <CustomSelect label="Ubicación:" name="type">
                                        <option value="admin">Ubicacion1</option>
                                        <option value="driver">Ubicacion2</option>
                                    </CustomSelect>
                                    <CustomSelect label="Ley que financió:" name="type">
                                        <option value="admin">Ley1</option>
                                        <option value="driver">Ley2</option>
                                    </CustomSelect>
                                </div>
                            </div>
                        <div className="mt-6 flex justify-center">
                            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5">
                                Register
                            </button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    );
}
