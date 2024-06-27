"use client";
import { Formik, Form } from "formik";
import { CustomTextArea } from "@/root/components";
import { lowsAdminFormMessage } from "@/schemas";
import { useAssetCheckStore, useAssetStore, useAuthStore } from "@/root/zustand";
import { EnumRegisterType, ims_register } from "@prisma/client";
import { useRegisterStore } from "@/root/zustand";
import toast from "react-hot-toast";
import { useAuth } from "@/root/hooks";
import { registerAsset } from "@/lib/definitions";
import Link from "next/link";
interface FormValues { observation: string; }
export default function LowsAdminForm() {
    const { assetsCheck } = useAssetCheckStore((state) => ({ assetsCheck: state.assetsCheck }));
    const { clearAssetsCheck } = useAssetCheckStore();
    const { addRegister } = useRegisterStore();
    useAuth();
    const { userAuth } = useAuthStore((state) => ({ userAuth: state.userAuth }));
    const initialObservation = assetsCheck.map(asset => asset.assets_no.split("-")[1]).join(", ");
    const initialValues: FormValues = {
        observation: initialObservation,
    };
    const handleSubmit = async (values: FormValues) => {
        if (assetsCheck.length === 0) return toast.error("No hay activos seleccionados");
        const register = {
            reg_type: EnumRegisterType.Low,
            reg_date: new Date(),
            reg_observation: values.observation,
            reg_usu_id: userAuth.usu_id,
            reg_inst_id: 1,
        } as ims_register
        const registerLow = { register, assets: assetsCheck, } as registerAsset
        await toast.promise(addRegister(registerLow), {
            loading: "Registrando activos...",
            success: "Activos registrados exitosamente!",
            error: "No se pudo registrar los activos",
        });
        await clearAssetsCheck();
    };
    return (
        <div className=" w-full max-w-6xl mx-auto p-4">
            <header>
                <h2 className="text-center text-2xl font-bold dark:text-white">Activos Seleccionados</h2>
                <h4 className="text-center text-lg dark:text-white">Paso 2: Registra la baja de los activos seleccionados</h4>
            </header>
            <div className="m-2  h-40 border border-gray-300  rounded-lg relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Número de Activo</th>
                            <th className="px-6 py-3">Marca</th>
                            <th className="px-6 py-3">Modelo</th>
                            <th className="px-6 py-3">Ubicación Actual</th>
                            <th className="px-6 py-3">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assetsCheck.length ? (
                                assetsCheck.map((asset, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{asset.assets_no}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{asset.assets_brand}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{asset.assets_model}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{asset.assets_curr_location}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{asset.assets_description}</td>
                                    </tr>
                                ))) : (<tr>
                                    <td colSpan={5} className="text-center bg-blue-100 w-40 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-cyan-600">No hay activos seleccionados</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
            <Formik initialValues={initialValues} validationSchema={lowsAdminFormMessage} onSubmit={handleSubmit} enableReinitialize>
                <div className="w-full  " >
                    <Form>
                        <div className="flex flex-col   w-full  ">
                            <div className="p-2 w-full max-h-40  ">
                                <CustomTextArea className="h-40 resize-none" label="Observación:" name="observation" placeholder="Observacion" />
                            </div>
                            <div className="w-full text-center justify-center items-center">
                                <Link href="/admin/register-lows" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700">
                                    Volver
                                </Link>
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