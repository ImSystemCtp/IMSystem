"use client";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { registerAssetsMessage } from "@/schemas";
import { useAssetStore, useLawStore, useLocationStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import { useLaw, useLocation } from "@/root/hooks";
import { CustomInput, CustomSelect, RegisterAssetsTable } from "@/root/components";
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
    useLocation();
    useLaw();
    const { laws } = useLawStore();
    const { locations } = useLocationStore();
    const { addAssets } = useAssetStore()
    const handleSubmit = async (values: FormValues) => {
        const { assent_law_id, assets_regis_location } = values
        const locationId = Number.parseInt(assets_regis_location);
        const invoice_date = new Date(values.invoice_date).toISOString();
        addAssets({ ...values,invoice_date:invoice_date, assets_curr_location: locationId , assent_law_id: Number.parseInt(assent_law_id), assets_regis_location: locationId } as ims_assets);
    };
    return (
        <div className="justify-center items-center">
            <div className="flex flex-row">
                <div className="justify-center items-center rounded-lg border border-gray-300 m-2 w-2/3 flex flex-col">
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
                                            {!initialValues.assent_law_id ? <option value="">Seleccione una ley</option> : ""}
                                            {laws.map((law) => {
                                                return (
                                                    <option key={law.law_id} value={law.law_id}>
                                                        {law.law_name}
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
                <RegisterAssetsTable />
            </div>
        </div >
    );
}