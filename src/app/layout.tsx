import "./globals.css";

import { Inter } from "next/font/google";
import Loader from "@/components/sections/loader";
import type { Metadata } from "next";
import Provider from "@/config/provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-BACKGROUND text-PRIMARY w-screen h-screen`}>
        <Provider>
          <Loader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
