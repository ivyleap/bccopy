import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BCパートナーズ株式会社 — Bridge to BUSINESS",
  description:
    "多様化するお客様のニーズとサービス企業の課題に、BCパートナーズが架け橋になります。インサイドセールス・マーケティングBPO・コンサルティング。",
  openGraph: {
    title: "BCパートナーズ株式会社 — Bridge to BUSINESS",
    description:
      "営業課題に向き合う、大阪発のマーケティング・コンサルティングカンパニー。",
    locale: "ja_JP",
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
      lang="ja"
      className={`${inter.variable} ${cormorant.variable} ${notoSansJP.variable} ${notoSerifJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
