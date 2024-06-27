"use client"
import { useReportStore } from "@/root/zustand";
import { AlertMessage } from "@/root/components";
import toast from "react-hot-toast";
export default function AssetsTableReport() {
    const { reportRegister } = useReportStore((state) => ({ reportRegister: state.reportRegister }))

    const handleLinkClick = (id: string) => {
        id = id.replace(/[, ]/g, "");
        console.log(id)
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            toast.error("No se pudo encontrar el registro")
        }
    };

    return (
        <div className="h-full">
            <div className="max-h-96  border border-gray-300 my-2 w-full rounded-lg relative overflow-x-auto">
                {reportRegister.length === 0 ? (
                    <AlertMessage message="No hay Activos en esta ubicación!." />
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
                        <tbody>
                            {reportRegister.map((asset: registerToReport, index: number) => (
                                <tr key={index} id={`${asset.reg_tomo}${asset.reg_folio}${asset.reg_asiento}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-3 py-4 whitespace-nowrap">{`${asset.reg_tomo}, ${asset.reg_folio}, ${asset.reg_asiento}`}</td>
                                    {asset.reg_type == "Register" ? (
                                        <>
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
                                            <td className="px-3 py-4 hidden md:table-cell">{asset.responsible_name}</td>
                                            <td className="px-3 py-4">
                                                <div className="max-w-xs overflow-auto">
                                                    {asset.reg_observation?.split('-').map((obs, idx) => (
                                                        obs.startsWith("B:Ver") || obs.startsWith("T:Ver") ? (
                                                            <button
                                                                key={idx}
                                                                className="text-blue-500 underline mr-2"
                                                                onClick={() => handleLinkClick(obs.split("Ver ")[1])}
                                                            >
                                                                {obs}
                                                            </button>
                                                        ) : (
                                                            <span key={idx} className="mr-2">{obs}</span>
                                                        )
                                                    ))}
                                                </div>
                                            </td>
                                        </>
                                    ) : (
                                        <td className="px-3 py-4 w-full" colSpan={14}>
                                            <div className="overflow-auto">
                                                {asset.reg_observation}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}