"use client";
import { RegisterLocation } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RegisterLocationPage() {
    useAuthorizedAdmin()
    return (
        <main className="">
            <RegisterLocation/>
        </main>
    );
}