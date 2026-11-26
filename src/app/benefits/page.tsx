import Header from "@/components/Header";
import Footer from "@/components/Footer";
import benefits from "@/data/benefits.json";

export default function BenefitsPage() {
  return (
    <main>
      <Header />
      <section className="composition-hero" aria-labelledby="benefits-title">
        <div className="composition-hero-content">
          <p className="composition-kicker">{benefits.hero.eyebrow}</p>
          <h1 id="benefits-title">{benefits.hero.title}</h1>
          <nav className="composition-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{benefits.hero.breadcrumbLabel}</span>
          </nav>
        </div>
      </section>

      <section className="benefits-content" aria-labelledby="benefits-list-title">
        <blockquote className="benefits-spirit">
          <p className="benefits-spirit-eyebrow">{benefits.spirit.eyebrow}</p>
          <h2>{benefits.spirit.title}</h2>
          <p>{benefits.spirit.text.split(benefits.spirit.emphasis)[0]}
            <strong>{benefits.spirit.emphasis}</strong>
            {benefits.spirit.text.split(benefits.spirit.emphasis)[1]}
          </p>
        </blockquote>

        <section className="benefits-overview" aria-labelledby="benefits-list-title">
          <div className="benefits-heading">
            <div>
              <p className="eyebrow">{benefits.benefits.eyebrow}</p>
              <h2 id="benefits-list-title">{benefits.benefits.title[0]} <em>{benefits.benefits.title[1]}</em></h2>
            </div>
            <span className="benefits-count">{String(benefits.benefits.items.length).padStart(2, "0")} outcomes</span>
          </div>
          <ol className="benefits-grid">
            {benefits.benefits.items.map((item, index) => (
              <li className="benefit-item" key={item}>
                <span className="benefit-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="benefit-dot" aria-hidden="true" />
                <h3>{item}</h3>
              </li>
            ))}
          </ol>
        </section>

        <section className="benefits-contributions" aria-labelledby="benefits-contributions-title">
          <div className="benefits-heading">
            <div>
              <p className="eyebrow">{benefits.contributions.eyebrow}</p>
              <h2 id="benefits-contributions-title">{benefits.contributions.title[0]} <em>{benefits.contributions.title[1]}</em></h2>
            </div>
          </div>
          <ol className="benefits-contribution-list">
            {benefits.contributions.items.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <span className="benefits-check" aria-hidden="true">✓</span>
              </li>
            ))}
          </ol>
        </section>
      </section>
      <Footer />
    </main>
  );
}