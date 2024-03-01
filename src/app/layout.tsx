import type { Metadata } from 'next'
import { inter, lexendDeca } from '@/app/fonts'
import { ThemeProvider } from '@/app/shared/theme-provider'
import { siteConfig } from '@/config/site.config'
import cn from '@/utils/class-names'
import MainLayout from '@/layouts/main/layout'
import './globals.css'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.variable, lexendDeca.variable, 'font-inter')}>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
