"use client"
import { AlertMessage, RequestAssetsModal } from "@/root/components";
import { useAssetCheckStore, useAssetStore, useDetailsRequestStore } from "@/root/zustand";
import {  ims_assets, ims_details_asset } from "@prisma/client";
import {  useRef, useState } from "react";
import { toast } from "react-hot-toast";
export default function AssetsUserTable() {
    const { assetsBySearch  } = useAssetStore((state)=> ({ assetsBySearch: state.assetsBySearch, }));
    const {assetsCheck } = useAssetCheckStore((state)=> ({ assetsCheck: state.assetsCheck }));
    const { details } = useDetailsRequestStore((state)=>({details: state.details}));
    const { setDetailRequest } = useDetailsRequestStore();
    const {  deleteAssetsCheck, addAssetsCheck,   } = useAssetCheckStore();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [assetSelect, setAssetSelect] = useState<ims_assets>({} as ims_assets);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => { setShowModal(false); };
    const handleOpenModal = (asset: ims_assets) => { setAssetSelect(asset); setShowModal(true); };
    const newDetailAsset = async (asset: ims_assets, detail: string) => {
        if (details.some((d) => d.deta_assets_no === asset.assets_no)) {
            toast.error("Ya se ha agregado un detalle para este activo")
        } else {
            const request = { deta_assets_no: asset.assets_no, deta_description: detail, } as ims_details_asset;
            await setDetailRequest(request)
        }
    }
    function isChecked(asset: ims_assets): boolean { return assetsCheck.includes(asset); }
    return (
        <div>
            <div ref={containerRef} className="max-h-80 border border-gray-300 my-2 w-full rounded-lg relative overflow-x-auto">
                {assetsBySearch.length === 0 ? (
                    <AlertMessage message="No hay Activos en esta ubicación!." />
                ) : (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3"> Número de Placa </th>
                                <th scope="col" className="hidden md:table-cell  px-6 py-3">
                                    Marca
                                </th>
                                <th scope="col" className="px-6 py-3 align-middle flex items-center justify-center ">
                                    Seleccionar
                                </th>
                                <th scope="col" className=" "> Añadir detalle </th>
                            </tr>
                        </thead>
                        <tbody>
                            {assetsBySearch?.map((asset: ims_assets, index: number) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    > {asset.assets_no}
                                    </td>
                                    <td className="px-6 py-4 hidden md:table-cell  ">{asset.assets_brand}</td>
                                    <td className="px-6 py-4 ">
                                        <div className="flex items-center justify-center mb-4" onClick={() => {
                                            const checkbox = document.getElementById(`checkbox-${asset.assets_no}`) as HTMLInputElement;
                                            if (checkbox) {
                                                if (!checkbox.checked) {
                                                    deleteAssetsCheck(asset);
                                                } else { addAssetsCheck(asset);  }
                                            }
                                        }}>
                                            <input id={`checkbox-${asset.assets_no}`} type="checkbox"  checked={assetsCheck.includes(asset)} value=""
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        {isChecked(asset) && (
                                            <button className="rounded-lg p-2 bg-slate-500 hover:bg-slate-400 text-white" onClick={() => handleOpenModal(asset)}>
                                                Agregar Detalle
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <RequestAssetsModal
                    isOpen={showModal}
                    onRequestClose={handleCloseModal}
                    asset={assetSelect}
                    newDetailAsset={newDetailAsset}
                />
            </div>
        </div>
    )
}