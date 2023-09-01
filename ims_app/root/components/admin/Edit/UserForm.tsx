"use client"
import { Formik, Form } from "formik";
import { CustomInput } from "@/root/components";
import { useState } from "react";
import Link from "next/link";
import { UserEditMessage } from "@/schemas";

interface FormValues {
    name: string;
    contact: string;
}

interface EditUserPageCloseProps {
    close: () => void;
}

function UserForm({ close }: EditUserPageCloseProps) {
    const [showEdit, setShowEdit] = useState(true);
    const initialValues: FormValues = {
        name: "",
        contact: "",
    };

    const handleSubmit = async (values: FormValues) => {
        const { name, contact } = values;
    };

    function handleClose() {
        setShowEdit(false);
        close();
    }

    return (
        <>
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-blue-300 bg-opacity-50">
                    <div className="shadow-drop-bottom-right bg-white p-8 rounded-md relative border border-black text-center w-full sm:w-2/4 h-full sm:h-3/5">
                        <button className="absolute top-0 right-0 z-10 w-8 h-8 m-2 text-gray-500 hover:text-black transition-colors duration-200 focus:outline-none" onClick={handleClose}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-black hover:text-red-500">
                                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Formik initialValues={initialValues} validationSchema={UserEditMessage} onSubmit={handleSubmit}>
                            <div className="block rounded-lg items-center justify-center w-full h-full">
                                <h1 className="text-2xl font-bold mb-4">Edit User:</h1>
                                <Form className="w-full flex flex-col justify-center sm:p-20">
                                    <CustomInput label="User:" name="name" inputType="text" placeholder={"sds"} />
                                    <CustomInput label="Telephone:" name="contact" inputType="text" placeholder={""} />
                                    <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                                        <Link href={""} onClick={handleClose} className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 sm:mr-2 sm:mb-0">
                                            Cancelar
                                        </Link>
                                        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                            Editar
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </Formik>
                    </div>
                </div>
        </>
    );
}

export default UserForm;
