"use client";
import { Form, Formik } from "formik";

import { registerAssetsMessage } from "@/schemas";
import { useAssetStore} from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import { CustomInput, CustomSelectAssets, LoadingComponent, RegisterAssetsTable } from "@/root/components";
import { Suspense } from "react";
interface FormValues {
    assets_no: string,
    assets_description: string,
    assets_series: string,
    assets_brand: string,
    assets_model: string,
    assets_invoice_number: string,
    assets_regis_location: string,
    assent_law_id: string,
    assets_acquisition_value: string,
    invoice_date: string,
}
export const initialValues = {} as FormValues;
export default function RegisterAssets() {
    const { addAssets } = useAssetStore()
    const handleSubmit = async (values: FormValues) => {
        const { assent_law_id, assets_regis_location } = values
        const locationId = Number.parseInt(assets_regis_location);
        const invoice_date = new Date(values.invoice_date);
        addAssets({ ...values, invoice_date: invoice_date, assets_curr_location: locationId, assent_law_id: Number.parseInt(assent_law_id), assets_regis_location: locationId } as ims_assets);
    };
    const handleReset = () => {
        initialValues.assets_no = "";
        initialValues.assets_description = "";
        initialValues.assets_series = "";
        initialValues.assets_brand = "";
        initialValues.assets_model = "";
        initialValues.assets_invoice_number = "";
        initialValues.assets_regis_location = "";
        initialValues.assent_law_id = "";
        initialValues.assets_acquisition_value = "";
        initialValues.invoice_date = "";
    };
    return (
        <div className="justify-center items-center">
            <div className="flex flex-col md:flex-row">
                <div className="justify-center items-center rounded-lg border border-gray-300 m-2 md:w-2/3 flex flex-col">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={registerAssetsMessage}
                        onSubmit={handleSubmit}
                    >
                        <Form className="w-full ">
                            <div>
                                <h2 className="text-2xl font-bold  text-center">
                                    Registrar Bienes
                                </h2>
                            </div>
                            <div className=" justify-center w-full flex flex-col sm:flex-row lg:p-4 lg:px-10">
                                <div className="w-full h-full p-2">
                                    <CustomInput
                                        label="Número de Patrimonio:"
                                        name="assets_no"
                                        inputType="text"
                                    />
                                    <CustomInput
                                        label="Descripción del Bien:"
                                        name="assets_description"
                                        inputType="text"
                                    />
                                    <CustomInput label="Serie:" name="assets_series" inputType="text" />
                                    <CustomInput label="Marca:" name="assets_brand" inputType="text" />
                                    <CustomInput label="Fecha de Factura:" name="invoice_date" inputType="date" />
                                </div>
                                <div className="w-full p-2">
                                    <CustomInput label="Modelo:" name="assets_model" inputType="text" />
                                    <CustomInput
                                        label="Número de Factura:"
                                        name="assets_invoice_number"
                                        inputType="text"
                                    />
                                    <CustomInput
                                        label="Valor de adquisición:"
                                        name="assets_acquisition_value"
                                        inputType="text"
                                    />
                                    <Suspense fallback={<LoadingComponent/>}></Suspense>
                                    <CustomSelectAssets />
                                    <Suspense/>
                                </div>
                            </div>
                            <div className="flex flex-row m-2 p-2 ">

                                <div className="flex justify-center items-center">
                                    <button
                                        type="reset"
                                        onClick={handleReset}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className=" m-2 p-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Limpiar Formulario
                                    </button>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className=" m-2 p-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Insertar a la lista
                                    </button>
                                </div>
                            </div>

                        </Form>
                    </Formik>
                </div>
                <RegisterAssetsTable />
            </div>
        </div >
    );
}