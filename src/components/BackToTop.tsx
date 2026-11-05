"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { getLenis } from "@/components/SmoothScroll";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const arrow = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 600);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  useEffect(() => {
    if (!button.current) return;

    gsap.to(button.current, {
      autoAlpha: isVisible ? 1 : 0,
      y: isVisible ? 0 : 14,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });
  }, [isVisible]);

  const scrollToTop = () => {
    getLenis()?.scrollTo(0, { duration: 1.2 });
    if (!getLenis()) window.scrollTo({ top: 0, behavior: "smooth" });
    if (arrow.current) {
      gsap.fromTo(arrow.current, { y: 4 }, { y: -4, duration: 0.25, yoyo: true, repeat: 1, ease: "power2.out" });
    }
  };

  return (
    <button
      className={`back-to-top${isVisible ? " is-visible" : ""}`}
      ref={button}
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <span ref={arrow} aria-hidden="true">↑</span>
    </button>
  );
}
