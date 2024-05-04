import Provider from "@/components/Provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TSS | TIWARIJI SECURITY SERVICES",
  description: "Build and developed with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="
        dark:bg-gray-900">
        <Provider>
          <main className=" w-full  ">
            {children}
          </main>

        </Provider>

      </body>
    </html>
  );
}
