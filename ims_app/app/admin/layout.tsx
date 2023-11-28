"use client";
import { AdminNavBar, Footer, SideBar } from '@/root/components';


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <div>
      </div>
      <AdminNavBar />
      <div className="flex-1 flex">
        <SideBar />
        <div className="flex-1 pl-4 pr-4 overflow-y-auto">{children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
