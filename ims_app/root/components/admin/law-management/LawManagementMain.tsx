import { Suspense } from "react";
import { EditLaw, LoadingComponent, RegisterLaw } from "@/root/components";
export default function LawsManagementMain() {
    return (
        <div className="w-full h-full">
            <h1 className="text-black text-2xl font-bold pb-12 text-center">Gestión de Leyes</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <Suspense fallback={<LoadingComponent />}>
                    <EditLaw />
                    </Suspense>
                </div>
                <div className="w-full lg:w-1/2">
                    <RegisterLaw />
                </div>
            </div>
        </div>
    )
}