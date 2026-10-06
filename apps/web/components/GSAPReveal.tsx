"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPReveal() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      gsap.set(q(".hero-copy"), { y: 36, opacity: 0 });
      gsap.set(q(".hero-word"), { yPercent: 120, opacity: 0 });
      gsap.set(q(".hero-image"), { scale: 1.08 });
      gsap.set(q(".search-card"), { y: 28, opacity: 0 });

      const intro = gsap.timeline({ defaults:{ ease:"power3.out" }});
      intro
        .to(q(".hero-image"), { scale:1, duration:1.5, ease:"power2.out" }, 0)
        .to(q(".hero-copy"), { y:0, opacity:1, duration:.9, stagger:.08 }, .25)
        .to(q(".hero-word"), { yPercent:0, opacity:1, duration:1, stagger:.045, ease:"expo.out" }, .25)
        .to(q(".search-card"), { y:0, opacity:1, duration:.8 }, .9);

      gsap.utils.toArray<HTMLElement>(q(".scroll-reveal")).forEach((el) => {
        gsap.fromTo(el, { y:55, opacity:0, clipPath:"inset(0 0 14% 0)" }, {
          y:0, opacity:1, clipPath:"inset(0 0 0% 0)", duration:.9, ease:"power3.out",
          scrollTrigger:{ trigger:el, start:"top 84%", once:true }
        });
      });

      gsap.to(q(".parallax"), {
        yPercent:-10,
        ease:"none",
        scrollTrigger:{ trigger:q(".hero"), start:"top top", end:"bottom top", scrub:1.2 }
      });

      gsap.utils.toArray<HTMLElement>(q(".card-tilt")).forEach((card) => {
        const move = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const rx = ((e.clientY-r.top)/r.height-.5)*-4;
          const ry = ((e.clientX-r.left)/r.width-.5)*4;
          gsap.to(card,{rotateX:rx,rotateY:ry,transformPerspective:900,duration:.25});
        };
        const leave=()=>gsap.to(card,{rotateX:0,rotateY:0,duration:.45,ease:"power2.out"});
        card.addEventListener("mousemove",move);
        card.addEventListener("mouseleave",leave);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={root} className="contents" />;
}