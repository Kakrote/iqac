"use client";

import { useState } from "react";

type Badge = { label: string; asset: string };

export default function OutcomeBadgeCarousel({ badges, previousLabel, nextLabel }: { badges: Badge[]; previousLabel: string; nextLabel: string }) {
  const [offset, setOffset] = useState(0);
  const scrollingBadges = [...badges, ...badges];

  return (
    <div className="outcome-badge-carousel">
      <button type="button" className="outcome-carousel-button" aria-label={previousLabel} onClick={() => setOffset((current) => (current - 1 + badges.length) % badges.length)}>‹</button>
      <div className="outcome-badge-viewport">
        <div className="outcome-badge-grid" style={{ transform: `translateX(-${offset * 25}%)` }}>
          {scrollingBadges.map((badge, index) => <div className="outcome-badge" key={`${badge.asset}-${index}`}><img src={badge.asset} alt={badge.label} /></div>)}
        </div>
      </div>
      <button type="button" className="outcome-carousel-button" aria-label={nextLabel} onClick={() => setOffset((current) => (current + 1) % badges.length)}>›</button>
    </div>
  );
}