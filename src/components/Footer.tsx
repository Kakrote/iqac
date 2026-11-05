import site from "@/data/site.json";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="brand">
          <span className="brand-symbol">UU</span>
          <span>{site.brand.name}<small>{site.brand.subtitle}</small></span>
        </div>
        <p>{site.footer.text}</p>
      </div>
      <div className="footer-bottom">
        <span>{site.brand.name}</span>
        <span>{site.footer.note}</span>
        <span>{site.brand.location}</span>
      </div>
    </footer>
  );
}
