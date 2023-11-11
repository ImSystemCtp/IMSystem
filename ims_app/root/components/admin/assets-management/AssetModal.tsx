"use client";
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { ims_assets } from '@prisma/client';
import { useLawStore, useLocationStore, useRegisterStore } from '@/root/zustand';
type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    asset: ims_assets;
};
// ... (importaciones y código previo)

export default function AssetModal({
    isOpen,
    onRequestClose,
    asset,
}: ModalProps) {
    const { getLocationById, location } = useLocationStore();
    const { getLawById, law } = useLawStore();
    const { registerByAssetId, registerAssetId } = useRegisterStore();

    useEffect(() => {
        async function checkAssetsLocationChanges() {
            if (isOpen && asset !==null && asset.assets_curr_location !== null) {
                await getLawById(asset.assets_curr_location);
                await getLocationById(asset.assets_curr_location);
                await registerByAssetId(asset.assets_no);
            }
        }
        checkAssetsLocationChanges();
    }, [asset, getLocationById, getLawById, registerByAssetId,, isOpen]);
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Seleccionar Rol"
            className="w-full modal-content bg-white rounded-md p-8 max-w-screen-md max-h-3xl overflow-y-auto relative"
            overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
            <button
                onClick={onRequestClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Información del Activo:</h2>
            <p className="mb-2">Ubicación: {location?.location_name}</p>
            <p className="mb-6">Ley: {law?.law_name}</p>
            <h3 className="text-lg font-bold mb-2">Registros Asociados:</h3>
            <ul className='w-full max-h-64 overflow-hidden rounded-lg shadow-xs overflow-y-auto '>
                {registerAssetId.map((register) => (
                    <li key={register.reg_id} className="mb-4 border-b pb-2">
                        <p className="mb-1">Tomo: {register.reg_tomo}</p>
                        <p className="mb-1">Folio: {register.reg_folio}</p>
                        <p className="mb-1">Asiento: {register.reg_asiento}</p>
                        <p className="mb-1">Observación: {register.reg_observation}</p>
                        <p className="mb-1">Tipo: {register.reg_type}</p>
                        <p className="mb-1">Fecha de Registro: {register.reg_date}</p>
                    </li>
                ))}
            </ul>
        </Modal>
    );
}
