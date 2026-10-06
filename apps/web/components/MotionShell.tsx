"use client";

import { PropsWithChildren, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MotionShell({children}:PropsWithChildren) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({ defaults:{ ease:"power3.out" }});

      tl.fromTo(q(".hero-image"), {scale:1.12}, {scale:1, duration:1.7, ease:"power2.out"})
        .fromTo(q(".hero-copy"), {y:40,opacity:0}, {y:0,opacity:1,duration:.9,stagger:.08}, .25)
        .fromTo(q(".hero-word"), {yPercent:120,opacity:0}, {yPercent:0,opacity:1,duration:1,stagger:.045,ease:"expo.out"}, .25)
        .fromTo(q(".search-card"), {y:36,opacity:0}, {y:0,opacity:1,duration:.8}, .85);

      gsap.utils.toArray<HTMLElement>(q(".scroll-reveal")).forEach((el) => {
        gsap.fromTo(el,
          {y:50,opacity:0,clipPath:"inset(0 0 14% 0)"},
          {y:0,opacity:1,clipPath:"inset(0 0 0% 0)",duration:.9,ease:"power3.out",
           scrollTrigger:{trigger:el,start:"top 86%",once:true}});
      });

      gsap.utils.toArray<HTMLElement>(q(".parallax-image")).forEach((el) => {
        gsap.to(el,{yPercent:-8,ease:"none",scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:1}});
      });

      const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      if (canHover) {
        gsap.utils.toArray<HTMLElement>(q(".card-tilt")).forEach((card) => {
          const move=(e:MouseEvent)=>{const r=card.getBoundingClientRect();const rx=((e.clientY-r.top)/r.height-.5)*-3.5;const ry=((e.clientX-r.left)/r.width-.5)*3.5;gsap.to(card,{rotateX:rx,rotateY:ry,transformPerspective:1000,duration:.25,overwrite:true});};
          const leave=()=>gsap.to(card,{rotateX:0,rotateY:0,duration:.5,ease:"power3.out"});
          card.addEventListener("mousemove",move); card.addEventListener("mouseleave",leave);
        });

        gsap.utils.toArray<HTMLElement>(q(".magnetic")).forEach((btn) => {
          const move=(e:MouseEvent)=>{const r=btn.getBoundingClientRect();gsap.to(btn,{x:(e.clientX-r.left-r.width/2)*.12,y:(e.clientY-r.top-r.height/2)*.12,duration:.25});};
          const leave=()=>gsap.to(btn,{x:0,y:0,duration:.5,ease:"elastic.out(1,.45)"});
          btn.addEventListener("mousemove",move);btn.addEventListener("mouseleave",leave);
        });
      }

      gsap.utils.toArray<HTMLElement>(q(".count-up")).forEach((el)=>{
        const target=Number(el.dataset.target||0);
        const obj={v:0};
        gsap.to(obj,{v:target,duration:1.5,ease:"power2.out",scrollTrigger:{trigger:el,start:"top 90%",once:true},onUpdate:()=>{el.textContent=Math.round(obj.v).toString();}});
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}