import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brian Bush — Business Growth Specialist, Coach & Speaker | Norfolk",
  description:
    "Brian Bush is a Business Growth Specialist, Coach, Connector and Speaker based in Norfolk. Nearly 40 years of experience helping people and organisations grow through coaching, strategy, and a powerful global network.",
  keywords: [
    "business coach Norfolk",
    "business growth specialist UK",
    "LinkedIn training for business",
    "keynote speaker Norfolk",
    "business development consultant UK",
    "people connector business growth",
  ],
  openGraph: {
    title: "Brian Bush — Business Growth Specialist, Coach & Speaker",
    description:
      "Nearly 40 years of experience helping people and organisations grow through coaching, strategy, and a powerful global network.",
    url: "https://bbushonline.co.uk",
    siteName: "Brian Bush",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="bg-bg-base text-white">{children}</body>
    </html>
  );
}
