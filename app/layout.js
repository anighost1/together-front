import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/tanstack.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Together",
    description: "A group todo",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TanstackProvider>
                    {children}
                </TanstackProvider>
            </body>
        </html>
    );
}
