"use client";
import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
};

export default function RequestAssetsModal({
    isOpen,
    onRequestClose,
}: ModalProps) {
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

            <h2>Información del Activo: mañana</h2>
            <p>Descripción: mañana</p>
            <p>Marca: mañana</p>
            <p>Modelo: mañana</p>
            {/* Agrega más campos aquí para mostrar más detalles del activo */}

            <h2>Agregar Detalle de Solicitud:</h2>
            <input
                type="text"
                placeholder="Detalle de la solicitud"
                value="mañana"
            />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-agregar-detalle bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={() => {
                    // Aquí puedes manejar la lógica para agregar el detalle a la solicitud
                    // Puedes usar 'detail' y 'asset' para guardar la información en tu base de datos
                    // También puedes cerrar el modal si es necesario
                }}
            >
                Agregar Detalle
            </motion.button>
        </Modal>
    );
}
