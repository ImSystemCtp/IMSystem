"use client";
import { LoadingComponent, RequestManagement } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RequestManagementPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
            <RequestManagement/>
        </main>
    );
}