import type { Metadata } from "next"
import { Space_Mono, Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] })
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp", // variable を指定
});

export const metadata: Metadata = {
  title: "Riku's Portfolio",
  description: "Riku Yanagihashi's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceMono.className} ${notoSansJP.variable} bg-black text-white`}>{children}</body>
    </html>
  )
}

