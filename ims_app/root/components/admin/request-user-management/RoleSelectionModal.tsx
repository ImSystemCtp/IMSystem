"use client";
import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

type RoleSelectionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    onRoleSelect: (role: 'Usuario' | 'Administrador') => void;
};

export default function RoleSelectionModal({
    isOpen,
    onRequestClose,
    onRoleSelect,
}: RoleSelectionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Seleccionar Rol"
            className="modal-content bg-white rounded-md p-8 max-w-90vw max-h-90vh relative"
            overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        > <button
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
                        stroke-width={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <h2>Por favor, seleccione el rol del usuario:</h2>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-usuario bg-sky-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={() => {
                    onRoleSelect('Usuario');
                    onRequestClose();
                }}
            >
                Usuario
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-administrador bg-sky-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                onClick={() => {
                    onRoleSelect('Administrador');
                    onRequestClose();
                }}
            >
                Administrador
            </motion.button>
        </Modal>
    );
}
