"use client";
import { FormEvent, ReactNode, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function FormShell({kind,children}:{kind:"quote"|"booking";children:ReactNode}){
  const [done,setDone]=useState(false);
  const [saving,setSaving]=useState(false);

  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    setSaving(true);
    const raw=Object.fromEntries(new FormData(e.currentTarget));
    const payload=kind==="quote"
      ? {name:String(raw.name||""),phone:String(raw.phone||""),email:String(raw.email||""),destination:String(raw.destination||""),travel_dates:String(raw.travelDates||""),travellers:String(raw.travellers||""),message:String(raw.message||"")}
      : {name:String(raw.name||""),phone:String(raw.phone||""),trip:String(raw.trip||""),travel_date:String(raw.date||""),travellers:String(raw.travellers||""),vehicle:String(raw.vehicle||""),notes:String(raw.notes||"")};

    let stored=false;
    if(API){
      try{
        const res=await fetch(API.replace(/\/$/,"") + (kind==="quote"?"/leads":"/bookings"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
        stored=res.ok;
      }catch{}
    }

    const key=kind==="quote"?"skbh_leads":"skbh_bookings";
    const arr=JSON.parse(localStorage.getItem(key)||"[]");
    arr.push({...payload,id:crypto.randomUUID(),createdAt:new Date().toISOString(),serverStored:stored});
    localStorage.setItem(key,JSON.stringify(arr));
    setDone(true);
    setSaving(false);
    e.currentTarget.reset();
  }

  return <>{done&&<div className="mb-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">Request received. {API?"The API was contacted and the browser copy was also retained for resilience.":"Set NEXT_PUBLIC_API_URL to persist this request in the FastAPI + Neon backend."}</div>}<form onSubmit={submit} className="grid gap-4">{children}<button disabled={saving} className="rounded-full bg-[#10a89e] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#087c76] disabled:cursor-not-allowed disabled:opacity-60" type="submit">{saving?"Sending…":kind==="quote"?"Submit Quote Request":"Request Booking"}</button></form></>;
}