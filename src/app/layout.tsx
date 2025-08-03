import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Élise Boillat — Développeuse Web",
  description: "Développeuse web freelance à Montauban — sites et apps modernes, rapides et élégants.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}