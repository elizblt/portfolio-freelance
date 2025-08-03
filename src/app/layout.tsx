import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter, Sora } from 'next/font/google';


const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const sora = Sora({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: "Elise Boillat — Développeuse Web",
  description: "Développeuse web freelance à Montauban — sites et apps modernes, rapides et élégants.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}