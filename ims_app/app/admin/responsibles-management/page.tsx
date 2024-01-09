"use client";
import { ResponsibleManagementMain } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function ResponsibleManagementPage() {
    useAuthorizedAdmin()
    return (
        <main className="">
        <ResponsibleManagementMain/>
        </main>
    );
}