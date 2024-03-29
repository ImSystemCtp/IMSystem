"use client";
import { Form, Formik } from "formik";
import { AssetsFormValues } from "../RegisterAssets";
import { registerAssetsMessage } from "@/schemas";
import { CustomInput, CustomSelect } from "@/root/components";
import RegisterAssetsSelects from "./RegisterAssetsSelects";
interface RegisterAssetsFormProps {
    initialValues: AssetsFormValues;
    handleSubmit: (values: AssetsFormValues) => void;
    handleReset: () => void;
}
export const RegisterAssetsForm = ({ initialValues, handleReset, handleSubmit}: RegisterAssetsFormProps) => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={registerAssetsMessage}
                onSubmit={handleSubmit} >
                <Form className="w-full ">
                    <div>
                        <h2 className="text-2xl dark:text-white font-bold  text-center">
                            Registrar Bienes
                        </h2>
                    </div>
                    <div className=" justify-center w-full flex flex-col sm:flex-row lg:p-4 lg:px-10">
                        <div className="w-full h-full p-2">
                            <CustomInput label="Descripción del Bien:" name="assets_description" inputType="text" />
                            <CustomInput label="Serie:" name="assets_series" inputType="text" />
                            <CustomInput label="Marca:" name="assets_brand" inputType="text" />
                            <CustomInput label="Fecha de Factura:" name="invoice_date" inputType="date" />
                            <CustomInput label="Modelo:" name="assets_model" inputType="text" />
                        </div>
                        <div className="w-full p-2">
                            <CustomInput label="Número de Factura:" name="assets_invoice_number" inputType="text" />
                            <CustomInput label="Valor de adquisición:" name="assets_acquisition_value" inputType="text" />
                            <RegisterAssetsSelects initialValues={initialValues}  />
                        </div>
                    </div>
                    <div className="flex flex-row m-2 p-2 ">
                        <div className="flex justify-center items-center md:mx-36">
                            <button
                                type="reset"
                                onClick={handleReset}
                                className="bg-cyan-500 hover:bg-cyan-400 flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group "
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                <span className="  flex-1 ml-3 whitespace-nowrap">Limpiar Formulario</span>
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <button
                                className=" m-2 p-2 bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded" > Insertar a la lista
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}