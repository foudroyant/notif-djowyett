import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Djowyett Notif',
  description: 'Bambyno Production',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
      <meta name="theme-color" content="#000" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
