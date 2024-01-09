"use client";
import { LoadingComponent, UserManagement } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function UserManagementPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
            <UserManagement/>
        </main>
    );
}