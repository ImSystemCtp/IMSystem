"use client";
import { RequestUserManagement } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RegisterUsersPage() {
    useAuthorizedAdmin()
    return (
        <main className="">
            <RequestUserManagement />
        </main>
    );
}