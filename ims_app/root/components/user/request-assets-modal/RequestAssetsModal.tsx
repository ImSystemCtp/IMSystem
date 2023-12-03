"use client";
import React, { useState } from 'react';
import Modal from 'react-modal';

import { ims_assets } from '@prisma/client';
type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    asset: ims_assets;
    newDetailAsset: (asset: ims_assets, detailAsset: string) => void;
};
export default function RequestAssetsModal({ isOpen, onRequestClose, asset, newDetailAsset }: ModalProps) {
    const [detailAsset, setDetailAsset] = useState("");
    const handleDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDetailAsset(event.target.value);
    };
    const handleSendDetail = () => {
        newDetailAsset(asset, detailAsset);
        onRequestClose
        setDetailAsset("");
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Información del Activo"
            className="modal-content bg-white rounded-md p-8 max-w-90vw max-h-90vh relative"
            overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
            <button
                onClick={onRequestClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className=' flex flex-col'>
                <div className='flex justify-center items-center'>
                <h3 className='text-2xl font-bold  text-center'>Información del Activo</h3>
                </div>
                <div>
                    <div className='flex flex-row'>
                        <p className='font-bold mx-4'>Modelo:</p> <p> {asset.assets_model}</p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='font-bold mx-4'>Ubicacion:</p><p> {asset.assets_curr_location}</p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='font-bold mx-4'>Marca:</p> <p> {asset.assets_brand}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row p-4'>
                <h2>Agregar detalle:</h2>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    type="text"
                    placeholder="Detalle de la solicitud"
                    value={detailAsset}
                    onChange={handleDetailChange}
                />
            </div>
            <div className='flex justify-center items-center'>
            <button
                
                className="btn-agregar-detalle bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={handleSendDetail}
            >
                Agregar Detalle
            </button>
            </div>
        </Modal>
    );
}