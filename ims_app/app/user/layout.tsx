'use client'
// import type { Metadata } from 'next'
import { UserNavBar, Footer } from '@/root/components';
import { Toaster } from "react-hot-toast";

// export const metadata: Metadata = {
//   title: 'Admin',
//   description: 'Generated by create next app',
// }

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <div>
        <Toaster
          toastOptions={{
            duration: 2000,
          }}
        />
      </div>
      <UserNavBar />
      <div className="flex-1 flex">
      <div className="flex-1 pl-4 pr-4 overflow-y-auto">{children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
