import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BrenwElectro — Electrical Materials & Supplies | brenwelectro.com",
    template: "%s | BrenwElectro — brenwelectro.com",
  },
  description:
    "BrenwElectro (brenwelectro.com) — your trusted source for electrical materials, wiring, lighting and installation supplies across Europe. Certified inventory, fast delivery.",
  applicationName: "BrenwElectro",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brenwelectro.com"),
  openGraph: {
    type: "website",
    siteName: "BrenwElectro",
    url: "https://brenwelectro.com",
    title: "BrenwElectro — Electrical Materials & Supplies",
    description:
      "Certified electrical materials, wiring, lighting and installation supplies. Delivered across Europe.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@brenwelectro",
    title: "BrenwElectro — brenwelectro.com",
  },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          id="jivochat"
          src="https://code.jivosite.com/widget/Hq2j6JUEGI"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
