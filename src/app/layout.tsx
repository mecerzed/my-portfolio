import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import "./globals.css";

export const metadata: Metadata = {
    title: "Melchizedek Tinashe Mecer — Product Designer & Developer",
    description: "Portfolio of Melchizedek Tinashe Mecer, product designer and developer.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="antialiased">
                <Navbar />
                {children}
            </body>
        </html>
    );
}