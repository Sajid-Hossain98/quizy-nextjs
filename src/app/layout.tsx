import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizy",
  description: "Attend some quiz challenges!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "antialiased min-h-screen pt-16 bg-black"
        )}
        suppressHydrationWarning={true}
      >
        {/* <AuthProvider> */}
        <Navbar />
        {children}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
