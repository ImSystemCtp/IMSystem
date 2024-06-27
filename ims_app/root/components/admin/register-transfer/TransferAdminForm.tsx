"use client"
import { Formik, Form } from "formik";
import { CustomSelect, CustomTextArea } from "@/root/components";
import { transferAdminFormMessage } from "@/schemas";
import { EnumRegisterType, ims_register } from "@prisma/client";
import toast from "react-hot-toast";
import { useAssetCheckStore, useAuthStore, useLocationStore, useRegisterStore } from "@/root/zustand";
import { useAuth, useLocation } from "@/root/hooks";
import Link from "next/link";
import { registerAsset } from "@/lib/definitions";

interface FormValues {
    newLocation: string;
    observation: string;
}

export default function TransferAdminForm() {
    useLocation();
    const { locations } = useLocationStore((state) => ({ locations: state.locations }));
    const { assetsCheck } = useAssetCheckStore((state) => ({ assetsCheck: state.assetsCheck }));
    const { clearAssetsCheck } = useAssetCheckStore();
    const { addRegister } = useRegisterStore();
    const initialObservation = assetsCheck.map(asset => asset.assets_no).join(", ");
    const initialValues: FormValues = {
        newLocation: "",
        observation: initialObservation,
    };
    useAuth();
    const { userAuth } = useAuthStore((state) => ({ userAuth: state.userAuth }));

    const handleSubmit = async (values: FormValues) => {
        if (assetsCheck.length === 0) {
            return toast.error("No hay activos seleccionados");
        }

        const register: ims_register = {
            reg_type: EnumRegisterType.Transfer,
            reg_date: new Date(),
            reg_observation: values.observation,
            reg_usu_id: userAuth.usu_id,
            reg_inst_id: 1,
        } as ims_register;

        assetsCheck.forEach(asset => {
            asset.assets_curr_location = parseInt(values.newLocation);
        });

        const registerTransfer: registerAsset = { register, assets: assetsCheck };

        toast.promise(addRegister(registerTransfer), {
            loading: "Registrando transferencia...",
            success: "Transferencia registrada exitosamente!",
            error: "No se pudo registrar la transferencia de activos",
        });

        await clearAssetsCheck();
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <header>
                <h2 className="text-center text-2xl font-bold dark:text-white">Activos Seleccionados</h2>
                <h4 className="text-center text-lg dark:text-white">Paso 2: Registra el traslado de los activos seleccionados</h4>
            </header>
            <Formik initialValues={initialValues} validationSchema={transferAdminFormMessage} onSubmit={handleSubmit} enableReinitialize>
                <Form className="space-y-4">
                    <div className="p-4 m-2 max-h-60 border border-gray-300 my-2  rounded-lg relative overflow-x-auto">
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
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <CustomTextArea label="Observación:" name="observation" placeholder="Observación" />
                        {locations.length > 0 ? (
                            <CustomSelect label="Ubicación:" name="newLocation">
                                {!initialValues.newLocation && <option value="">Seleccione una ubicación</option>}
                                {locations.map((location) => (
                                    <option key={location.location_id} value={location.location_id}>
                                        {location.location_name}
                                    </option>
                                ))}
                            </CustomSelect>
                        ) : (
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-red-600">No existen ubicaciones.</p>
                                <div className="bg-yellow-500 text-white text-center rounded-lg p-2 m-2">
                                    <Link href="/admin/locations-management">Agregar ubicaciones</Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <Link href="/admin/register-transfers" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700">
                            Volver
                        </Link>
                        <button className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">Registrar</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
