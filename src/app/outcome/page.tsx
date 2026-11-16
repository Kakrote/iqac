import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OutcomeBadgeCarousel from "@/components/OutcomeBadgeCarousel";
import VideoGallery from "@/components/VideoGallery";
import NewsEvents from "@/components/NewsEvents";
import outcome from "@/data/outcome.json";

export default function OutcomePage() {
  return (
    <main>
      <Header />
      <section className="outcome-hero" aria-labelledby="outcome-title">
        <div className="outcome-shell">
          <Reveal><h1 id="outcome-title">{outcome.hero.title[0]}<br /><em>{outcome.hero.title[1]}</em></h1></Reveal>
          <OutcomeBadgeCarousel badges={outcome.hero.badges} previousLabel={outcome.hero.previousLabel} nextLabel={outcome.hero.nextLabel} />
        </div>
      </section>
      <section className="outcome-initiatives outcome-shell" aria-labelledby="initiatives-title">
        <Reveal className="outcome-section-heading"><h2 id="initiatives-title">{outcome.initiatives.title[0]}<br /><em>{outcome.initiatives.title[1]}</em></h2></Reveal>
        <div className="outcome-initiative-grid">
          {outcome.initiatives.items.map((item) => <article className="outcome-initiative" key={item.title}><img src={item.asset} alt={item.alt} /><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}
          <a className="outcome-view-all" href="#videos">{outcome.initiatives.viewAll}</a>
        </div>
      </section>
      <section className="outcome-quote" aria-label="University principle"><p>{outcome.quote.lines[0]}<br /><em>{outcome.quote.lines[1]}</em></p></section>
      <VideoGallery />
      <NewsEvents />
      <Footer />
    </main>
  );
}