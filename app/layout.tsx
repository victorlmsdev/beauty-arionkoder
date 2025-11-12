import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Beauty Arionkoder",
	description: "Next level beauty services",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} `}>
				<Suspense fallback={null}>
					<NextTopLoader />
				</Suspense>
				<div className="antialiased bg-[url(/background.jpg)] ">
					<div className="antialiased ">{children}</div>
				</div>
			</body>
		</html>
	);
}
