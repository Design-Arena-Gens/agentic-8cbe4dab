import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neon Cat Dream",
  description:
    "A cute fluffy cat mesmerized by floating swirling neon colors in a seamless loop."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
