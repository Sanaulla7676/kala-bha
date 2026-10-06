"use client";

import { CalendarDays, MapPin, Search, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function TripSearch() {
  const router = useRouter();
  const [destination,setDestination] = useState("");
  const [adults,setAdults] = useState("2");
  const [children,setChildren] = useState("0");

  function submit(e:FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if(destination) params.set("destination",destination);
    params.set("adults",adults);
    params.set("children",children);
    router.push("/tours?" + params.toString());
  }

  return (
    <form onSubmit={submit} className="search-card soft-shadow grid overflow-hidden rounded-2xl bg-white md:grid-cols-[1.4fr_1fr_1fr_1.05fr_auto]">
      <label className="flex items-center gap-3 border-b border-slate-100 p-4 md:border-b-0 md:border-r">
        <MapPin className="text-[#10a89e]" size={20}/>
        <span className="min-w-0"><small className="block text-[9px] font-semibold uppercase tracking-[.16em] text-slate-400">Destination</small><input value={destination} onChange={e=>setDestination(e.target.value)} placeholder="Where to?" className="w-full bg-transparent text-[13px] font-medium outline-none placeholder:text-slate-400"/></span>
      </label>
      <label className="flex items-center gap-3 border-b border-slate-100 p-4 md:border-b-0 md:border-r">
        <CalendarDays className="text-[#10a89e]" size={20}/><span><small className="block text-[9px] font-semibold uppercase tracking-[.16em] text-slate-400">Check in</small><input type="date" className="text-[12px] text-slate-600 outline-none"/></span>
      </label>
      <label className="flex items-center gap-3 border-b border-slate-100 p-4 md:border-b-0 md:border-r">
        <CalendarDays className="text-[#10a89e]" size={20}/><span><small className="block text-[9px] font-semibold uppercase tracking-[.16em] text-slate-400">Check out</small><input type="date" className="text-[12px] text-slate-600 outline-none"/></span>
      </label>
      <label className="flex items-center gap-3 border-b border-slate-100 p-4 md:border-b-0 md:border-r">
        <Users className="text-[#10a89e]" size={20}/><span><small className="block text-[9px] font-semibold uppercase tracking-[.16em] text-slate-400">Travellers</small><span className="flex items-center gap-2 text-[12px]"><input aria-label="Adults" value={adults} onChange={e=>setAdults(e.target.value)} className="w-8 bg-transparent outline-none"/> Adults · <input aria-label="Children" value={children} onChange={e=>setChildren(e.target.value)} className="w-8 bg-transparent outline-none"/> Child</span></span>
      </label>
      <button type="submit" className="flex items-center justify-center gap-2 bg-[#10a89e] px-5 py-4 text-[12px] font-semibold text-white transition hover:bg-[#087c76]"><Search size={16}/> Search Tours</button>
    </form>
  );
}