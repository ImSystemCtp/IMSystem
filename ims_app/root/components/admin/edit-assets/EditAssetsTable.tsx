import { ims_assets } from "@prisma/client";
import EditAssetsItem from "./EditAssetsItem";
import { useAssetStore } from "@/root/zustand";
import EditAssetsForm from "./edit-assets-form/EditAssetsForm";
import { useState } from "react";
export default function EditAssetsTable() {
    const { assetToEdit } = useAssetStore((state) => ({ assetToEdit: state.editAssets }));
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => { setShowModal(false); };
    return (
        <div>
        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                    <th scope="col" className="px-6 py-3">
                        Editar
                    </th>
                </tr>
            </thead>
            <tbody className=" overflow-y-scroll w-full" >
                {
                    assetToEdit.map((asset: ims_assets, index) => (asset !== null &&
                        <EditAssetsItem key={index} asset={asset} />
                    ))
                }
            </tbody>
        </table>
        <EditAssetsForm isOpen={showModal} onRequestClose={handleCloseModal}  />
        </div>
    );
}