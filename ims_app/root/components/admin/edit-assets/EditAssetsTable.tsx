import { ims_assets } from "@prisma/client";
import EditAssetsItem from "./EditAssetsItem";
import { useAssetStore } from "@/root/zustand";
import { AlertMessage } from "@/root/components";
export default function EditAssetsTable() {
    const { assetToEdit } = useAssetStore((state) => ({ assetToEdit: state.assetsBySearch }));
    return (
       <main> <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700  uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Número de Placa
                    </th>
                    <th scope="col" className="hidden md:table-cell px-6 py-3">
                        Marca
                    </th>
                    <th scope="col" className="hidden md:table-cell px-6 py-3">
                        Modelo
                    </th>
                    <th scope="col" className="hidden md:table-cell px-6 py-3">
                        Descripcion
                    </th>
                    <th scope="col" className="hidden md:table-cell px-6 py-3">
                        Estado
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Número de Factura
                    </th>
                </tr>
            </thead>
            <tbody className=" overflow-y-scroll w-full" >
                {assetToEdit.length === 0 ? (
                    <div></div>
                ) : (
                    assetToEdit.map((asset: ims_assets, index) => (asset !== null &&
                        <EditAssetsItem key={index} asset={asset} />
                    )))}
            </tbody>
       
        </table>
        {assetToEdit.length === 0 ? (
                <AlertMessage message="No se encontraron activos" />
            ) : (
                <div></div>
            )}
        </main>
    );
}