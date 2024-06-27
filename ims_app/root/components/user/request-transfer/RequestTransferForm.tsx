"use client";
import { Formik, Form } from "formik";
import {useRouter} from "next/navigation"
import { CustomSelect, CustomTextArea } from "@/root/components";
import { transferAdminFormMessage } from "@/schemas";
import toast from "react-hot-toast";
import { EmailStore, useAssetCheckStore, useAssetStore, useAuthStore, useDetailsRequestStore, useLocationStore, useRequestStore } from "@/root/zustand";
import { EnumRegisterType, ims_details_asset, ims_request } from "@prisma/client";
import { useAuth } from "@/root/hooks";
import { RequestType } from "@/lib/definitions";
import Link from "next/link";
interface FormValues { newLocation: string; observation: string;
}
const initialValues: FormValues = { newLocation: "", observation: "", };
export default function RequestTransferForm() {
    useAuth();
    const router = useRouter();
    const { locations } = useLocationStore((state)=> ({ locations: state.locations }));
    const { sendEmail } = EmailStore();
    const { addRequest } = useRequestStore();
    const { assetsCheck } = useAssetCheckStore((state) => ({ assetsCheck: state.assetsCheck }));
    const { clearAssetsCheck } = useAssetCheckStore();
    const { details } = useDetailsRequestStore((state) => ({ details: state.details }));
    const { userAuth } = useAuthStore((state) => ({ userAuth: state.userAuth }))
    const checkedDetails = details.filter((detail) => {
        return assetsCheck.some((checkedAsset) => checkedAsset.assets_no === detail.deta_assets_no); });
    const assetsWithoutDetails = assetsCheck.filter((checkedAsset) => {
        return !checkedDetails.some((detail) => detail.deta_assets_no === checkedAsset.assets_no); });
    assetsWithoutDetails.forEach((asset) => {
        checkedDetails.push({
            deta_assets_no: asset.assets_no,
            deta_description: "Inservible",
        } as ims_details_asset);
    });
    const handleSubmit = async (values: FormValues) => {
        if(checkedDetails.length === 0) return toast.error("No hay activos seleccionados");
        const request = {
            req_type: EnumRegisterType.Transfer,
            req_date: new Date(),
            req_description: values.observation,
            req_location_id_new : parseInt(values.newLocation),
            req_usu_id: userAuth.usu_id,
        } as ims_request
        const requestDetails = {
            request: request,
            detailsAssets: checkedDetails
        } as RequestType
        try {
            await toast.promise(addRequest(requestDetails), {
                loading: "Enviando solicitud...",
                success: "Solicitud enviada exitosamente!",
                error: "No se pudo enviar la solicitud",
            });
            await sendEmail(request);
            await clearAssetsCheck();
            router.push("/user/request-transfers");
        } catch (error) {}
    };
    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <header>
                <h2 className="text-center text-2xl font-bold dark:text-white">Activos Seleccionados</h2>
                <h4 className="text-center text-lg dark:text-white">Paso 2: Registra la solicitud de traslado de los activos seleccionados</h4>
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
                            <CustomSelect label="Ubicación:" name="newLocation">
                                {!initialValues.newLocation && <option value="">Seleccione una ubicación</option>}
                                {locations.map((location) => (
                                    <option key={location.location_id} value={location.location_id}>
                                        {location.location_name}
                                    </option>
                                ))}
                            </CustomSelect>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/admin/register-transfers" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700">
                            Volver
                        </Link>
                        <button className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">Enviar solicitud!</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}