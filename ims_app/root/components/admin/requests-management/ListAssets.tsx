"use client";
import { LoadingComponent, RequestManagementModal } from "@/root/components";
import { generatePDF } from "@/root/reports";
import {
    useRequestStore, useReportStore,
} from "@/root/zustand";

import { useState } from "react";
export default function ListAssets() {
    const { reportRequest } = useReportStore((state) => ({ reportRequest: state.reportRequest }));
    const { requestSelected } = useRequestStore((state) => ({ requestSelected: state.requestSelected }));
    const [option, setOption] = useState("");
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => { setShowModal(false); };
    const handleOpenModal = () => { setShowModal(true); };
    const [observation, setObservation] = useState(requestSelected.req_description || '');
    const handleObservationChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setObservation(event.target.value);
    };
    const handlePDF = () => {
        generatePDF(reportRequest, requestSelected);
    }
    return (
        <div>
            <h2 className="text-gray-500 text-2xl font-bold text-center">Lista de Bienes</h2>
            <div className="justify-center items-center flex flex-col">
                <div className="flex justify-center items-center p-2 m-2">
                    <div>
                        <textarea
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Observación de Baja..."
                            value={observation}
                            onChange={handleObservationChange}
                        />
                    </div>
                    <div className="mx-4 ">
                        <button className="bg-slate-500 hover:bg-slate-400  p-2 m-2 rounded-lg text-white" onClick={handlePDF}>
                            Descargar PDF
                        </button>
                    </div>
                </div>
                <div className="w-full max-h-96 overflow-x-auto  border border-gray-300 rounded-lg">
                    {reportRequest.length === 0 ? (
                        <div className="flex items-center justify-center">
                            <LoadingComponent />
                        </div>
                    ) : (
                        <table className="w-full max-h-96 overflow-x-auto">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Número Placa</th>
                                    <th className="px-4 py-3">Marca</th>
                                    <th className="px-4 py-3">Estado</th>
                                    <th className="px-4 py-3">Observacion</th>
                                    <th className="px-4 py-3">Ubicación Actual</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {reportRequest.map((detail: requestToReport, index) => {
                                    return (
                                        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover-bg-gray-900 text-gray-700 dark:text-gray-400" key={index}>
                                            <td className="px-4 py-3 text-sm">{detail.assets_no}</td>
                                            <td className="px-4 py-3 text-sm">{detail.assets_brand}</td>
                                            <td className="px-4 py-3 text-sm">{detail.assets_state}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div>
                                                        <p className="font-semibold">{detail.deta_description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">{detail.location_name}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <div className="flex flex-row  mt-4 space-y-2 md:space-y-0 md:space-x-2 justify-center items-center">
                <div className="w-full md:w-1/2 text-center">
                    <button
                        onClick={() => {
                            handleOpenModal();
                            setOption('Rechazar');
                        }}
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                        type="submit"
                    >
                        Rechazar
                    </button>
                </div>
                <div className="w-full md:w-1/2 text-center">
                    <button
                        onClick={() => {
                            handleOpenModal();
                            setOption('Aceptar');
                        }}
                        className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                        type="submit"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
            <RequestManagementModal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                option={option}
                requestSelected={requestSelected}
                reportRequest={reportRequest}
            />
        </div>
    );
}