"use client";
import { LoadingComponent, RegisterLocation } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function RegisterLocationPage() {
    return (
        <main className="">
            <RegisterLocation/>
        </main>
    );
}