"use client";
import { LoadingComponent, ResponsibleManagementMain } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function ResponsibleManagementPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
        <ResponsibleManagementMain/>
        </main>
    );
}