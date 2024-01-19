'use client'
import { EditLocation, LoadingComponent, RegisterLocation } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function LocationsManagementMain() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent />
    return (
        <div className="w-full h-full">
            <h1 className="text-neutral-400 dark:text-white text-2xl font-bold pb-12 text-center ">Gestión de Ubicaciones</h1>
            <div className=" flex flex-col lg:flex-row gap-4 mb-4">
                <div className="w-full lg:w-1/2">
                    <RegisterLocation />
                </div>
                <div className="w-full lg:w-1/2">
                    <EditLocation />
                </div>
            </div>
        </div>
    )
}
