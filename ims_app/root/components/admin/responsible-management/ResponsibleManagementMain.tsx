import { Suspense } from "react";
import { LoadingComponent, EditResponsible,  RegisterResponsibles} from "@/root/components";
export default function ResponsibleManagementMain() {
    return (
        <div className="w-full h-full">
            <h1 className="text-black text-2xl font-bold pb-12 text-center">Gestión de Funcionarios Responsables</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <Suspense fallback={<LoadingComponent />}>
                    <EditResponsible />
                    </Suspense>
                </div>
                <div className="w-full lg:w-1/2">
                    <RegisterResponsibles />
                </div>
            </div>
        </div>
    )
}