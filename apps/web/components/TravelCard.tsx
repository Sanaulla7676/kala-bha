import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Star } from "lucide-react";

type Props = { item:{slug:string;title:string;subtitle:string;image:string;location:string;duration:string;price:string;tags:string[]}; hrefBase?:string; };

export default function TravelCard({item,hrefBase="/tours"}:Props){
  return <article className="card-tilt group overflow-hidden rounded-2xl border border-slate-100 bg-white soft-shadow [transform-style:preserve-3d]">
    <Link href={hrefBase + "/" + item.slug}>
      <div className="relative h-64 overflow-hidden">
        <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-[1.06]" sizes="(max-width:768px) 100vw, 33vw" quality={92}/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#08263f]/75 via-transparent to-transparent"/>
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white"><span className="text-[10px] font-medium uppercase tracking-[.18em] text-teal-100">{item.location}</span><h3 className="mt-1 text-xl font-semibold">{item.title}</h3></div>
      </div>
      <div className="p-5">
        <p className="min-h-12 text-sm leading-6 text-slate-500">{item.subtitle}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500"><span className="flex items-center gap-1"><Clock3 size={14} className="text-[#10a89e]"/>{item.duration}</span><span className="flex items-center gap-1"><Star size={14} fill="currentColor" className="text-[#10a89e]"/> 5.0</span></div>
        <div className="mt-5 flex items-center justify-between"><strong className="text-base text-[#10a89e]">{item.price}</strong><span className="inline-flex items-center gap-1 text-xs font-semibold text-[#08263f]">Explore <ArrowRight size={14}/></span></div>
      </div>
    </Link>
  </article>
}