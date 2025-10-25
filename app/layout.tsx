import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Trinity Chapel Ruiru | Audacious Agents of Change",
  description:
    "A dynamic, youthful church community rooted in faith, transformation, and authentic connection. Growing Deep to Reach Wide.",
  keywords: ["Trinity Chapel", "Ruiru", "Church", "Faith", "Community", "Worship", "Kenya"],
  authors: [{ name: "Trinity Chapel Ruiru" }],
  openGraph: {
    title: "Trinity Chapel Ruiru | Audacious Agents of Change",
    description: "A dynamic, youthful church community rooted in faith, transformation, and authentic connection.",
    type: "website",
    locale: "en_KE",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
