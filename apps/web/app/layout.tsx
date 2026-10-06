import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Sri Kala Bhairava Holidays | Tours & Vehicle Rental",
  description: "Local tours, Karnataka travel planning and vehicle rental in Hosamane, Bhadravathi.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navigation />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}