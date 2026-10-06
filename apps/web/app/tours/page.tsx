import MotionShell from "@/components/MotionShell";
import TravelCard from "@/components/TravelCard";
import { tours } from "@/lib/data";

export default async function ToursPage({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){
  const params=await searchParams;
  const raw=params.destination;
  const q=(Array.isArray(raw)?raw[0]:raw||"").trim().toLowerCase();
  const list=q?tours.filter(t=>(t.title+" "+t.location+" "+t.tags.join(" ")).toLowerCase().includes(q)):tours;

  return <MotionShell><main><section className="container py-20">
    <div className="scroll-reveal max-w-3xl">
      <div className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#10a89e]">Tours</div>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight text-[#08263f] md:text-6xl">Flexible tours. Better road trips.</h1>
      <p className="mt-5 text-base leading-7 text-slate-500">{q?"Showing results for “"+q+"”.":"Explore curated Karnataka routes plus group vehicle options."}</p>
    </div>
    {list.length===0
      ? <div className="mt-12 rounded-3xl border border-slate-100 bg-[#f6faf9] p-8"><h2 className="text-xl font-semibold">No exact match.</h2><p className="mt-2 text-sm text-slate-500">Try a broader destination or request a custom trip.</p></div>
      : <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{list.map(t=><div className="scroll-reveal" key={t.slug}><TravelCard item={t} hrefBase="/tours"/></div>)}</div>
    }
  </section></main></MotionShell>;
}