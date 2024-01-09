"use client";
import { AssetsTotalManagement, LoadingComponent } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function LawsManagementPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
        <AssetsTotalManagement/>
        </main>
    );
}