import type { Metadata } from "next";
import { openSans, robotoSlab } from "@/lib/fonts";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${openSans.variable} ${robotoSlab.variable}`}>
				{children}
			</body>
		</html>
	);
}
