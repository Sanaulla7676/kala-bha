import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";
import { business } from "@/lib/data";

const poppins = Poppins({ subsets:["latin"], weight:["300","400","500","600","700"], variable:"--font-poppins" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sri Kala Bhairava Holidays | Tours & Vehicle Rental",
  description: "Local tours, Karnataka travel planning and vehicle rental in Hosamane, Bhadravathi.",
  keywords:["Bhadravathi travel","Karnataka tours","vehicle rental Bhadravathi","tour packages Karnataka"]
};

export default function RootLayout({children}:{children:React.ReactNode}){
  const jsonLd = {
    "@context":"https://schema.org",
    "@type":"TravelAgency",
    "name":business.name,
    "description":business.description,
    "address":{"@type":"PostalAddress","streetAddress":"Hosamane","addressLocality":"Bhadravathi","addressRegion":"Karnataka","postalCode":"577301","addressCountry":"IN"},
    "geo":{"@type":"GeoCoordinates","latitude":business.lat,"longitude":business.lng},
    "aggregateRating":{"@type":"AggregateRating","ratingValue":business.rating,"reviewCount":business.reviewCount}
  };
  return <html lang="en"><head><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></head><body className={poppins.variable}><Navigation/>{children}<SiteFooter/></body></html>;
}