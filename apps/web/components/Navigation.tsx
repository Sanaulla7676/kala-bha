"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Clock3, Star, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { business } from "@/lib/data";

const links = [
  ["/", "Home"],
  ["/destinations", "Destinations"],
  ["/tours", "Tours"],
  ["/packages", "Packages"],
  ["/about", "About Us"],
  ["/blog", "Blog"],
  ["/contact", "Contact Us"]
];

const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hello Sri Kala Bhairava Holidays, I would like to plan a trip.")}`;

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden border-b border-slate-100 bg-white md:block">
        <div className="container flex h-9 items-center justify-between text-[10px] text-slate-500">
          <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#10a89e]" />{business.address}</span>
          <a href={`tel:${business.phone}`} className="flex items-center gap-1.5 hover:text-[#10a89e]"><Clock3 size={13} className="text-[#10a89e]" />{business.phone}</a>
          <span className="flex items-center gap-1.5"><Star size={13} fill="currentColor" className="text-[#10a89e]" />{business.rating.toFixed(1)} • {business.reviewCount} Google reviews</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 glass">
        <div className="container flex h-[74px] items-center justify-between gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={()=>setOpen(false)}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#10a89e] text-[#10a89e]"><span className="text-sm font-bold">SK</span></span>
            <span className="min-w-0"><strong className="block truncate text-[14px] font-semibold text-[#08263f] md:text-[15px]">Sri Kala Bhairava Holidays</strong><small className="block text-[8px] font-medium tracking-[0.24em] text-slate-500">TOURS • TRAVEL • RENTAL</small></span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {links.map(([href,label]) => { const active = href === "/" ? pathname === "/" : pathname.startsWith(href); return <Link key={href} href={href} className={"relative py-7 text-[12px] font-medium transition " + (active ? "text-[#10a89e]" : "text-slate-700 hover:text-[#10a89e]")}>{label}{active && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#10a89e]" />}</Link>; })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3 text-[11px] font-semibold text-[#128C7E] transition hover:bg-[#25D366]/15 md:flex"><MessageCircle size={14}/> WhatsApp</a>
            <Link href="/quote" className="hidden items-center gap-2 rounded-full bg-[#10a89e] px-5 py-3 text-[11px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#087c76] lg:flex">Get a Quote <ArrowRight size={14}/></Link>
            <button className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 lg:hidden" onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation">{open ? <X size={20}/> : <Menu size={20}/>}</button>
          </div>
        </div>

        {open && <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"><div className="container grid gap-1">
          {links.map(([href,label]) => <Link key={href} href={href} onClick={()=>setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">{label}</Link>)}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={()=>setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"><MessageCircle size={16}/> WhatsApp {business.phone}</a>
          <a href={`tel:${business.phone}`} onClick={()=>setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#08263f]">Call {business.phone}</a>
          <Link href="/quote" onClick={()=>setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-[#10a89e] px-4 py-3 text-sm font-semibold text-white">Get a Quote <ArrowRight size={15}/></Link>
        </div></div>}
      </header>
    </>
  );
}