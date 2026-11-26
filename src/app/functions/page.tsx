import Header from "@/components/Header";
import Footer from "@/components/Footer";
import functions from "@/data/functions.json";

export default function FunctionsPage() {
  return (
    <main>
      <Header />
      <section className="composition-hero" aria-labelledby="functions-title">
        <div className="composition-hero-content">
          <p className="composition-kicker">{functions.hero.eyebrow}</p>
          <h1 id="functions-title">{functions.hero.title}</h1>
          <nav className="composition-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{functions.hero.breadcrumbLabel}</span>
          </nav>
        </div>
      </section>

      <section className="functions-content" aria-labelledby="functions-process-title">
        <section className="functions-process" aria-labelledby="functions-process-title">
          <h2 id="functions-process-title">{functions.process.heading}</h2>
          <div className="functions-process-grid">
            {functions.process.steps.map((step, index) => (
              <article className="functions-process-step" key={step.title}>
                <span className="functions-process-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="functions-process-bar" aria-hidden="true"><span /><span /><span /><span /></div>
        </section>

        <section className="functions-list-section" aria-labelledby="functions-list-title">
          <div className="functions-list-heading">
            <div>
              <p className="eyebrow">{functions.functions.eyebrow}</p>
              <h2 id="functions-list-title">{functions.functions.title[0]} <em>{functions.functions.title[1]}</em></h2>
            </div>
            <span className="functions-count">{String(functions.functions.items.length).padStart(2, "0")} responsibilities</span>
          </div>
          <ol className="functions-list">
            {functions.functions.items.map((item, index) => (
              <li key={item}>
                <span className="functions-list-index">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <span className="functions-list-check" aria-hidden="true">✓</span>
              </li>
            ))}
          </ol>
        </section>
      </section>
      <Footer />
    </main>
  );
}