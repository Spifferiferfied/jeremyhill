import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Lato, Oswald } from 'next/font/google'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '@/styles/globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
})
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'jeremyhill.com',
  description: 'The personal website of Jeremy Hill, Chicago, IL',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={ `${ lato.variable } ${ oswald.variable }` }>
      <GoogleTagManager gtmId="GTM-KNSHPX" />
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
