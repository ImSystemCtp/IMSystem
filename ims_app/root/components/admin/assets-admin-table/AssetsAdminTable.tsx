"use client"
import { useAssetCheckStore, useAssetStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import ItemAsset from "./ItemAsset";
export default function AssetsAdminTable() {
    const { assetsBySearch } = useAssetStore((state) => ({
        assetsBySearch: state.assetsBySearch
    }));
    const {assetsCheck } = useAssetCheckStore();
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div>
            <div ref={containerRef} className=" overflow-hidden overflow-y-auto border border-gray-300 my-2 w-full rounded-lg relative " style={{height: "65vh"}}>
                {assetsBySearch.length === 0 ? (
                    <div className="flex items-center justify-center bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                        No hay Activos en esta ubicacion!.
                    </div>
                </div>
                ) : (
                    <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700  uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                Número de Placa
                                </th>
                                <th scope="col" className="hidden md:table-cell px-6 py-3">
                                    Marca
                                </th>
                                <th scope="col" className="px-6 py-3 align-middle flex items-center justify-center">
                                    Seleccionar
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" overflow-y-scroll w-full" >
                            {
                            assetsCheck.map((asset: ims_assets) => (
                                    <ItemAsset key={asset.assets_no} asset={asset} />
                            ))}
                            {
                            assetsBySearch.map((asset: ims_assets) => (
                                assetsCheck.includes(asset) ? (
                                    ""
                                ) : (
                                    <ItemAsset key={asset.assets_no} asset={asset} />
                                )
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}