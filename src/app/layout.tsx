import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import NextAuthSessionProvider from "../providers/SessionProvider";
import { Session } from "next-auth";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SCP API",
  description: "SCP API",
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        <NextAuthSessionProvider session={session}>
          <Navbar />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
