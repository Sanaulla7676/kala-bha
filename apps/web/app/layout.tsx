import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";

const poppins = Poppins({ subsets:["latin"], weight:["300","400","500","600","700"], variable:"--font-poppins" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sri Kala Bhairava Holidays | Tours & Vehicle Rental",
  description: "Local tours, Karnataka travel planning and vehicle rental in Hosamane, Bhadravathi.",
  keywords:["Bhadravathi travel","Karnataka tours","vehicle rental Bhadravathi","tour packages Karnataka"]
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body className={poppins.variable}><Navigation/>{children}<SiteFooter/></body></html>;
}