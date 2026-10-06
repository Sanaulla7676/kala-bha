import Link from "next/link";
import { ArrowRight, CarFront, MapPin, ShieldCheck, Star, type LucideIcon } from "lucide-react";
import MotionShell from "@/components/MotionShell";
import { business } from "@/lib/data";
const items: Array<[LucideIcon,string,string]> = [
  [MapPin,"Bhadravathi-first","Local route knowledge"],
  [CarFront,"Vehicle options","Sedan, SUV and group travel"],
  [ShieldCheck,"Clear planning","Quotes before confirmation"],
  [Star,"5.0 rating","12 Google reviews"]
];
export default function AboutPage(){return <MotionShell><main><section className="container py-24"><div className="scroll-reveal max-w-3xl"><div className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#10a89e]">About us</div><h1 className="mt-3 text-5xl font-semibold tracking-tight text-[#08263f] md:text-6xl">Local knowledge. Practical travel.</h1><p className="mt-6 text-lg leading-8 text-slate-500">Sri Kala Bhairava Holidays is a local tour and vehicle rental service based in Hosamane, Bhadravathi, built around straightforward planning and dependable support.</p></div><div className="mt-14 grid gap-5 md:grid-cols-4">{items.map(([Icon,t,d])=><div key={t} className="scroll-reveal rounded-2xl border border-slate-100 p-6 soft-shadow"><Icon className="text-[#10a89e]" size={24}/><h2 className="mt-5 font-semibold text-[#08263f]">{t}</h2><p className="mt-2 text-sm text-slate-500">{d}</p></div>)}</div><div className="mt-14 rounded-3xl bg-[#08263f] p-8 text-white md:p-12"><h2 className="text-3xl font-semibold">Ready to plan?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/70">{business.address}</p><Link href="/quote" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#10a89e] px-5 py-3 text-sm font-semibold">Get a Quote <ArrowRight size={15}/></Link></div></section></main></MotionShell>}