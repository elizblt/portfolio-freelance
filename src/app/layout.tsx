import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Elise Boillat — Développeuse Web",
  description: "Développeuse web freelance à Montauban — sites et apps modernes, rapides et élégants.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
      <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701,1,2&display=swap" />

      </head>
      <body className="font-sans bg-[#f9f9f9] text-[#111]">
          <Navbar />
        {children}
      </body>
    </html>
  );
}