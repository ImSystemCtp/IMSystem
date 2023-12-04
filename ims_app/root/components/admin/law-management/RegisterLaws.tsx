"use client";
import React, { useEffect, useState } from "react";

import { ims_laws } from "@prisma/client";
import { useLawStore } from "@/root/zustand";
import toast from "react-hot-toast";
export default function RegisterLaw() {
    const { selectLawToEdit, createLaw, lawToEdit, updateLaw } = useLawStore();
    const [lawName, setLawName] = useState(
        lawToEdit ? lawToEdit.law_name : ""
    );
    const [lawDescription, setLawDescription] = useState(
        lawToEdit ? lawToEdit.law_description : ""
    );
    useEffect(() => {
        if (lawToEdit) {
            setLawName(lawToEdit.law_name);
            setLawDescription(lawToEdit.law_description);
        } else {
            setLawName("");
            setLawDescription("");
        }
    }, [lawToEdit]);
    const [errorName, setErrorName] = useState<string | null>(null);
    const [errorDescription, setErrorDescription] = useState<string | null>(null);
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLawName(event.target.value);
        setErrorName(null);
    };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLawDescription(event.target.value);
        setErrorDescription(null);
    };
    const handleSubmit = async () => {
        if (!lawName.trim()) {
            setErrorName("Por favor, complete el campo.");
        } else if (!lawDescription?.trim()) {
            setErrorDescription("Por favor, complete el campo.");
        } else {
            if(lawToEdit){
                toast.promise(updateLaw({ law_id: lawToEdit.law_id, law_name: lawName,law_description: lawDescription } as ims_laws), {
                    loading: "Editando ley...",
                    success: "Ley editada exitosamente!",
                    error: "No se pudo editar la ley",
                });
            }
            else{
                toast.promise( createLaw({ law_name: lawName,law_description: lawDescription } as ims_laws), {
                    loading: "Registrando ley...",
                    success: "Ley registrada exitosamente!",
                    error: "No se pudo registrar la ley",
                });
            }
        }
    };
    const handleCancel = () => {
        setLawName("");
        setLawDescription("");
        selectLawToEdit({ law_id: 0, law_name: "", law_description: null as string | null });
    };
    return (
        <main className=" w-full">
            <div className="flex flex-col justify-center items-center">
                <div className="border-2 rounded-lg border-slate-300 shadow-sm shadow-slate-300 p-4 w-3/4">
                    <h2 className="lg:w-full lg:m-4 text-center text-2xl font-bold m-4 pb-12">
                        Registrar Leyes
                    </h2>
                    <div className="w-full flex flex-col mt-4 mx-auto">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Ley:</label>
                            <input
                                type="text"
                                value={lawName}
                                onChange={handleNameChange}
                                placeholder="Ingrese el Nombre de la ubicacion"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        {errorName && <p className="text-red-500">{errorName}</p>}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion de Ley:</label>
                            <input
                                type="text"
                                value={lawDescription?lawDescription:""}
                                onChange={handleDescriptionChange}
                                placeholder="Ingrese la descripcion de la ubicacion(opcional)"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errorDescription && <p className="text-red-500">{errorDescription}</p>}
                        </div>
                    </div>
                    <div className="w-full mt-4 flex justify-center">
                        <button
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={handleCancel}
                        >
                            Cancelar
                        </button>
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={handleSubmit}
                        >
                            {lawToEdit ? "Guardar Cambios" : "Registrar"}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}