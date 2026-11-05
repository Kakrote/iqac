"use client";

import { useState } from "react";
import images from "@/data/images.json";
import site from "@/data/site.json";

export default function LeadershipCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const messages = site.leadership.messages;
  const activeMessage = messages[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + messages.length) % messages.length);
  };

  return (
    <div className="leader-carousel">
      <div className="leader-profile">
        <div className="placeholder"><span>{images.leader.label}</span></div>
        <div>
          <p>{activeMessage.quote}</p>
          <h3>{activeMessage.name}</h3>
          <span>{activeMessage.role}</span>
        </div>
      </div>
      <div className="carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous leadership message">←</button>
        <span>{String(activeIndex + 1).padStart(2, "0")} / {String(messages.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => move(1)} aria-label="Next leadership message">→</button>
      </div>
    </div>
  );
}
