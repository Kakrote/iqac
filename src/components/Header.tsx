import site from "@/data/site.json";

export default function Header() {
  return (
    <>
      <div className="top-strip" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${site.brand.name} home`}>
          <span className="brand-symbol">UU</span>
          <span>{site.brand.name}<small>{site.brand.subtitle}</small></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {site.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <button className="menu-button" aria-label="Open navigation"><span /><span /><span /></button>
      </header>
    </>
  );
}
