import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Elise Boillat — Développeuse Web",
  description: "Développeuse web freelance à Montauban — sites et apps modernes, rapides et élégants.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="font-sans bg-[#f9f9f9] text-[#111]">
          <ScrollProgress />
          <Navbar />
        {children}
      </body>
    </html>
  );
}