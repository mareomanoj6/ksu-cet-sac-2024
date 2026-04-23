import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KSU Student Assist Cell - 2024 Scheme",
  description:
    "All in one resource hub for CET Students. Effortless way to find resources for studies, help with question papers and more.",
  metadataBase: new URL("https://sac.ksucet.in"),
  openGraph: {
    url: "https://sac.ksucet.in",
    type: "website",
    title: "KSU Student Assist Cell - 2024 Scheme",
    description:
      "All in one resource hub for CET Students. Effortless way to find resources for studies, help with question papers and more.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/e45c46ea-c2ae-4d9b-bd9a-b01b4b06ba19.png?token=fFmBIguQn_2Juk5F_eTtnokNlq5Zy-08KmxKEW3vcmw&height=216&width=216&expires=33299232490",
        height: 216,
        width: 216,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSU Student Assist Cell - 2024 Scheme",
    description:
      "All in one resource hub for CET Students. Effortless way to find resources for studies, help with question papers and more.",
    images: [
      "https://opengraph.b-cdn.net/production/images/e45c46ea-c2ae-4d9b-bd9a-b01b4b06ba19.png?token=fFmBIguQn_2Juk5F_eTtnokNlq5Zy-08KmxKEW3vcmw&height=216&width=216&expires=33299232490",
    ],
  },
  icons: {
    icon: "/images/ksu%20logo%20white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={lexend.variable}>{children}</body>
    </html>
  );
}
