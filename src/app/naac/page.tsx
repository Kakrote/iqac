import Header from "@/components/Header";
import Footer from "@/components/Footer";
import naac from "@/data/naac.json";

export default function NAACPage() {
  return (
    <main>
      <Header />
      <section className="composition-hero" aria-labelledby="naac-title">
        <div className="composition-hero-content">
          <p className="composition-kicker">{naac.hero.eyebrow}</p>
          <h1 id="naac-title">{naac.hero.title}</h1>
          <nav className="composition-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{naac.hero.breadcrumbLabel}</span>
          </nav>
        </div>
      </section>

      <section className="naac-content" aria-label="NAAC documents">
        <div className="naac-document-grid">
          {naac.documents.map((document) => (
            <a
              className={`naac-document-card${document.featured ? " naac-document-featured" : ""}`}
              href={document.pdf}
              target="_blank"
              rel="noopener noreferrer"
              key={document.title}
              aria-label={`Open ${document.title} PDF`}
            >
              <span className="naac-document-preview">
                {document.preview ? (
                  <img src={document.preview} alt="" />
                ) : (
                  <span className="naac-pdf-mark"><b>PDF</b><small>NAAC</small></span>
                )}
              </span>
              <span className="naac-document-title">{document.title}</span>
              <span className="naac-open-mark" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
