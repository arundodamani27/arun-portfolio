import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://arundodamani.tech"),
  title: {
    default: "Arun Dodamani | Java Full Stack Developer",
    template: "%s | Arun Dodamani",
  },
  description:
    "Arun Dodamani is an MCA student and Java Full Stack Developer skilled in Java, Spring Boot, React, SQL, Firebase, and cloud technologies.",
  keywords: [
    "Arun Dodamani",
    "Java Developer",
    "Full Stack Developer",
    "MCA Student",
    "Spring Boot",
    "React",
    "Portfolio",
  ],
  openGraph: {
    title: "Arun Dodamani",
    description: "Java Full Stack Developer Portfolio",
    url: "https://arundodamani.tech",
    siteName: "Arun Dodamani",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
