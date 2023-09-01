"use client";
import { AdminNavBar } from '@/root/components'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import SideBar from '@/root/components/sidebar/SideBar';
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <AdminNavBar />
      <SideBar />
      <div >{children}</div>
    </main>
  )

}
