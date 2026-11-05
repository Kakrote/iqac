import Reveal from "@/components/Reveal";
import images from "@/data/images.json";
import site from "@/data/site.json";

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`placeholder ${className}`} role="img" aria-label={`${label} placeholder image`}><span>{label}</span></div>;
}

export default function NewsEvents() {
  return (
    <section id="sustainability" className="news section-shell">
      <Reveal className="section-heading"><h2>{site.news.title[0]} <em>{site.news.title[1]}</em></h2><p>{site.news.text}</p></Reveal>
      <div className="news-grid">
        {site.news.items.map((item, index) => (
          <article key={`${item.title}-${index}`}>
            <Placeholder label={images.news.label} />
            <div><span>{item.category}</span><time>{item.date}</time><h3>{item.title}</h3><a href="#top" aria-label={`Read ${item.title}`}>↗</a></div>
          </article>
        ))}
      </div>
      <div className="section-action"><a className="blue-button" href="#sustainability">{site.news.viewMore}<span>↗</span></a></div>
    </section>
  );
}
