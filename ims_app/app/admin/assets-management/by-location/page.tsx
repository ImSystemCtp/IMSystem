"use client";
import { AssetsLocationManagement } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function LawsManagementPage() {
    useAuthorizedAdmin();
    return (
        <main className="">
        <AssetsLocationManagement/>
        </main>
    );
}