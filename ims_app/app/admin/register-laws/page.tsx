"use client";
import { RegisterLaw } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RegisterLawPage() {
    useAuthorizedAdmin()
    return (
        <main >
            <RegisterLaw/>
        </main>
    );
}