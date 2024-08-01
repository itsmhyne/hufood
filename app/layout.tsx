import type { Metadata } from "next";
import { Great_Vibes, Inter } from "next/font/google";
import "./globals.css";
import NavbarV2 from "./components/globals/NavbarV2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayam Geprek Sa'i Kesamben - PT UKHUWAH BERKAH SEMESTA",
  description: "Website aplikasi AGS Kesamben",
};

const greatvibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  preload: true,
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <body className={`${inter.className} scroll-smooth`}>
        <NavbarV2 />
        {children}
      </body>
      {/* <body className={`${inter.className}${greatvibes.variable}`}>
        {children}
      </body> */}
    </html>
  );
}
