"use client";
import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { EnumDetailState, EnumReqState, ims_assets,ims_details_asset,ims_register,ims_request } from '@prisma/client';
import { useDetailsRequestStore, useRegisterStore, useRequestStore } from '@/root/zustand';
import toast from 'react-hot-toast';
import { registerGood } from '@/root/types';
type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    option: string;
    requestSelected: ims_request;
    assetsCheck: ims_assets[];
    detailsCheck: ims_details_asset[];
};
export default function RequestManagementModal({ isOpen, onRequestClose,option,assetsCheck,detailsCheck,requestSelected }: ModalProps) {
    const { addRegister } = useRegisterStore();
    const { updateDetailsRequestState} = useDetailsRequestStore();
    const handleRequest = async () =>  {
        if (option == 'Aceptar'){
            const register = {
                reg_type: requestSelected.req_type,
                reg_date: new Date(),
                reg_observation: requestSelected.req_description,
                reg_usu_id: requestSelected.req_usu_id,
                reg_inst_id: 1,
            } as  ims_register
            const newRegister = {
                register,
                assets: assetsCheck,
            } as registerGood
            await toast.promise(addRegister(newRegister), {
                loading: "Registrando activos...",
                success: "Activos registrados exitosamente!",
                error: "No se pudo registrar los activos",
            });
            const updatedDetails = detailsCheck.map(detail => ({ ...detail, data_state: EnumDetailState.Accepted }));
            toast.promise(updateDetailsRequestState(updatedDetails), {
                loading: "Actualizando estado de detalles de solicitud...",
                success: "Estado de detalles de solicitud actualizado exitosamente!",
                error: "No se pudo actualizar el estado de el detalles de solicitud",
            });
        }else{
            const updatedDetails = detailsCheck.map(detail => ({ ...detail, data_state: EnumDetailState.Denied }));
            toast.promise(updateDetailsRequestState(updatedDetails), {
                loading: "Actualizando estado de detalles de solicitud...",
                success: "Estado de detalles de solicitud actualizado exitosamente!",
                error: "No se pudo actualizar el estado de el detalles de solicitud",
            });
        }
        onRequestClose
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
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-agregar-detalle bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={handleRequest}
            >
                Estoy de acuerdo
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-agregar-detalle bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={onRequestClose}
            >
                Cancelar
            </motion.button>
            </div>
        </Modal>
    );
}