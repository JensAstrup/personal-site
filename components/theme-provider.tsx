'use client'

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
import { ReactNode } from 'react'


function ThemeProvider({ children, ...props }: ThemeProviderProps): ReactNode {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export { ThemeProvider }

