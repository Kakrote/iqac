"use client";

import { useEffect, useState } from "react";
import site from "@/data/site.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="top-strip" />
      <header className={`site-header${isMenuOpen ? " menu-open" : ""}`}>
        <a className="brand" href="#top" aria-label={`${site.brand.name} home`}>
          <span className="brand-symbol">UU</span>
          <span>{site.brand.name}<small>{site.brand.subtitle}</small></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {site.navigation.primary.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>)}
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <button
          className="menu-backdrop"
          type="button"
          aria-label="Close navigation"
          aria-hidden={!isMenuOpen}
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
        />
        <nav className="menu-panel" id="mobile-navigation" aria-label="Menu navigation" aria-hidden={!isMenuOpen}>
            <button className="menu-close" type="button" aria-label="Close navigation" onClick={() => setIsMenuOpen(false)}>
              <span /><span />
            </button>
            <div className="desktop-menu-links">
              {site.navigation.secondary.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>
              ))}
            </div>
            <div className="mobile-menu-links">
              {[...site.navigation.primary, ...site.navigation.secondary].map((item) => (
                <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>
              ))}
            </div>
        </nav>
      </header>
    </>
  );
}
