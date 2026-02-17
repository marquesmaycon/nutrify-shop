import "./globals.css"

import type { Metadata } from "next"
import { Domine, Inter } from "next/font/google"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/features/cart/cart-context"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"]
})

const domine = Domine({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Nutrify - Your Ultimate Nutrition Companion",
  description:
    "Discover the power of personalized nutrition with Nutrify. Our cutting-edge platform offers tailored meal plans, expert advice, and a vibrant community to help you achieve your health goals. Whether you're looking to lose weight, build muscle, or simply eat healthier, Nutrify is your go-to resource for all things nutrition. Join us today and start your journey towards a healthier, happier you!"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${domine.variable} bg-background overflow-x-clip antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Header />
            <main className="flex flex-col items-center">{children}</main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
