'use client'

import { siteConfig } from '@/config/site.config'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function ThemeProvider({ children }: React.PropsWithChildren<{}>) {
  return (
    <NextThemeProvider enableSystem={false} defaultTheme={String(siteConfig.mode)}>
      {children}
    </NextThemeProvider>
  )
}
