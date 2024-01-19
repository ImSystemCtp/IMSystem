import { EditLaw, LoadingComponent, RegisterLaw } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function LawsManagementMain() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <div className="w-full h-full">
            <h1 className="text-black dark:text-white text-2xl font-bold pb-12 text-center">Gestión de Leyes</h1>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="w-full lg:w-1/2">
                    <RegisterLaw />
                </div>
                <div className="w-full lg:w-1/2">
                    <EditLaw />
                </div>
            </div>
        </div>
    )
}