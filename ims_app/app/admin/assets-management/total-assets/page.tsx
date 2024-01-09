"use client";
import { AssetsTotalManagement } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function LawsManagementPage() {
    useAuthorizedAdmin()
    return (
        
        <main className="">
        <AssetsTotalManagement/>
        </main>
    );
}