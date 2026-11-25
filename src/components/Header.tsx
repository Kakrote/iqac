"use client";

import { useEffect, useState } from "react";
import site from "@/data/site.json";

type NavigationItem = {
  label: string;
  href?: string;
  children?: NavigationItem[];
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdownKey, setOpenDropdownKey] = useState<string | null>(null);
  const mobileNavigation: NavigationItem[] = [...site.navigation.primary, ...site.navigation.secondary];

  const renderNavigationItems = (items: NavigationItem[], menu: "desktop" | "mobile") =>
    items.map((item, index) => {
      const dropdownKey = `${menu}-${index}`;
      const isDropdownOpen = openDropdownKey === dropdownKey;
      const submenuId = `${dropdownKey}-submenu`;
      const hasChildren = Boolean(item.children?.length);

      return (
        <div className={`${menu}-menu-item`} key={`${item.href ?? item.label}-${item.label}`}>
          <div className="menu-item-row">
            {hasChildren ? (
              <button
                className="submenu-trigger"
                type="button"
                aria-expanded={isDropdownOpen}
                aria-controls={submenuId}
                onClick={() => setOpenDropdownKey(isDropdownOpen ? null : dropdownKey)}
              >
                {item.label}<span className="submenu-chevron" aria-hidden="true" />
              </button>
            ) : (
              <a href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>
            )}
          </div>
          {hasChildren && (
            <div className="submenu" id={submenuId} hidden={!isDropdownOpen}>
              {item.children?.map((child) => (
                <a key={`${child.href ?? child.label}-${child.label}`} href={child.href} onClick={() => setIsMenuOpen(false)}>{child.label}</a>
              ))}
            </div>
          )}
        </div>
      );
    });

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
        <a className="brand" href="/" aria-label={`${site.brand.name} home`}>
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
            {renderNavigationItems(site.navigation.secondary, "desktop")}
          </div>
          <div className="mobile-menu-links">
            {renderNavigationItems(mobileNavigation, "mobile")}
          </div>
        </nav>
      </header>
    </>
  );
}
