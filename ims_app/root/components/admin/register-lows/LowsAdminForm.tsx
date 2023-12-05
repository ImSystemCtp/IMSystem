"use client";
import { Formik, Form } from "formik";

import { CustomTextArea } from "@/root/components";
import { lowsAdminFormMessage } from "@/schemas";
import {  useAssetStore, useAuthStore } from "@/root/zustand";
import { EnumRegisterType, ims_register } from "@prisma/client";
import { useRegisterStore } from "@/root/zustand";
import toast from "react-hot-toast";
import { useAuth } from "@/root/hooks";
import { registerAsset } from "@/lib/definitions";
interface FormValues {

    observation: string;
}

const initialValues: FormValues = {
    observation: "",
};

export default function LowsAdminForm() {
    const {assetsCheck } = useAssetStore((state) => ({
        assetsCheck: state.assetsCheck
        }));
    const {clearAssetsCheck,clearAssetsByLocation } = useAssetStore();

    const { addRegister } = useRegisterStore();
    useAuth();
    const { userAuth } = useAuthStore((state) => ({ userAuth: state.userAuth }));
    const handleSubmit = async (values: FormValues) => {
        const register = {
            reg_type: EnumRegisterType.Low,
            reg_date: new Date(),
            reg_observation: values.observation,
            reg_usu_id: userAuth.usu_id,
            reg_inst_id: 1,
        } as  ims_register
        const registerLow = {
            register,
            assets: assetsCheck,
        } as registerAsset
        await toast.promise(addRegister(registerLow), {
            loading: "Registrando activos...",
            success: "Activos registrados exitosamente!",
            error: "No se pudo registrar los activos",
        });
    await clearAssetsByLocation(assetsCheck);
    await clearAssetsCheck();
    };
    return (
        <div className="w-full " >
            <Formik
                initialValues={initialValues}
                validationSchema={lowsAdminFormMessage}
                onSubmit={handleSubmit}
            >
                <div className="m-2 lg:h-full">
                    <Form>
                        <div className="flex flex-col   w-full  ">
                            <div className="p-2 w-full h-full ">
                                <CustomTextArea label="Observación:" name="observation" placeholder="Observacion" />
                            </div>
                            <div className="w-full text-center justify-center items-center">
                                <button
                                    
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
                                    Registrar
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}