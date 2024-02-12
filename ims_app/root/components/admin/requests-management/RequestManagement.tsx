import { LoadingComponent, RequestTable } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RequestManagement() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <div className="p-4 rounded-md mt-4" >
            <h2 className="m-4 text-gray-500 dark:text-white  text-2xl font-bold md:text-center">
                Solicitudes Pendientes
            </h2>
            <div className="md:w-full overflow-hidden rounded-lg shadow-xs">
                <div className="md:w-full overflow-x-auto">
                        <RequestTable />
                </div>
            </div>
        </div>
    );
}