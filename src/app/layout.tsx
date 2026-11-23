import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '@fontsource-variable/manrope/wght.css'
import '@fontsource-variable/inter/wght.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import './globals.css'

const url = 'https://saikumart0123.github.io/myportfolio/'
const title = 'Sai Kumar Tallapaneni | Senior AI/ML Engineer'
const description = 'Sai Kumar Tallapaneni builds production AI systems, from multi-agent workflows and advanced RAG to cloud-native Python services.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { type: 'website', url, title, description },
  twitter: { card: 'summary', title, description },
}

export const viewport: Viewport = { themeColor: '#0B0B0C' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
