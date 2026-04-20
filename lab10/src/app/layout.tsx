import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lab 10 — Next.js SSR",
  description: "Лабораторна робота з SSR, динамічними маршрутами та гідрацією",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header className="site-header">
          <div className="container nav">
            <Link href="/" className="logo">
              Lab 10
            </Link>

            <nav className="menu">
              <Link href="/">Головна</Link>
              <Link href="/system-status">Стан системи</Link>
              <Link href="/product/1">Товар</Link>
              <Link href="/search?q=phone">Пошук</Link>
            </nav>
          </div>
        </header>

        <main className="container page-content">{children}</main>
      </body>
    </html>
  );
}
