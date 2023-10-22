"use client"
import { AssetsTable, RequestTransferForm, SearchAssets, TransferAdminForm } from "@/root/components";
export default function RequestTransfer() {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold  text-center">Registrar Solicitud de Traslados</h2>
            <SearchAssets />
            <div className=" flex flex-col lg:flex-row lg:m-2 lg:p-2">
                <div className=" w-full lg:w-3/5 pr-0 lg:pr-4">
                    {/* RegisterTable ocupa más de la mitad de la pantalla */}
                    <AssetsTable />
                </div>
                <div className="border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300  w-full lg:w-2/5">
                    {/* LowsAdminForm ocupa lo que queda */}
                    <RequestTransferForm />
                </div>
            </div>
        </div>
    );
}