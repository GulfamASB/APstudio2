
import NextAuthSessionProvider from '@/app/providers/sessionProvider';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

      <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  )
}