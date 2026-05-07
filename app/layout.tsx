import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CS 173 Notes",
  description: "A proof-first course companion for CS 173.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
