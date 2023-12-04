import { LoadingComponent, RequestTable } from "@/root/components";
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
                    <Suspense fallback={<LoadingComponent />}>
                        <RequestTable />
                    </Suspense>

                </div>
            </div>
        </div>
    );
}

