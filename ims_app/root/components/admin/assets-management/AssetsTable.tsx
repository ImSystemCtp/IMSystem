"use client"
import { useAssetStore, useReportStore } from "@/root/zustand";
import { useEffect, useRef, useState } from "react";
export default  function AssetsTable() {
    const { seeMore } = useAssetStore();
    const { reportRegister } = useReportStore();
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const container = containerRef.current;
        function handleScroll() {

            if (container) {
                const isAtBottom = container.scrollTop + container.clientHeight === container.scrollHeight;

                if (isAtBottom) {
                    seeMore();
                }
            }
        }

        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [seeMore]);
    return (
        <div>
            <div ref={containerRef} className="max-h-96  border border-gray-300 my-2 w-full rounded-lg relative overflow-x-auto">
                {reportRegister.length === 0 ? (
                    <div className="flex items-center justify-center bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        <div>
                            No hay Activos en esta ubicacion!.
                        </div>
                    </div>
                ) : (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-3 py-3">
                                    Registro en:
                                </th>
                                <th scope="col" className="px-3 py-3">
                                    Número de Patrimonio
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Descripción del Bien
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Registro en
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Serie
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Marca
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Modelo
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Estado
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Ubicación
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Número de Factura
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Valor de adquisición
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Ley que financió
                                </th>
                                <th scope="col" className="hidden md:table-cell px-3 py-3">
                                    Funcionario Responsable (Nombre y cédula)
                                </th>
                                <th scope="col" className=" px-3 py-3">
                                    Observaciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="max-h-80 border border-gray-300 my-2 w-full rounded-lg relative overflow-x-auto">
                            {reportRegister.map((asset: registerToReport, index: number) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-3 py-4">{asset.reg_tomo}{","}{asset.reg_folio}{","}{asset.reg_asiento}</td>
                                    <td className="px-3 py-4 ">{asset.assets_no}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_description}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.invoice_date?.toString().split('T')[0]}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_series}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_brand}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_model}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_state}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.location_name}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_invoice_number}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_acquisition_value}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.law_name}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.usu_name}</td>
                                    <td className="px-3 py-4 ">{asset.reg_observation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );

}