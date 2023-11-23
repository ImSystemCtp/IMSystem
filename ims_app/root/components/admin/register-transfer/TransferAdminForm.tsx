"use client";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import {  CustomSelect, CustomTextArea } from "@/root/components";
import { transferAdminFormMessage } from "@/schemas";
import { EnumRegisterType, ims_register } from "@prisma/client";
import { registerAsset } from "@/root/types";
import toast from "react-hot-toast";
import { useAssetStore, useLocationStore, useRegisterStore } from "@/root/zustand";
import { useLocation } from "@/root/hooks";
import Link from "next/link";
interface FormValues {
    newUbication: string;
    observation: string;
}

const initialValues = {} as FormValues;
export default function TransferAdminForm() {
    useLocation();
    const { locations, setCurrentLocation,currentLocation } = useLocationStore();
    const {assetsCheck,clearAssetsCheck,clearAssetsByLocation } = useAssetStore();
    const { addRegister } = useRegisterStore();
    const handleSubmit = async (values: FormValues) => {
        const register = {
            reg_type: EnumRegisterType.Transfer,
            reg_date: new Date(),
            reg_observation: values.observation,
            reg_usu_id: 2,
            reg_inst_id: 1,
        } as  ims_register
        console.log(register);
        assetsCheck.forEach((asset) => {
            asset.assets_curr_location = parseInt(values.newUbication);
        });
        console.log(assetsCheck);
        const registerTransfer = {
            register,
            assets: assetsCheck,
        } as registerAsset
        toast.promise(addRegister(registerTransfer), {
            loading: "Registrando transferencia...",
            success: "Transferencia registrados exitosamente!",
            error: "No se pudo registrar la transferencia de activos",
        });
    await clearAssetsByLocation(assetsCheck);
    await clearAssetsCheck();
    };
    return (
        <div className="w-full">
            <Formik
                initialValues={initialValues}
                validationSchema={transferAdminFormMessage}
                onSubmit={handleSubmit}
            >
                <div className=" lg:h-full">
                    <Form>
                        <div className="flex flex-col   w-full  ">
                            <div className="p-2 w-full h-full ">
                                <CustomTextArea label="Observación:" name="observation" placeholder="Observacion" />
                                {locations.length > 0 ? (
                                        <CustomSelect label="Ubicación:" name="newUbication">
                                            {!initialValues.newUbication ? (
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