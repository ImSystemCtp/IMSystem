'use client'
import { AdminMain } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
export default function AdminHome() {
  useAuthorizedAdmin()
  return <AdminMain/>
}