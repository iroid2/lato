import Header from "@/components/Header";
import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import CopyrightBanner from "@/components/CopyrightBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zilla Yoghurt",
  description: "Inspired to to server You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <CopyrightBanner />
      </body>
    </html>
  );
}
