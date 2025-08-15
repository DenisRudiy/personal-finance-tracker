import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.scss";

const exo_2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Finance Tracker",
  description: "Stay on top of your money with this Personal Finance Tracker! Effortlessly monitor income, expenses, savings, and budgets—all in one place. Perfect for individuals seeking clarity, control, and smarter financial decisions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo_2.variable} antialiased`}
      >
      <div className="App">
        <div className="App__body">
          {children}
        </div>
      </div>
      </body>
    </html>
  );
}
