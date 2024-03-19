"use client";
import { Formik, Form } from "formik";
import { CustomSelect, CustomTextArea } from "@/root/components";
import { transferAdminFormMessage } from "@/schemas";
import { EnumRegisterType, ims_register } from "@prisma/client";
import toast from "react-hot-toast";
import { useAssetCheckStore,useAuthStore, useLocationStore, useRegisterStore } from "@/root/zustand";
import { useAuth, useLocation } from "@/root/hooks";
import Link from "next/link";
import { registerAsset } from "@/lib/definitions";
interface FormValues {newLocation: string;observation: string;}
const initialValues = {} as FormValues;
export default function TransferAdminForm() {
    useLocation();
    const { locations } = useLocationStore((state) => ({locations: state.locations}));
    const { assetsCheck } = useAssetCheckStore((state) => ({assetsCheck: state.assetsCheck}));
    const { clearAssetsCheck } = useAssetCheckStore();
    const { addRegister } = useRegisterStore();
    useAuth();
    const { userAuth } = useAuthStore((state) => ({ userAuth: state.userAuth }));
    const handleSubmit = async (values: FormValues) => {
        if(assetsCheck.length === 0) return toast.error("No hay activos seleccionados");
        const register = {
            reg_type: EnumRegisterType.Transfer,
            reg_date: new Date(),
            reg_observation: values.observation,
            reg_usu_id: userAuth.usu_id,
            reg_inst_id: 1,
        } as ims_register
        assetsCheck.forEach((asset) => { asset.assets_curr_location = parseInt(values.newLocation); });
        const registerTransfer = { register, assets: assetsCheck, } as registerAsset
        toast.promise(addRegister(registerTransfer), {
            loading: "Registrando transferencia...",
            success: "Transferencia registrados exitosamente!",
            error: "No se pudo registrar la transferencia de activos",
        });
        await clearAssetsCheck();
    };
    return (
        <div className="w-full">
            <Formik initialValues={initialValues} validationSchema={transferAdminFormMessage} onSubmit={handleSubmit} >
                <div className=" lg:h-full">
                    <Form>
                        <div className="flex flex-col   w-full  ">
                            <div className="m-2 max-h-40 border border-gray-300 my-2  rounded-lg relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th className="px-6 py-3">Número de Activo</th>
                                            <th className="px-6 py-3">Descripción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assetsCheck.map((asset, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{asset.assets_no}</td>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{asset.assets_description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-2 w-full h-full ">
                                <CustomTextArea label="Observación:" name="observation" placeholder="Observacion" />
                                {locations.length > 0 ? (
                                    <CustomSelect label="Ubicación:" name="newLocation">
                                        {!initialValues.newLocation ? (
                                            <option value="">Seleccione una ubicación</option>
                                        ) : ( "" )}
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
                                            <p className="text-red"> No existen ubicaciones. </p>
                                        </div>
                                        <div className="w-1/2 bg-yellow-500 text-white text-center rounded-lg p-2 m-2">
                                            <Link href="/admin/locations-management">Agregar ubicaciones</Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="w-full text-center justify-center items-center">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit"> Registrar </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}