// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveBar from "@/components/Home/Navbar/ResponsiveBar";
import Provider from "@/components/Hoc/Provider";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BPPMHKP",
  description: "BPPMHKP landing page using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <nav className="fixed top-0 left-0 w-full z-50">
            <ResponsiveBar />
            {children}
          </nav>
        </Provider>
      </body>
    </html>
  );
}
