import { useUserStore } from "@/root/zustand";
import { AlertMessage, LoadingComponent, RequestUserTable } from "@/root/components";
import { Suspense } from "react";
import { useAuthorizedAdmin, useUserPending } from "@/root/hooks";
export default function RequestUserManagement() {
    useUserPending();
    const { usersPending, isLoadUser } = useUserStore((state) => ({ usersPending: state.usersPending, isLoadUser: state.isLoadUser }));
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <div
            className=" p-4 rounded-md mt-4 "
        >
            <h2 className="text-gray-500 dark:text-white text-lg font-semibold pb-4">
                Solicitudes de Usuarios Pendientes
            </h2>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {isLoadUser ? (
                        <LoadingComponent />
                    ) : usersPending.length === 0 ? (
                        <AlertMessage message="No hay solicitudes de usuarios pendientes." />
                    ) : ((<RequestUserTable />))}
                </div>
            </div>
        </div>
    );
}