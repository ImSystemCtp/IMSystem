"use client"

import { SearchAssets } from "@/root/components";
import { EditAssetsTable } from ".";

export default function EditAssets() {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold dark:text-white  text-center">Editar Activo</h2>
            <SearchAssets />
            <div className=" flex flex-col lg:flex-row lg:m-2 lg:p-2">
                <div className=" w-full ">
                    <EditAssetsTable />
                </div>
            </div>
        </div>


    );
}
