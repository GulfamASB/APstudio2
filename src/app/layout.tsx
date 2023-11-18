import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Nav from "./components/Nav"




export const metadata: Metadata = {
  title: 'A Plus Studio',
  description: 'Generated by Gulfaam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">
      <body >
        <Nav />
        {children}
      <Footer/>
      </body>
    </html>
  )
}
