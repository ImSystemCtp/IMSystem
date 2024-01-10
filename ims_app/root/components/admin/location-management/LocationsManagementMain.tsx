'use client'
import { EditLocation, LoadingComponent, RegisterLocation } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
import { Suspense, } from "react";
export default function LocationsManagementMain() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <div className="w-full h-full">
            <h1 className="text-neutral-400 dark:text-white text-2xl font-bold pb-12 text-center ">Gestión de Ubicaciones</h1>
            <div className=" flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <Suspense fallback={<LoadingComponent />}>
                        <EditLocation />
                    </Suspense>
                </div>
                <div className="w-full lg:w-1/2">
                    <RegisterLocation />
                </div>
            </div>
        </div>
    )
}
