"use client";
import { RequestManagement } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RequestManagementPage() {
    useAuthorizedAdmin()
    return (
        <main className="">
            <RequestManagement/>
        </main>
    );
}