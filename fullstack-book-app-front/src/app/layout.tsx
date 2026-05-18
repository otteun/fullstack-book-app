import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Book Management",
    description: "도서 관리 시스템",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ko">
        <body>
        <header className="bg-black text-white p-5">
            <nav className="flex gap-6 text-lg">
                <Link href="/">도서 목록</Link>
                <Link href="/register">도서 등록</Link>
            </nav>
        </header>

        <main>{children}</main>

        <footer className="p-5 text-center border-t mt-10">
            Fullstack Book App
        </footer>
        </body>
        </html>
    );
}