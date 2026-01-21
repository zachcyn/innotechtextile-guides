import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../context/themeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innotech Textile - IT Guides",
  description: "User guides for Innotech Textile SDN BHD.",
  icons: {
    icon: [
      {
        url: "/assets/favicon-light.png",
        type: "image/png",
        rel: "icon",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/favicon-dark.png",
        type: "image/png",
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/assets/favicon-light-180x180.png",
        sizes: "180x180",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/favicon-dark-180x180.png",
        sizes: "180x180",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0B1220]`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}


