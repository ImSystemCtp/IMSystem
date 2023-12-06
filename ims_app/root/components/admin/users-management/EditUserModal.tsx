"use client";
import React from 'react';
import Modal from 'react-modal';
import { EnumUserRole, ims_users } from '@prisma/client';
import { Form, Formik } from 'formik';
import { editUsersMessage } from '@/schemas';
import { CustomInput, CustomSelect } from '@/root/components';

import { useUserStore } from '@/root/zustand';
import toast from 'react-hot-toast';
type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    user: ims_users;
};
interface FormValues {
    usu_name: string;
    usu_surnames: string;
    usu_email: string;
    usu_role: EnumUserRole;
}
export default function EditUserModal({
    isOpen,
    onRequestClose,
    user,
}: ModalProps) {
    const {updateUser} = useUserStore();
    const initialValues = {
        usu_name: user.usu_name,
        usu_surnames: user.usu_surnames,
        usu_email: user.usu_email,
        usu_role: user.usu_role,
    } as FormValues;
    const handleSubmit = async (values: FormValues) => {
        user.usu_name = values.usu_name;
        user.usu_surnames = values.usu_surnames;
        user.usu_email = values.usu_email;
        user.usu_role = values.usu_role;
        toast.promise(updateUser(user), {
            loading: "Editando Usuario...",
            success: "Usuario editado exitosamente!",
            error: "No se pudo editar el usuario",
        });
        onRequestClose();
    }
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
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <div className="justify-center items-center">
                <div className="flex flex-column">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={editUsersMessage}
                        onSubmit={handleSubmit}
                    >
                        <Form className="w-full ">
                            <div>
                                <h2 className="text-2xl font-bold  text-center">
                                    Editar Usuario
                                </h2>
                            </div>
                            <div className=" justify-center w-full flex flex-col sm:flex-row lg:p-4 lg:px-10">
                                <div className="w-full h-full p-2">
                                    <CustomInput
                                        label="Nombre:"
                                        name="usu_name"
                                        inputType="text"
                                    />
                                    <CustomInput
                                        label="Apellidos:"
                                        name="usu_surnames"
                                        inputType="text"
                                    />
                                </div>
                                <div className="w-full p-2">
                                    <CustomInput label="Email:" name="usu_email" inputType="text" />
                                    <CustomSelect label="Role:" name="usu_role">
                                        <option value="">Seleccione una ubicación</option>
                                        <option value={EnumUserRole.Admin}>Administrador</option>
                                        <option value={EnumUserRole.User}>Usuario</option>
                                        <option value={EnumUserRole.Inactive}>Inactivo</option>
                                    </CustomSelect>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button
                                    className=" m-2 p-2 bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded"
                                >
                                    Editar Usuario
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div >
        </Modal >
    );
}
