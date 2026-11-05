"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import site from "@/data/site.json";

export default function AccreditationCarousel() {
    const slide = useRef<HTMLDivElement>(null);
    const animation = useRef<gsap.core.Tween | null>(null);
    const badges = site.accreditation.badges;

    useLayoutEffect(() => {
        if (!slide.current) return;

        const context = gsap.context(() => {
            animation.current = gsap.to(slide.current, {
                xPercent: -50,
                duration: Math.max(12, badges.length * 3.5),
                ease: "none",
                repeat: -1,
            });
        }, slide.current);

        return () => {
            animation.current = null;
            context.revert();
        };
    }, [badges.length]);

    const setPaused = (paused: boolean) => {
        animation.current?.timeScale(paused ? 0 : 1);
    };

    const scrollingBadges = [...badges, ...badges];

    return (
        <div
            className="accreditation-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="accreditation-viewport" aria-label="Accreditation badges scrolling right to left">
                <div ref={slide} className="accreditation-slide" style={{ width: `${(scrollingBadges.length / 3) * 100}%` }}>
                    {scrollingBadges.map((badge, index) => (
                        <div className="accreditation-badge" key={`${badge.asset}-${index}`} style={{ flexBasis: `${100 / scrollingBadges.length}%` }}>
                            <div className="badge-placeholder">
                                <img src={badge.asset} alt={badge.label} />
                            </div>
                            <span className="badge-label">{badge.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
