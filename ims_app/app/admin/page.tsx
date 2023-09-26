'use client'
import { AdminMain } from "@/root/components";
import { useUserStore } from "@/root/zustand/store/users-State/userState";

export default function AdminHome() {
  return (
      <div className=" ">
        <AdminMain/>
      </div>
  );
}