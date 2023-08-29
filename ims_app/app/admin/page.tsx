'use client'
import { AdminMain, AdminNavBar } from "../root/components";
export default function AdminHome() {
  return (
      <main className=" min-h-screen ">
        <AdminNavBar />
        <AdminMain/>
      </main>
  );
}