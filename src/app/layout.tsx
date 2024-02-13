import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({weight:"400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "SCP API",
  description: "SCP API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
