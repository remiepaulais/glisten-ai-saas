import { PrismicPreview } from '@prismicio/next'
import { Space_Grotesk } from 'next/font/google'
import { repositoryName } from '@/prismicio'
import '@/app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${spaceGrotesk.variable} bg-[#070815] font-sans text-white antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
