"use client";
import { Form, Formik } from "formik";
import CustomInput from "../../Formik/CustomInput";
import CustomSelect from "../../Formik/CustomSelect";
import { motion } from "framer-motion";
import registerAssetsMessage from "@/schemas/registerAssetsMessage";
import { useAssetStore, useLawStore, useLocationStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import RegisterAssetsTable from "./RegisterAssetsTable";
import { useLocation } from "@/root/hooks";
interface FormValues {
    assets_no: number,
    assets_description: string,
    assets_series: string,
    assets_brand: string,
    assets_model: string,
    assets_invoice_number: number,
    assets_regis_location: string,
    assent_law_id: string,
    assets_acquisition_value: string,
}
const initialValues = {} as FormValues;

export default function RegisterAssets() {
    useLocation()
    const lawState = useLawStore();
    const laws = lawState.laws;
    const locationState = useLocationStore();
    const locations = locationState.locations;
    const { addAssets } = useAssetStore()
    const handleSubmit = async (values: FormValues) => {
        const { assent_law_id, assets_regis_location } = values
        addAssets({ ...values, assent_law_id: parseInt(assent_law_id), assets_regis_location: parseInt(assets_regis_location) } as ims_assets);
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
                                <h1 className="text-center text-lg font-bold mb-6">
                                    Registrar Bienes
                                </h1>
                            </div>
                            <div className=" justify-center w-full flex flex-col sm:flex-row lg:p-4 lg:px-10">
                                <div className="w-full h-full p-2">
                                    <CustomInput
                                        label="Número de Patrimonio:"
                                        name="assets_no"
                                        inputType="number"
                                    />
                                    <CustomInput
                                        label="Descripción del Bien:"
                                        name="assets_description"
                                        inputType="text"
                                    />
                                    <CustomInput label="Serie:" name="assets_series" inputType="text" />
                                    <CustomInput label="Marca:" name="assets_brand" inputType="text" />
                                </div>
                                <div className="w-full p-2">
                                    <CustomInput label="Modelo:" name="assets_model" inputType="text" />
                                    <CustomInput
                                        label="Número de Factura:"
                                        name="assets_invoice_number"
                                        inputType="number"
                                    />
                                    <CustomInput
                                        label="Valor de adquisición:"
                                        name="assets_acquisition_value"
                                        inputType="text"
                                    />
                                    <CustomSelect label="Ubicación:" name="assets_regis_location" >
                                        {!initialValues.assets_regis_location ? <option value="">Seleccione una ubicacion</option> : ""}
                                        {locations.map((location) => {
                                            return <option key={location.location_id} value={location.location_id}>{location.location_name}</option>;
                                        })}
                                    </CustomSelect>
                                    <CustomSelect label="Ley que financió:" name="assent_law_id" >
                                        {!initialValues.assent_law_id ? <option value="">Seleccione una ley</option> : ""}
                                        {laws.map((law) => {
                                            return <option key={law.law_id} value={law.law_id}>{law.law_name}</option>;
                                        })}
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
                <RegisterAssetsTable />
            </div>
        </div >
    );
}