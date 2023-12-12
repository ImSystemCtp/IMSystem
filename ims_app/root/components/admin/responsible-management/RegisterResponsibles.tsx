"use client";
import { useEffect, useState } from "react";
import { ims_responsible } from "@prisma/client";
import { useResponsibleStore } from "@/root/zustand";
import toast from "react-hot-toast";
export default function RegisterResponsibles() {
    const {responsibleToEdit } = useResponsibleStore((state) => ({ responsibleToEdit: state.responsibleToEdit }));
    const { selectResponsibleToEdit,createResponsible,updateResponsible } = useResponsibleStore();

    const [responsibleName, setResponsibleName] = useState(
        responsibleToEdit ? responsibleToEdit.responsible_name : ""
    );
    useEffect(() => {
        if (responsibleToEdit) {
            setResponsibleName(responsibleToEdit.responsible_name);
        } else {
            setResponsibleName("");
        }
    }, [responsibleToEdit]);
    const [errorName, setErrorName] = useState<string | null>(null);
    const [errorDescription, setErrorDescription] = useState<string | null>(null);
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResponsibleName(event.target.value);
        setErrorName(null);
    };
    const handleSubmit = async () => {
        if (!responsibleName.trim()) {
            setErrorName("Por favor, complete el campo.");
        }  else {
            if(responsibleToEdit){
                toast.promise(updateResponsible({ responsible_id: responsibleToEdit.responsible_id, responsible_name: responsibleName } as ims_responsible), {
                    loading: "Editando Funcionario Responsable...",
                    success: "Funcionario Responsable editado exitosamente!",
                    error: "No se pudo editar el Funcionario Responsable",
                });
            }
            else{
                toast.promise( createResponsible({ responsible_name: responsibleName} as ims_responsible), {
                    loading: "Registrando Funcionario Responsable...",
                    success: "Funcionario Responsable registrado exitosamente!",
                    error: "No se pudo registrar el Funcionario Responsable",
                });
            }
        }
    };
    const handleCancel = () => {
        setResponsibleName("");
        selectResponsibleToEdit({ responsible_id: 0, responsible_name: "" });
    };
    return (
        <main className=" w-full">
            <div className="flex flex-col justify-center items-center">
                <div className="border-2 rounded-lg border-slate-300 shadow-sm shadow-slate-300 p-4 w-3/4">
                    <h2 className="lg:w-full lg:m-4 text-center text-2xl font-bold m-4 pb-12">
                        Registrar Funcionarios Responsables
                    </h2>
                    <div className="w-full flex flex-col mt-4 mx-auto">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Funcionario Responsable:</label>
                            <input
                                type="text"
                                value={responsibleName}
                                onChange={handleNameChange}
                                placeholder="Ingrese el Nombre del Funcionario Responsable"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        {errorName && <p className="text-red-500">{errorName}</p>}
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
                            {responsibleToEdit ? "Guardar Cambios" : "Registrar"}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}