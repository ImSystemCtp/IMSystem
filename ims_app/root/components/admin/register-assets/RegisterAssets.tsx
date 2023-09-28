"use client";
import { Form, Formik } from "formik";
import CustomInput from "../../Formik/CustomInput";
import CustomSelect from "../../Formik/CustomSelect";
import { motion } from "framer-motion";
import registerAssetsMessage from "@/schemas/registerAssetsMessage";
import { useAssetStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import RegisterAssetsTable from "./RegisterAssetsTable";
interface FormValues {
    assets_no: string,
    assets_description: string,
    assets_series: string,
    assets_brand: string,
    assets_model: string,
    assets_invoice_number: number,
    assets_regis_location: number,
    assent_law_id: number,
    assets_acquisition_value: string,
}
const initialValues = {} as FormValues;

export default function RegisterAssets() {
    const {addAssets} = useAssetStore()
    const handleSubmit = async (values: FormValues) => {
        values as FormValues;
        addAssets(values as ims_assets);
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
                                        inputType="text"
                                    />
                                    <CustomInput
                                        label="Valor de adquisición:"
                                        name="assets_acquisition_mode"
                                        inputType="number"
                                    />
                                    <CustomSelect label="Ubicación:" name="assets_regis_location" >
                                        <option value={1}>Ubicacion1</option>
                                        <option value={1}>Ubicacion2</option>
                                    </CustomSelect>
                                    <CustomSelect label="Ley que financió:" name="assent_law_id">
                                        <option value={1}>Ley1</option>
                                        <option value={1}>Ley2</option>
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