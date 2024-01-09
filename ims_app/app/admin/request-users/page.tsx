"use client";
import { LoadingComponent, RequestUserManagement } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RegisterUsersPage() {
    const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
    return (
        <main className="">
            <RequestUserManagement />
        </main>
    );
}