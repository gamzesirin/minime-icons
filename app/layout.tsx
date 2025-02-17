import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { Providers } from './providers'
import { Header } from '@/components/layout/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Minime İkon Kütüphanesi',
	description: 'Modern ve kullanımı kolay ikon kütüphanesi'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="tr" suppressHydrationWarning>
			<head />
			<body className={inter.className}>
				<Providers>
					<Header />
					{children}
					<Toaster position="top-right" />
				</Providers>
			</body>
		</html>
	)
}
