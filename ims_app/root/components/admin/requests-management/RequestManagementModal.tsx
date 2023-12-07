"use client";
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/navigation'
import { EnumReqState, ims_assets, ims_details_asset, ims_register, ims_request } from '@prisma/client';
import { useRegisterStore, useRequestStore } from '@/root/zustand';
import toast from 'react-hot-toast';
import { registerAsset } from '@/lib/definitions';
import { transformToImsAssets } from '@/root/functions';
type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    option: string;
    requestSelected: ims_request;
    reportRequest: requestToReport[];
};
export default function RequestManagementModal({ isOpen, onRequestClose, option, reportRequest, requestSelected }: ModalProps) {
    const { addRegister } = useRegisterStore();
    const { updateRequestState } = useRequestStore();
    const imsAssetsList = useRef<ims_assets[]>([]);
    const router = useRouter();
    useEffect(() => {
        async function checkAssetsLocationChanges() {
            if (isOpen) {
                imsAssetsList.current = reportRequest.map(transformToImsAssets);
            }
        }
        checkAssetsLocationChanges();
    }, [isOpen, reportRequest]);
    const handleRequest = async () => {
        if (option == 'Aceptar') {
            const register = {
                reg_type: requestSelected.req_type,
                reg_date: new Date(),
                reg_observation: requestSelected.req_description,
                reg_usu_id: requestSelected.req_usu_id,
                reg_inst_id: 1,
            } as ims_register
            const newRegister = {
                register,
                assets: imsAssetsList.current,
            } as registerAsset
            await toast.promise(addRegister(newRegister), {
                loading: "Registrando activos...",
                success: "Activos registrados exitosamente!",
                error: "No se pudo registrar los activos",
            });
            const newRequest = { ...requestSelected, req_state: EnumReqState.Accepted }
            toast.promise(updateRequestState(newRequest), {
                loading: "Actualizando solicitud...",
                success: "Solicitud actualizada exitosamente!",
                error: "No se pudo actualizar la solicitud",
            });
        } else {
            const newRequest = { ...requestSelected, req_state: EnumReqState.Denied }
            toast.promise(updateRequestState(newRequest), {
                loading: "Actualizando solicitud...",
                success: "Solicitud actualizada exitosamente!",
                error: "No se pudo actualizar la solicitud",
            });
        }
        onRequestClose();
        router.back();
    };
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
                <h3 className='text-2xl font-bold  text-center'>¿Esta seguro que desea {option} la solicitud?</h3>
            </div>
            <div className='flex justify-center items-center'>
                <button
                    className="btn-agregar-detalle bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
                    onClick={onRequestClose}
                >
                    Cancelar
                </button>
                <button
                    className="btn-agregar-detalle bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                    onClick={handleRequest}
                >
                    Estoy de acuerdo!
                </button>
            </div>
        </Modal>
    );
}