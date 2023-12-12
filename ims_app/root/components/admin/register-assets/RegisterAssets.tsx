"use client";
import { Form, Formik } from "formik";

import { registerAssetsMessage } from "@/schemas";
import { useAssetStore, useLawStore, useLocationStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import { CustomInput, CustomSelect, LoadingComponent, RegisterAssetsTable } from "@/root/components";
import { Suspense } from "react";
import { useLaw, useLocation } from "@/root/hooks";
import Link from "next/link";
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
const initialValues = {} as FormValues;
export default function RegisterAssets() {
    const { addAssets } = useAssetStore()
    useLocation();
    useLaw();
    const { laws } = useLawStore((state) => ({ laws: state.laws }));
    const { locations } = useLocationStore((state) => ({ locations: state.locations }));
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
        initialValues.asset_law_id = "";
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
                                    {locations.length > 0 ? (
                                        <CustomSelect label="Ubicación:" name="assets_regis_location">
                                            {!initialValues.assets_regis_location ? (
                                                <option value="">Seleccione una ubicación</option>
                                            ) : (
                                                ""
                                            )}
                                            {locations.map((location) => {
                                                return (
                                                    <option key={location.location_id} value={location.location_id}>
                                                        {location.location_name}
                                                    </option>
                                                );
                                            })}
                                        </CustomSelect>
                                    ) : (
                                        <div className="flex flex-row">
                                            <div className="flex items-center justify-center w-1/2">
                                                <p className="text-red">
                                                    No existen ubicaciones.
                                                </p>
                                            </div>
                                            <div className="w-1/2 bg-yellow-500 text-white text-center rounded-lg p-2 m-2">
                                                <Link href="/admin/locations-management">Agregar ubicaciones</Link>
                                            </div>
                                        </div>
                                    )}
                                    {laws.length > 0 ? (
                                        <CustomSelect label="Ley que financió:" name="assent_law_id">
                                            {!initialValues.asset_law_id ? <option value="">Seleccione una ley</option> : ""}
                                            {laws.map((law) => {
                                                return (
                                                    <option key={law.law_id} value={law.law_id}>
                                                        {law.law_description}
                                                    </option>
                                                );
                                            })}
                                        </CustomSelect>
                                    ) : (
                                        <div className="flex flex-row">
                                            <div className="flex items-center justify-center w-1/2">
                                                <p className="text-red">
                                                    No existen leyes.
                                                </p>
                                            </div>
                                            <div className="w-1/2 bg-yellow-500 text-white text-center rounded-lg p-2 m-2">
                                                <Link href="/admin/laws-management">Agregar ley</Link>
                                            </div>
                                        </div>
                                    )}
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
                                        className=" m-2 p-2 bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded"
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