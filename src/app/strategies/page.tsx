import Header from "@/components/Header";
import Footer from "@/components/Footer";
import strategies from "@/data/strategies.json";

export default function StrategiesPage() {
    return (
        <main>
            <Header />
            <section className="composition-hero" aria-labelledby="strategies-title">
                <div className="composition-hero-content">
                    <p className="composition-kicker">{strategies.hero.eyebrow}</p>
                    <h1 id="strategies-title">{strategies.hero.title}</h1>
                    <nav className="composition-breadcrumb" aria-label="Breadcrumb">
                        <a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{strategies.hero.breadcrumbLabel}</span>
                    </nav>
                </div>
            </section>

            <section className="strategies-content" aria-labelledby="strategies-cycle-title">
                <div className="strategies-intro">
                    <div>
                        <p className="eyebrow">{strategies.intro.eyebrow}</p>
                        <h2 id="strategies-cycle-title">{strategies.intro.title[0]} <em>{strategies.intro.title[1]}</em></h2>
                    </div>
                    <p>{strategies.intro.text}</p>
                </div>

                <div className="strategies-cycle-heading">
                    <span />
                    <h3>{strategies.intro.cycleTitle}</h3>
                    <span />
                </div>
                <div className="strategies-cycle">
                    {strategies.cycle.map((step, index) => (
                        <article className="strategy-step" key={step.title}>
                            <div className="strategy-step-marker">
                                <span className="strategy-step-number">{String(index + 1).padStart(2, "0")}</span>
                                <span className="strategy-step-focus">{step.focus}</span>
                            </div>
                            <div className="strategy-step-copy">
                                <p>Strategy {String(index + 1).padStart(2, "0")}</p>
                                <h3>{step.title}</h3>
                                <span>{step.description}</span>
                            </div>
                        </article>
                    ))}
                </div>

                <section className="strategies-mechanisms" aria-labelledby="strategies-mechanisms-title">
                    <div className="strategies-mechanisms-heading">
                        <p className="eyebrow">{strategies.mechanisms.eyebrow}</p>
                        <h2 id="strategies-mechanisms-title">{strategies.mechanisms.title[0]} <em>{strategies.mechanisms.title[1]}</em></h2>
                    </div>
                    <ol className="strategy-mechanism-list">
                        {strategies.mechanisms.items.map((item, index) => (
                            <li key={item}>
                                <span className="strategy-mechanism-number">{String(index + 1).padStart(2, "0")}</span>
                                <p>{item}</p>
                                <span className="strategy-mechanism-mark" aria-hidden="true">+</span>
                            </li>
                        ))}
                    </ol>
                </section>


                <section className="strategies-priorities" aria-labelledby="strategies-priorities-title">
                    <div className="strategies-mechanisms-heading">
                        <p className="eyebrow">{strategies.strategies.eyebrow}</p>
                        <h2 id="strategies-priorities-title">{strategies.strategies.title[0]} <em>{strategies.strategies.title[1]}</em></h2>
                    </div>
                    <ol className="strategy-priority-list">
                        {strategies.strategies.items.map((item, index) => (
                            <li key={item.title}>
                                <span className="strategy-mechanism-number">{String(index + 1).padStart(2, "0")}</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>
            </section>
            <Footer />
        </main>
    );
}