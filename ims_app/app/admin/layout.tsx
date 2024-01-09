"use client";
import { AdminNavBar, AuthorizedAdmin, Footer, SideBar } from '@/root/components';
import { useCheckingStore } from '@/root/zustand/store/checking-state/checkingState';


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthorized = useCheckingStore(state => state.isAuthorized);
  return (
    <main className="flex flex-col min-h-screen">
        <AuthorizedAdmin/>
      <div>
      </div>
      <AdminNavBar />
      <div className="flex-1 flex">
        <SideBar />
        <div className="flex-1 pl-4 pr-4 overflow-y-auto">{isAuthorized? children: ''}</div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
