import Provider from "@/components/Provider";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TiwariJi Security Services",
  description: "Build and developed with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="dark:bg-gray-900">
        <Provider>
          <main className="w-full">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
