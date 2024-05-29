import "./globals.css";

import { Inter } from "next/font/google";
import Loader from "@/components/sections/loader";
import Provider from "@/config/provider";
import { getSEOTags } from "@/lib/seo";

const font = Inter({ subsets: ["latin"] });

export const metadata = getSEOTags();

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
