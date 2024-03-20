"use client"
import { useAssetStore } from "@/root";
import {  AssetsFormValues, RegisterAssetsForm, SearchAssetsNo, initialValues } from "@/root/components";
import { useEffect } from "react";
export default function EditAssets() {
    return (
        <>
            <SearchAssetsNo />
            <div className="w-full h-full p-2 flex flex-col break-words bg-gray-100 dark:bg-gray-700 shadow-lg rounded">
                <div className="flex flex-col items-center">
                    <div className="w-full">
                        <header className="w-full">
                            <h3 className="m-4 font-semibold text-2xl text-gray-900 dark:text-gray-50">Editar Activo. </h3>
                        </header>
                    </div>
                </div>
            </div>
        </>
    );
}
