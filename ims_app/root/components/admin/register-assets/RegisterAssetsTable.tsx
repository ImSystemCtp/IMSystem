"use client"
import { useAuth } from "@/root/hooks";
import { useAuthStore, useRegisAssetStore, useRegisterAssetStore } from "@/root/zustand";
import { EnumRegisterType, ims_assets, ims_register } from "@prisma/client";

import toast from "react-hot-toast";
export default function RegisterAssetsTable() {
    useAuth();
    const { userAuth } = useAuthStore((state) => ({ userAuth: state.userAuth }));
    const { addRegisterAssets } = useRegisAssetStore();
    const { assets  } = useRegisterAssetStore((state) => ({
        assets: state.assets
        }));
    const { clearAssets,removeAssets,updateAssetsNoPlate,putNoPlate } = useRegisterAssetStore();

    const register = {
        reg_type: EnumRegisterType.Register,
        reg_date: new Date(),
        reg_usu_id: userAuth.usu_id,
        reg_observation: "",
        reg_inst_id: 1,
    } as ims_register
    const handleRegisterAssets = async () => {
        await toast.promise(addRegisterAssets(register, assets), {
            loading: "Registrando activos...",
            success: "Activos registrados exitosamente!",
            error: "No se pudo registrar los activos",
        }).then(() => {
            clearAssets();
            putNoPlate();
        })
    }
    const handleDelete = (asset:ims_assets) => {
        removeAssets(asset)
    }
    return (
        <div className="md:w-1/3 rounded-lg  border border-gray-300 p-4 m-2  ">
            <h2 className="text-2xl dark:text-white font-bold  text-center ">
                Lista de Bienes a Registrar
            </h2>
            <div className="w-full max-h-52 md:max-h-96 overflow-hidden rounded-lg shadow-xs overflow-y-auto">
                <div className="w-full overflow-x-auto">
                    <table className="max-h-96 w-full table-fixed overflow-y-auto">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">Número de Placa</th>
                                <th className="px-4 py-3">Nombre</th>
                                <th className="px-4 py-3">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className=" bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            {assets.map((asset, index) => (
                                <tr key={index} className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div>
                                                <p className="font-semibold">{asset.assets_no}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">{asset.assets_model}</td>
                                    <td className="px-4 py-3 text-sm">
                                            <button
                                                onClick={() => handleDelete(asset)}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full flex justify-center items-center ">
                <button
                    onClick={handleRegisterAssets}
                    className="m-2 p-2 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Registrar Bienes
                </button>
            </div>
        </div>
    )
}