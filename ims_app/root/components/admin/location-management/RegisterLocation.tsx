"use client"
import React, { useEffect, useState } from "react";
import { useLocationStore } from "@/root/zustand";
import { ims_locations } from "@prisma/client";

import toast from "react-hot-toast";

export default function RegisterLocation() {
    const {locationToEdit } = useLocationStore((state) => ({ locationToEdit: state.locationToEdit }));
    const { selectLocationToEdit,createLocation, updateLocation } = useLocationStore();

    const [isCancel, setIsCancel] = useState(false);
    const [locationName, setLocationName] = useState(
        locationToEdit ? locationToEdit.location_name : ""
    );
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
            if(locationToEdit){
                toast.promise(updateLocation({ location_id: locationToEdit.location_id, location_name: locationName } as ims_locations), {
                    loading: "Editando ubicación...",
                    success: "Ubicacion editada exitosamente!",
                    error: "No se pudo editar la ubicación",
                });
            }
            else{
                toast.promise( createLocation({ location_name: locationName } as ims_locations), {
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
    return (
        <main className="w-full ">
            <div className="flex flex-col justify-center items-center">
                <div className="border-2 rounded-lg border-slate-300 shadow-sm shadow-slate-300 p-4 w-3/4">
                    <h2 className="lg:w-full lg:m-4 text-center text-2xl font-bold m-4 pb-12">
                        Registrar Ubicaciones
                    </h2>
                    <div className="w-full flex flex-col mt-4 mx-auto">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Ubicacion:</label>
                            <input
                                type="text"
                                value={locationName}
                                onChange={handleNameChange}
                                placeholder="Ingrese ubicación"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
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
                            {locationToEdit && !isCancel ? "Guardar Cambios" : "Registrar"}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
