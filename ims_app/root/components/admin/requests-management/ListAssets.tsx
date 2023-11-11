"use client";
import { LoadingComponent, RequestManagementModal } from "@/root/components";
import {
    useDetailsRequestStore,
    useRequestStore,
    useAssetStore,
} from "@/root/zustand";
import { ims_assets, ims_details_asset } from "@prisma/client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function ListAssets() {
    const { requestSelected } = useRequestStore();
    const [option, setOption] = useState("");
    const [showModal, setShowModal] = useState(false);
    const { getDetailsRequestByRequestId, addDetailsCheck, detailsCheck, detailsByIdRequest } = useDetailsRequestStore();
    const { getAssetsByRequestId, assetsByRequestId } = useAssetStore();
    const handleCloseModal = () => { setShowModal(false); };
    const handleOpenModal = () => { setShowModal(true); };
    useEffect(() => {
        getDetailsRequestByRequestId(String(requestSelected?.req_id));
        getAssetsByRequestId(String(requestSelected?.req_id));
    }, [getDetailsRequestByRequestId, requestSelected, getAssetsByRequestId]);
    return (
        <div>
            <h2 className="text-center">Lista de Bienes</h2>
            <div className="justify-center items-center flex flex-col">
                <div className="mb-4">
                    <textarea
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Observación de Baja..."
                        value={requestSelected.req_description}
                    />
                </div>
                <div className="w-full overflow-x-auto border border-gray-300 rounded-lg">
                    {detailsByIdRequest.length === 0 ? (
                        <div className="flex items-center justify-center">
                            <LoadingComponent />
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Numero Placa</th>
                                    <th className="px-4 py-3">Marca</th>
                                    <th className="px-4 py-3">Estado</th>
                                    <th className="px-4 py-3">Ubicación</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {detailsByIdRequest.map((detail, index) => {
                                    const assetDetail = assetsByRequestId.filter(asset => asset.assets_no === detail.deta_assets_no)[0];
                                    return (
                                        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover-bg-gray-900 text-gray-700 dark:text-gray-400" key={index}>
                                            <td className="px-4 py-3 text-sm">{assetDetail?.assets_no}</td>
                                            <td className="px-4 py-3 text-sm">{assetDetail?.assets_brand}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div>
                                                        <p className="font-semibold">{detail.deta_description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">{assetDetail?.assets_curr_location}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-4 space-y-2 md:space-y-0 md:space-x-2 justify-center items-center">
                <div className="w-full md:w-1/2 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            handleOpenModal();
                            setOption('Rechazar');
                        }}
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                        type="submit"
                    >
                        Rechazar
                    </motion.button>
                </div>
                <div className="w-full md:w-1/2 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            handleOpenModal();
                            setOption('Aceptar');
                        }}
                        className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                        type="submit"
                    >
                        Aceptar
                    </motion.button>
                </div>
            </div>
            <RequestManagementModal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                option={option}
                assetsByRequestId={assetsByRequestId}
                detailsCheck={detailsCheck}
                requestSelected={requestSelected}
            />
        </div>
    );
}
