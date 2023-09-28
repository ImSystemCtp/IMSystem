"use client"
import { useAssetStore, useAuthStore, useRegisterAssetStore } from "@/root/zustand";
import { EnumRegisterType,  ims_register } from "@prisma/client";
import { motion } from "framer-motion";
export default function RegisterAssetsTable() {
    const { userAuth } = useAuthStore();
    const {addRegisterAssets} = useRegisterAssetStore();
    const { assets } = useAssetStore();
    const register = {
        reg_type: EnumRegisterType.Register,
        reg_date: new Date(),
        reg_usu_id: 2,
        reg_inst_id: 1,
    } as  ims_register
    const handleRegisterAssets = () => {
        console.log(assets)
        addRegisterAssets(register, assets)
    }
    return (
        <div className="w-1/3 rounded-lg border border-gray-300 p-4 m-2 ">
            <h2 className="text-2xl font-bold  text-center ">
                Bienes Registrados
            </h2>
            <div className="my-1"></div>
            <div className="bg-sky-400 h-px mb-6"></div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">Numero de Placa</th>
                                <th className="px-4 py-3">Nombre</th>
                                <th className="px-4 py-3">Ubicacion</th>
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
                                    <td className="flex justify-center items-center  px-4 py-3 text-xs">
                                        <span className="px-2 py-1 font-semibold leading-tight text-center">
                                            {asset.assets_regis_location}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
            </div>
        </div>
    )
}