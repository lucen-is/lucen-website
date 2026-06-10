"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeScrollEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (process.env.NODE_ENV === "development") {
      (window as unknown as Record<string, unknown>).__gsap = gsap;
      (window as unknown as Record<string, unknown>).__st = ScrollTrigger;
    }
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        "[data-hero] > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "all",
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        gsap.fromTo(
          group.children,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
