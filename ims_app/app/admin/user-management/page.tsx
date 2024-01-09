"use client";
import { UserManagement } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function UserManagementPage() {
    useAuthorizedAdmin()
    return (
        <main className="">
            <UserManagement/>
        </main>
    );
}