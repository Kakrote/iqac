import Header from "@/components/Header";
import Footer from "@/components/Footer";
import nirf from "@/data/nirf.json";

export default function NIRFPage() {
  return (
    <main>
      <Header />
      <section className="composition-hero" aria-labelledby="nirf-title">
        <div className="composition-hero-content">
          <p className="composition-kicker">{nirf.hero.eyebrow}</p>
          <h1 id="nirf-title">{nirf.hero.title}</h1>
          <nav className="composition-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{nirf.hero.breadcrumbLabel}</span>
          </nav>
        </div>
      </section>

      <section className="ranking-pdf-content" aria-label="NIRF PDF documents">
        <div className="ranking-pdf-grid">
          {nirf.documents.map((document, index) => (
            <a className="ranking-pdf-card" href={document.pdf} target="_blank" rel="noopener noreferrer" key={document.title} aria-label={`Open ${document.title} PDF`}>
              <span className="ranking-pdf-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="ranking-pdf-icon" aria-hidden="true"><b>PDF</b><small>NIRF</small></span>
              <h2>{document.title}</h2>
              <span className="ranking-pdf-open">Open document <b aria-hidden="true">↗</b></span>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
