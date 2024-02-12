"use client"
import { useRequestPending } from "@/root/hooks";
import { useReportStore, useRequestStore } from "@/root/zustand";
import { ims_request } from "@prisma/client";
import Link from "next/link";
import { AlertMessage } from "../..";
export default function RequestTable() {
    useRequestPending();
    const { getRequestToReport } = useReportStore();
    const { requestPending } = useRequestStore((state) => ({ requestPending: state.requestPending }));
    const { setRequestSelected } = useRequestStore();
    const handleRequestSelect = (request: ims_request) => async () => { await getRequestToReport(request.req_id); await setRequestSelected(request); }
    return (
        <div className="max-h-60 overflow-y-auto">
            {requestPending.length === 0 ? (
                <AlertMessage message="No hay solicitudes pendientes." />
            ) : <table className="w-96 p-2  md:w-full border border-white">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-xs font-semibold tracking-wide text-left  uppercase border-b">
                        <th className="px-2 md:px-4 py-3">Usuario</th>
                        <th className="px-2 md:px-4 py-3">Tipo Solicitud</th>
                        <th className="px-4 py-3 hidden md:table-cell">Estado</th>
                        <th className="px-4 py-3 hidden md:table-cell">Fecha</th>
                        <th className="px-2 md:px-4 py-3 ">Ver más...</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    {requestPending.map((request, index) => (
                        <tr
                            key={index}
                            className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400" >
                            <td className="px-2 md:px-4 py-3">
                                <div className="flex items-center text-sm">
                                    <div>
                                        <p className="font-semibold">{request.req_usu_id}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-2 md:px-4 py-3 text-sm">{(request.req_type === "Low" ? "Baja" : "Traslado")}</td>
                            <td className="px-4 py-3 text-xs hidden md:table-cell">
                                <span className={`px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full`}>
                                    {request.req_state}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-sm hidden md:table-cell">{request.req_date?.toString().split('T')[0]}</td>
                            <td className="px-2 md:px-4 py-3 text-sm ">
                                <Link onClick={handleRequestSelect(request)} href={'/admin/list-assets'} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Ver mas...
                                    </span>
                                </Link>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>}
        </div>
    )
}