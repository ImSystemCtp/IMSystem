"use client"
import { useAssetStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
export default function RegisterTable() {
    const { assetsByLocation, deleteAssetsCheck, addAssetsCheck, seeMore, idLocation } = useAssetStore();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [assetCheck, setAssetCheck] = useState<ims_assets[]>([])
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
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Numero de Placa
                            </th>
                            <th scope="col" className="hidden md:table-cell  px-6 py-3">
                                Marca
                            </th>
                            <th scope="col" className="px-6 py-3 align-middle flex items-center justify-center ">
                                Seleccionar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {assetsByLocation?.map((asset: ims_assets, index: number) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {asset.assets_no}
                                </td>
                                <td className="px-6 py-4 hidden md:table-cell  ">{asset.assets_brand}</td>
                                <td className="px-6 py-4 hidden md:table-cell">
                                    <div className="flex items-center justify-center mb-4" onClick={() => {
                                        const checkbox = document.getElementById(`checkbox-${asset.assets_no}`) as HTMLInputElement;
                                        if (checkbox) {
                                            if (!checkbox.checked) {
                                                deleteAssetsCheck(asset);
                                            } else {
                                                addAssetsCheck(asset);
                                            }
                                        }
                                    }}>
                                        <input
                                            id={`checkbox-${asset.assets_no}`}
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                    </div>

                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}