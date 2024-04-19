"use client"

import { SearchAssets } from "@/root/components";
import { EditAssetsTable } from ".";

export default function EditAssets() {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold dark:text-white  text-center">Editar Activo</h2>
            <SearchAssets />
            <div className=" flex flex-col lg:flex-row lg:m-2 lg:p-2">
                <div className="max-h-96  border border-gray-300 my-2 w-full rounded-lg relative overflow-x-auto">
                    <EditAssetsTable />
                </div>
            </div>
        </div>


    );
}
