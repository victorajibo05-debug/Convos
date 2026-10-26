import type { Metadata } from "next";
import { Red_Hat_Display} from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const redHatDisplayMono = Red_Hat_Display({
  variable: "--font-red-hat-display-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convos",
  description: "Join the conversation",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${redHatDisplay.variable} ${redHatDisplayMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
