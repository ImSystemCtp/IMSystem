import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sing In',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (


    <div className={"min-h-screen bg-slate-200  dark:bg-slate-800  " + inter.className}  >
      <main className='container mx-auto'>
        <div className='flex items-start justify-center min-h-screen'>
          <div className='mt-20'>{children}</div>
        </div>
      </main>
    </div>


  )
}
