import { ims_assets } from "@prisma/client";
import EditAssetsItem from "./EditAssetsItem";
import { useAssetStore } from "@/root/zustand";
import { AlertMessage } from "@/root/components";
import EditAssetsForm from "./edit-assets-form/EditAssetsForm";
import { useState } from "react";
export default function EditAssetsTable() {
    const { assetToEdit } = useAssetStore((state) => ({ assetToEdit: state.assetsBySearch }));
    const {setEditAssets} = useAssetStore((state) => ({ setEditAssets: state.setEditAssets }));
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => { setShowModal(false); };
    const handleChange = (asset:ims_assets) => {
        setShowModal(true);
        setEditAssets(asset)
    };
    return (
        <main> <table className=" max-h-96  border border-gray-300 my-2 w-full rounded-lg relative overflow-x-auto">
            <thead className="text-xs   uppercase bg-gray-100 dark:bg-gray-700 dark:text-white">
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
                    <th scope="col" className="px-6 py-3">
                        Editar
                    </th>
                </tr>
            </thead>
            <tbody className="text-white max-h-80 border border-gray-300 my-2 w-full rounded-lg relative overflow-x-auto" >
                {assetToEdit.length === 0 ? (
                    <div></div>
                ) : (
                    assetToEdit.map((asset: ims_assets, index) => (asset !== null &&
                        <EditAssetsItem key={index} asset={asset} handleChange={handleChange} />
                    )))}
            </tbody>
        </table>
            {assetToEdit.length === 0 ? (
                <AlertMessage message="No se encontraron activos" />
            ) : (
                <div></div>
            )}
            <EditAssetsForm isOpen={showModal} onRequestClose={handleCloseModal} />
        </main>
    );
}