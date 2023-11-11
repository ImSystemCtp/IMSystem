"use client"
import { AssetModal } from "@/root/components";
import { useAssetStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
export default function AssetsTable() {
    const { assetsByLocationInfo, seeMore } = useAssetStore();
    const [assetSelect, setAssetSelect] = useState<ims_assets | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [showModal, setShowModal] = useState(false);
    const handleAccept = (asset: ims_assets) => {
        setAssetSelect(asset);
        setShowModal(true);
    }
    const handleCloseModal = () => {setShowModal(false);};
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
            <div ref={containerRef} className="max-h-80 border border-gray-300 my-2 w-full rounded-lg relative overflow-x-auto">
                {assetsByLocationInfo.length === 0 ? (
                    <div className="flex items-center justify-center bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                        No hay Activos en esta ubicacion!.
                    </div>
                </div>
                ) : (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Numero de Placa
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Descripción del Bien
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Registro en
                                </th>
                                <th scope="col" className="hidden md:table-cell px-6 py-3">
                                    Serie
                                </th>
                                <th scope="col" className="hidden md:table-cell px-6 py-3">
                                    Marca
                                </th>
                                <th scope="col" className="hidden md:table-cell px-6 py-3">
                                    Modelo
                                </th>
                                <th scope="col" className="hidden md:table-cell px-6 py-3">
                                    Estado
                                </th>
                                <th scope="col" className="hidden md:table-cell px-6 py-3">
                                    Número de Factura
                                </th>
                                <th scope="col" className="hidden md:table-cell px-6 py-3">
                                    Valor de adquisición
                                </th>
                                <th scope="col" className="hidden md:table-cell px-6 py-3">
                                    Seleccionar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {assetsByLocationInfo.map((asset: ims_assets, index: number) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {asset.assets_no}
                                    </td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_description}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.invoice_date}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_series}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_brand}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_model}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_state}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_invoice_number}</td>
                                    <td className="px-3 py-4 hidden md:table-cell">{asset.assets_acquisition_value}</td>
                                    <td className="px-4 py-3 text-sm">
                                            <button
                                                onClick={() => handleAccept(asset)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Aceptar
                                            </button>
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <AssetModal
                        isOpen={showModal}
                        onRequestClose={handleCloseModal}
                        asset={assetSelect? assetSelect : {} as ims_assets}
                    />
            </div>
        </div>
    );

}

