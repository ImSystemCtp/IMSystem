import { useUserNoRoleStore, useUserStore } from "@/root/zustand";
import { LoadingComponent, RequestUserTable } from "@/root/components";
import { Suspense } from "react";
import { useAuthorizedAdmin, useUserPending } from "@/root/hooks";
export default function RequestUserManagement() {
    useUserPending();
    const { usersPending, isLoadUser } = useUserNoRoleStore((state) => ({ usersPending: state.usersPending, isLoadUser: state.isLoadUser }));
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <div
            className=" p-4 rounded-md mt-4 "
        >
            <h2 className="text-gray-500 text-lg font-semibold pb-4">
                Solicitudes de Usuarios Pendientes
            </h2>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {isLoadUser ? (
                        <LoadingComponent />
                    ) : usersPending.length === 0 ? (
                        <div className="flex items-center justify-center bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                            <div>
                                No hay solicitudes de usuarios pendientes.
                            </div>
                        </div>
                    ) : ((
                        <Suspense fallback={<LoadingComponent />}>
                            <RequestUserTable />
                        </Suspense>
                    ))}
                </div>
            </div>
        </div>
    );
}
