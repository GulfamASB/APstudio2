import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Nav from "./components/Nav"
import localFont from 'next/font/local'


const myFont = localFont({ src: "./fonts/bodoni-mt-1.ttf" })

export const metadata: Metadata = {
  title: 'A Plus Studio',
  description: 'Generated by Gulfaam',
  manifest:'/manifest.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   
      <body   className={myFont.className}>
        <Nav />
        {children}
      <Footer/>
      </body>
    </html>
  )
}
