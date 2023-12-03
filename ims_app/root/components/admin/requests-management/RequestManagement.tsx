import { LoadingComponent,RequestTable } from "@/root/components";
import { Suspense } from "react";
import { useRequestStore } from "@/root/zustand";
export default function RequestManagement() {
    const { requestPending, isLoadRequest } = useRequestStore();
    return (
        <div
            className="p-4 rounded-md mt-4"
        >
            <h2 className="text-gray-500 text-2xl font-bold md:text-center">
                Solicitudes Pendientes
            </h2>
            <div className="w-96 md:w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-96 md:w-full overflow-x-auto">
                    {isLoadRequest ? (
                        <LoadingComponent />
                    ) : requestPending.length === 0 ? (
                        <div className="flex items-center justify-center bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                            <div>
                                No hay solicitudes pendientes.
                            </div>
                        </div>
                    ) : ((
                        <Suspense fallback={<LoadingComponent/>}>
                            <RequestTable />
                        </Suspense>
                    ))}
                </div>
            </div>
        </div>
    );
}

