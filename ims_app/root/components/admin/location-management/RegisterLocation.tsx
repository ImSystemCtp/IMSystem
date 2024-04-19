"use client"
import React, { useEffect, useState } from "react";
import { useLocationStore } from "@/root/zustand";
import { ims_locations } from "@prisma/client";
import toast from "react-hot-toast";
import { useAuthorizedAdmin } from "@/root/hooks";
import { GenericRegisterForm, LoadingComponent } from "@/root/components";
export default function RegisterLocation() {
    const { locationToEdit } = useLocationStore((state) => ({ locationToEdit: state.locationToEdit }));
    const { selectLocationToEdit, createLocation, updateLocation } = useLocationStore();
    const [isCancel, setIsCancel] = useState(false);
    const [locationName, setLocationName] = useState( locationToEdit ? locationToEdit.location_name : "" );
    useEffect(() => {
        if (locationToEdit) {
            setLocationName(locationToEdit.location_name);
            setIsCancel(false);
        } else {
            setLocationName("");
        }
    }, [locationToEdit]);
    const [error, setError] = useState<string | null>(null);
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocationName(event.target.value);
        setError(null);
    };
    const handleSubmit = async () => {
        if (!locationName.trim()) {
            setError("Por favor, complete el campo.");
        } else {
            if (locationToEdit?.location_id) {
                toast.promise(updateLocation({ location_id: locationToEdit.location_id, location_name: locationName } as ims_locations), {
                    loading: "Editando ubicación...",
                    success: "Ubicacion editada exitosamente!",
                    error: "No se pudo editar la ubicación",
                });
            }
            else {
                toast.promise(createLocation({ location_name: locationName } as ims_locations), {
                    loading: "Registrando ubicación...",
                    success: "Ubicacion registrada exitosamente!",
                    error: "No se pudo registrar la ubicación",
                });
            }
        }
    };
    const handleCancel = () => {
        setIsCancel(true);
        setLocationName("");
        selectLocationToEdit({ location_id: 0, location_name: "" });
    }
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent />
    return (
        <>
            <GenericRegisterForm title={"Registrar Ubicaciones"}
                buttonText={locationToEdit ? "Guardar Cambios" : "Registrar"}
                inputError={error}
                inputPlaceHolder="Ingrese ubicación"
                inputValue={locationName}
                handleCancel={handleCancel}
                handleNameChange={handleNameChange}
                handleSubmit={handleSubmit}
                inputValueLaw=""
                errorDescription=""
                handleDescriptionChange={() => { }}
                isLawForm={false} />
        </>
    );
}