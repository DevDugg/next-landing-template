import "./globals.css";

import type { Viewport } from "next";
import Loader from "@/components/sections/loader";
import Provider from "@/config/provider";
import { colors } from "@/config/colors";
import { getSEOTags } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: colors.themeColor,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Provider>
          <Loader>{children}</Loader>
        </Provider>
      </body>
    </html>
  );
}
