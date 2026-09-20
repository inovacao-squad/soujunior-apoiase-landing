import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SouJunior Apoia.se",
  description: "Landing page do SouJunior Apoia.se",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
