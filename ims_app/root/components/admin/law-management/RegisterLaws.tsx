"use client";
import { useEffect, useState } from "react";
import { ims_laws } from "@prisma/client";
import { useLawStore } from "@/root/zustand";
import toast from "react-hot-toast";
import { useAuthorizedAdmin } from "@/root/hooks";
import { GenericRegisterForm, LoadingComponent } from "@/root/components";
export default function RegisterLaw() {
    const { lawToEdit } = useLawStore((state) => ({ lawToEdit: state.lawToEdit }));
    const { selectLawToEdit, createLaw, updateLaw } = useLawStore();
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
            if (lawToEdit) {
                toast.promise(updateLaw({ law_id: lawToEdit.law_id, law_name: lawName, law_description: lawDescription } as ims_laws), {
                    loading: "Editando ley...",
                    success: "Ley editada exitosamente!",
                    error: "No se pudo editar la ley",
                });
            }
            else {
                toast.promise(createLaw({ law_name: lawName, law_description: lawDescription } as ims_laws), {
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
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent />
    return (
        <>
            <GenericRegisterForm title={"Registrar Leyes"}
                buttonText={lawToEdit ? "Guardar Cambios" : "Registrar"}
                errorDescription={errorDescription}
                inputError={errorName}
                inputPlaceHolder="Ingrese el Nombre de la Ley"
                inputValue={lawName}
                inputValueLaw={lawDescription}
                handleCancel={handleCancel}
                handleNameChange={handleNameChange}
                handleDescriptionChange={handleDescriptionChange}
                handleSubmit={handleSubmit}
                isLawForm={true} />
        </>
    );
}