import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/global.css"
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quizy",
  description: "Quizz sobre Psicologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Toaster position="bottom-center" />
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
