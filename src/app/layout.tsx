import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Elise Boillat - Développeuse Web Freelance | Sites & Applications Modernes",
  description:
    "Développeuse web freelance experte à Montauban. Création de sites vitrines, e-commerce et applications web avec React, Next.js et TypeScript. Devis gratuit sous 24h.",
  keywords: [
    "développeur web freelance",
    "création site internet",
    "développement application web",
    "React Next.js",
    "e-commerce",
    "site vitrine",
    "Montauban",
    "développeur frontend",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Elise Boillat" }],
  creator: "Elise Boillat",
  publisher: "Elise Boillat",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://elise-boillat.dev",
    siteName: "Elise Boillat - Développeuse Web",
    title:
      "Elise Boillat - Développeuse Web Freelance | Sites & Applications Modernes",
    description:
      "Développeuse web freelance experte à Montauban. Création de sites vitrines, e-commerce et applications web avec React, Next.js et TypeScript.",
    images: [
      {
        url: "/eliseHero.png",
        width: 1200,
        height: 630,
        alt: "Elise Boillat - Développeuse Web Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elise Boillat - Développeuse Web Freelance",
    description:
      "Création de sites vitrines, e-commerce et applications web modernes avec React & Next.js",
    images: ["/eliseHero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701,1,2&display=swap"
        />
      </head>
      <body className="bg-[#f9f9f9] font-sans text-[#111]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
