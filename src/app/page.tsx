import Reveal from "@/components/Reveal";
import images from "@/data/images.json";
import site from "@/data/site.json";
import LeadershipCarousel from "@/components/LeadershipCarousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationCarousel from "@/components/AccreditationCarousel";
import NewsEvents from "@/components/NewsEvents";
import VideoGallery from "@/components/VideoGallery";

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
    return <div className={`placeholder ${className}`} role="img" aria-label={`${label} placeholder image`}><span>{label}</span></div>;
}

export default function Home() {
    return (
        <main>
            <Header />


            {/* hero section  */}

            <section id="top" className="hero section-shell">
                <Reveal className="hero-copy">
                    <p className="eyebrow">{site.hero.eyebrow}</p>
                    <h1>{site.hero.title[0]}<br />{site.hero.title[1]}<br /><em>{site.hero.title[2]}</em></h1>
                    <p className="hero-intro">{site.hero.intro}</p>
                </Reveal>
                <Reveal className="hero-media"><img className="hero-image" src={images.hero.src} alt={images.hero.alt} /></Reveal>
            </section>


            {/* mission and vision section */}

            <section id="teams" className="iqac-section">
                <div className="iqac-intro">
                    <Reveal><p className="eyebrow light">{site.iqac.eyebrow}</p><h2>{site.iqac.title}</h2><p>{site.iqac.subtitle}</p></Reveal>
                    <div className="metrics">
                        {site.iqac.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
                    </div>
                    <div className="principle-panels">
                        {site.iqac.panels.map((panel) => {
                            const image = panel.title === "Vision" ? images.vision : images.objectives;
                            return <article key={panel.title}>
                                <div className="panel-image-wrap">
                                    <img className="panel-image" src={image.src} alt={image.alt} />
                                </div>
                                <div className="panel-copy">
                                    <h3>{panel.title}
                                    </h3>
                                    <p>{panel.text}

                                    </p>
                                </div>
                            </article>;
                        })}
                    </div>
                </div>
                <div className="director-card"><Placeholder label={images.director.label} /><div className="director-copy"><p className="eyebrow light">{site.iqac.director.role}</p><h2>{site.iqac.director.name}</h2><p>{site.iqac.director.text}</p></div></div>
            </section>


            {/* Approvals, Accreditation, Memberships & Rankings section*/}

            <section id="outcomes" className="accreditation section-shell">
                <Reveal><h2>{site.accreditation.title[0]}<br />{site.accreditation.title[1]}<br /><em>{site.accreditation.title[2]}</em></h2></Reveal>
                <AccreditationCarousel />
            </section>

            {/* University Quality Statement section*/}

            <section className="statement section-shell">
                <Reveal className="statement-copy"><h2>{site.statement.title[0]}<br />{site.statement.title[1]}</h2><p>{site.statement.text}</p><a className="blue-button" href="#publications">{site.statement.action}<span>↗</span></a></Reveal>
                <Reveal><Placeholder label={images.statement.label} className="wide-placeholder" /></Reveal>
            </section>


            <VideoGallery />

            {/* Leadership section */}

            <section className="leadership section-shell">
                <Reveal className="leadership-copy"><h2>{site.leadership.title}</h2><p>{site.leadership.text}</p></Reveal>
                <LeadershipCarousel />
            </section>


            {/* Publications section */}

            <section id="publications" className="publication section-shell">
                <Reveal><h2>{site.publications.title[0]}<br /><em>{site.publications.title[1]}</em></h2><p>{site.publications.text}</p></Reveal>
                <Reveal><Placeholder label={images.publication.label} className="publication-placeholder" /></Reveal>
            </section>


            <NewsEvents />

            <Footer />
        </main>
    );
}
