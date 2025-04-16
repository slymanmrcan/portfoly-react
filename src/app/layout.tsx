import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../css/styles.css";
import "../css/vendor.css";
import Link from "next/link";
import Script from 'next/script';
import Navbar from "./components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolyo",
  description: "Süleyman mercan",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        id="top"
      >
        <header className="s-header">
          <div className="header-mobile">
            <span className="mobile-home-link"><Link href="/home"> Ana Sayfa</Link></span>
            <a className="mobile-menu-toggle" href="#0"><span>Menu</span></a>
          </div>
          <div className="row wide main-nav-wrap">
            <nav className="column lg-12 main-nav">
              <ul>
                <li><Link href="/home" className="home-link"> Ana Sayfa</Link></li>
                <li className="current"><Link href="/home" className="smoothscroll">Giriş</Link></li>
                <li className=""><Link href="/about" className="smoothscroll">Hakkımda</Link></li>
                <li className=""><Link href="/buessines" className="smoothscroll">İşlerim</Link></li>
                <li className=""><Link href="/contact" className="smoothscroll">İletişim</Link></li>
              </ul>
            </nav>
          </div>

        </header>

        <Navbar />
        <main className="s-content">
          {children}
        </main>
        <Script src="/js/plugin.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
