import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const fontHeading = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading'
})

const fontBody = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-body'
})

export const metadata: Metadata = {
	title: 'HRT.info',
	description: " HRT.info is a platform dedicated to providing comprehensive information and resources about Hormone Replacement Therapy (HRT) for transgender individuals. Whether you have access to medical supplies through a doctor's prescription or are exploring alternative options, our goal is to offer valuable insights and guidance. ",
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={cn('antialiased', fontHeading.variable, fontBody.variable)}
			>
				{children}
			</body>
		</html>
	)
}
