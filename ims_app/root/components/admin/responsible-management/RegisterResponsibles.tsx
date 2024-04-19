"use client";
import { useEffect, useState } from "react";
import { ims_responsible } from "@prisma/client";
import { useResponsibleStore } from "@/root/zustand";
import toast from "react-hot-toast";
import { GenericRegisterForm } from "@/root/components";
export default function RegisterResponsibles() {
    const {responsibleToEdit } = useResponsibleStore((state) => ({ responsibleToEdit: state.responsibleToEdit }));
    const { selectResponsibleToEdit,createResponsible,updateResponsible } = useResponsibleStore();
    const [responsibleName, setResponsibleName] = useState( responsibleToEdit ? responsibleToEdit.responsible_name : "" );
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
            if(responsibleToEdit?.responsible_id){
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
    const handleCancel = () => { setResponsibleName(""); selectResponsibleToEdit({ responsible_id: 0, responsible_name: "" }); };
    return (
        <>
        <GenericRegisterForm title={"Registrar Funcionarios Responsables"}
        buttonText={responsibleToEdit ? "Guardar Cambios" : "Registrar"}
        errorDescription=""
        inputError={errorName}
        inputPlaceHolder="Ingrese el Nombre del Funcionario Responsable"
        inputValue={responsibleName}
        inputValueLaw=""
        handleCancel={handleCancel}
        handleNameChange={handleNameChange}
        handleDescriptionChange={() => {}}
        handleSubmit={handleSubmit}
        isLawForm={false}/>
        </>);
}