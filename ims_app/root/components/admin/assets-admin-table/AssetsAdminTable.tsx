"use client"
import { useAssetCheckStore, useAssetStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import {  useRef } from "react";
import ItemAsset from "./ItemAsset";
import { AlertMessage } from "@/root/components";
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
                <AlertMessage message="No hay Activos en esta ubicación!." />
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