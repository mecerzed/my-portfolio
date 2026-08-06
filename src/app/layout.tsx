import type { Metadata } from "next";
import { League_Spartan, Inter } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import "./globals.css";

const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["400", "500", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Melchizedek Tinashe Mecer — Product Designer & Developer",
    description: "Portfolio of Melchizedek Tinashe Mecer, product designer and developer.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${leagueSpartan.variable} ${inter.variable} antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}