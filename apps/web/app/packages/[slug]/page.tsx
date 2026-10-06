import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import MotionShell from "@/components/MotionShell";
import { packages } from "@/lib/data";

export async function generateStaticParams(){ return packages.map(p=>({slug:p.slug})); }

export default async function PackageDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const pkg=packages.find(p=>p.slug===slug);
  if(!pkg) notFound();

  return <MotionShell><main>
    <section className="relative h-[500px] overflow-hidden bg-[#08263f]">
      <Image src={pkg.image} alt={pkg.title} fill priority className="object-cover hero-image" quality={94}/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#08263f]/88 via-[#08263f]/55 to-transparent"/>
      <div className="container relative flex h-full items-end pb-14 text-white">
        <div className="scroll-reveal max-w-3xl">
          <div className="text-[10px] font-semibold uppercase tracking-[.22em] text-teal-200">Travel Package</div>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">{pkg.title}</h1>
          <p className="mt-4 text-base leading-7 text-white/80">{pkg.subtitle}</p>
        </div>
      </div>
    </section>

    <section className="container grid gap-10 py-20 lg:grid-cols-[1.25fr_.75fr]">
      <div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 soft-shadow"><Clock3 className="text-[#10a89e]"/><strong className="mt-4 block text-sm text-[#08263f]">Duration</strong><span className="text-sm text-slate-500">{pkg.duration}</span></div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 soft-shadow"><ArrowRight className="text-[#10a89e]"/><strong className="mt-4 block text-sm text-[#08263f]">Starting from</strong><span className="text-sm text-slate-500">{pkg.price}</span></div>
        </div>
        <h2 className="mt-12 text-3xl font-semibold text-[#08263f]">A package you can customize.</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600">Start with this route and adjust dates, vehicle, sightseeing, stays and group size through a tailored quotation. The published starting price is an indication, not a promise that ignores your actual requirements.</p>
        <div className="mt-8 space-y-3">
          {["Custom day-by-day itinerary","Vehicle choice based on group size","Sightseeing and stop coordination","Quote before confirmation"].map(item=><div key={item} className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 size={18} className="text-[#10a89e]"/>{item}</div>)}
        </div>
      </div>
      <aside className="h-fit rounded-3xl bg-[#08263f] p-7 text-white soft-shadow">
        <div className="text-[10px] uppercase tracking-[.2em] text-teal-200">Plan this package</div>
        <h2 className="mt-3 text-2xl font-semibold">Make it fit your trip.</h2>
        <p className="mt-3 text-sm leading-6 text-white/70">Share your dates, travellers and vehicle preference.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-[#10a89e] px-5 py-3 text-sm font-semibold">Request Quote <ArrowRight size={15}/></Link>
          <Link href="/booking" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">Book Request</Link>
        </div>
      </aside>
    </section>
  </main></MotionShell>;
}