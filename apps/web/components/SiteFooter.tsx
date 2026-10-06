import Link from "next/link";
import { Mail, MapPin, Navigation, Star } from "lucide-react";
import { business } from "@/lib/data";

export default function SiteFooter() {
  return <footer className="mt-20 bg-[#08263f] text-white">
    <div className="container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
      <div><div className="text-[17px] font-semibold">Sri Kala Bhairava Holidays</div><div className="mt-1 text-[8px] tracking-[.24em] text-slate-400">TOURS • TRAVEL • RENTAL</div><p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">{business.description}</p></div>
      <div><h4 className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-slate-400">Quick Links</h4><div className="grid gap-2 text-sm text-slate-300"><Link href="/">Home</Link><Link href="/destinations">Destinations</Link><Link href="/tours">Tours</Link><Link href="/packages">Packages</Link><Link href="/quote">Get a Quote</Link></div></div>
      <div><h4 className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-slate-400">Travel</h4><div className="grid gap-2 text-sm text-slate-300"><Link href="/about">About Us</Link><Link href="/blog">Travel Guide</Link><Link href="/contact">Contact</Link><Link href="/booking">Booking</Link></div></div>
      <div><h4 className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-slate-400">Popular</h4><div className="grid gap-2 text-sm text-slate-300"><Link href="/destinations/chikkamagaluru">Chikkamagaluru</Link><Link href="/destinations/coorg">Coorg</Link><Link href="/destinations/coastal-karnataka">Coastal Karnataka</Link><Link href="/tours/tempo-traveller">Group Travel</Link></div></div>
      <div><h4 className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-slate-400">Visit Us</h4><div className="space-y-3 text-sm text-slate-300"><div className="flex gap-2"><MapPin size={16} className="mt-1 shrink-0 text-[#10a89e]"/><span>{business.address}</span></div><div className="flex gap-2"><Star size={16} className="mt-1 shrink-0 text-[#10a89e]"/><span>{business.rating.toFixed(1)} • {business.reviewCount} Google reviews</span></div><a className="inline-flex items-center gap-2 text-[#6be4d9] hover:text-white" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${business.lat},${business.lng}`}><Navigation size={15}/> Get Directions</a></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container flex flex-col gap-2 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between"><span>© {new Date().getFullYear()} Sri Kala Bhairava Holidays</span><span className="flex items-center gap-2"><Mail size={14}/> {business.address}</span></div></div>
  </footer>
}