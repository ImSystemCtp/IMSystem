"use client"
import { useRequestStore } from "@/root/zustand";
import { ims_request } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function RequestManagement() {
    const { requestPending,setRequestSelected } = useRequestStore();
    const handleRequestSelect = (request:ims_request) => () => {
        setRequestSelected(request);
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 rounded-md mt-4"
        >
            <h2 className="text-gray-500 text-2xl font-bold text-center">
                Solicitudes Pendientes
            </h2>
            <div className="my-1"></div>
            <div className="bg-sky-400 h-px mb-6"></div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">Usuario</th>
                                <th className="px-4 py-3">Tipo Solicitud</th>
                                <th className="px-4 py-3">Estado</th>
                                <th className="px-4 py-3">Fecha</th>
                                <th className="px-4 py-3">Ver más...</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            {Array.isArray(requestPending) && requestPending.map((request, index) => (
                                <tr
                                    key={index}
                                    className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                                >
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div>
                                                <p className="font-semibold">{request.req_usu_id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">{request.req_type}</td>
                                    <td className="px-4 py-3 text-xs">
                                        <span className={`px-2 py-1 font-semibold leading-tight rounded-full`}>
                                            {request.req_state}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">formato de fecha malo</td>
                                    <td className="px-4 py-3 text-sm">
                                        <Link onClick={handleRequestSelect(request)} href={'/admin/list-assets'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Ver más...
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
}

