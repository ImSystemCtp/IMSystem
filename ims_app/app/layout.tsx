
import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { esES } from "@clerk/localizations";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'CTPP-CA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es">
        <body className="min-h-screen bg-slate-50 dark:bg-slate-800 flex flex-col flex-grow">
         
          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
