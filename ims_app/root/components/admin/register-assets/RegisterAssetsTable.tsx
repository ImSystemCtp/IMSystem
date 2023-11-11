"use client"
import { useAssetStore, useAuthStore, useRegisterAssetStore } from "@/root/zustand";
import { EnumRegisterType, ims_assets, ims_register } from "@prisma/client";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
export default function RegisterAssetsTable() {
    const { userAuth } = useAuthStore();
    const { addRegisterAssets } = useRegisterAssetStore();
    const { assets, clearAssets,removeAssets } = useAssetStore();
    const register = {
        reg_type: EnumRegisterType.Register,
        reg_date: new Date().toISOString(),
        reg_usu_id: 1,
        reg_inst_id: 1,
    } as ims_register
    const handleRegisterAssets = async () => {
        await toast.promise(addRegisterAssets(register, assets), {
            loading: "Registrando activos...",
            success: "Activos registrados exitosamente!",
            error: "No se pudo registrar los activos",
        }).then(() => {
            clearAssets();
        })
    }
    const handleDelete = (asset:ims_assets) => {
        removeAssets(asset)
    }
    return (
        <div className="w-1/3 rounded-lg  border border-gray-300 p-4 m-2  ">
            <h2 className="text-2xl font-bold  text-center ">
                Lista de Bienes a Registrar
            </h2>
            <div className="w-full max-h-96 overflow-hidden rounded-lg shadow-xs overflow-y-auto">
                <div className="w-full overflow-x-auto">
                    <table className="max-h-96 w-full table-fixed overflow-y-auto">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">Numero de Placa</th>
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
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handleDelete(asset)}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Eliminar
                                            </motion.button>
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full flex justify-center items-center ">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRegisterAssets}
                    className="m-2 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Registrar Bienes
                </motion.button>
            </div>
        </div>
    )
}