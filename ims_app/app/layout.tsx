import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { esES } from "@clerk/localizations";
import { Footer } from '@/root';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={esES}
    >
      <html lang="es">
        <body className={"min-h-screen bg-slate-50  dark:bg-slate-800  " + inter.className}  >
          <main className=' mx-auto'>
            <div className=''>
              <div className=''>{children}</div>
            </div>
          </main>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  )
}
