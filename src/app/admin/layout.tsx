import Nav from '@/app/components/Nav';
import NextAuthSessionProvider from '@/app/providers/sessionProvider';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Nav />
      <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  )
}
