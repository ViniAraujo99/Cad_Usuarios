import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next APP - Cad. Usuário",
  description: "Cadastro de Usuário usando Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` w-full
       h-lvh flex justify-center items-center
       bg-gradient-to-r to-blue-600 from-indigo-800
       text-black
       ${inter.className}
      `}
      >
        {children}
      </body>
    </html>
  );
}
