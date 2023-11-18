"use client"
import { LoadingComponent } from "@/root/components";
import { useRequestPending } from "@/root/hooks";
import { useLoadingStore, useRequestStore } from "@/root/zustand";
import { ims_request } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function RequestManagement() {
    useRequestPending();
    const { requestPending, setRequestSelected, isLoadRequest } = useRequestStore();

    const handleRequestSelect = (request: ims_request) => () => {
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
                    {isLoadRequest ? (
                        <LoadingComponent />
                    ) : requestPending.length === 0 ? (
                        <div className="flex items-center justify-center bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                            <div>
                                No hay solicitudes pendientes.
                            </div>
                        </div>
                    ) : ((
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
                                            <span className={`px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full`}>
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
                                ))
                                }
                            </tbody>
                        </table>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

