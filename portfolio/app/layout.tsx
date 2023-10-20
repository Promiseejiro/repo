import './globals.css'
import type { Metadata } from 'next'
import ThemeProvider from '../context/themecontext'
export const metadata: Metadata = {
  title: 'Emosivbe Promise',
  description: `I'm Emosivbe promise. A tech savant with mastery of contemporary
              tools and technologies, fashioning software solutions that
              prioritize seamless user experiences and improve lives.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
