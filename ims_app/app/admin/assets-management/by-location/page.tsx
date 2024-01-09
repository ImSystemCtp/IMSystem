"use client";
import { AssetsLocationManagement, LoadingComponent } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function LawsManagementPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
        <AssetsLocationManagement/>
        </main>
    );
}