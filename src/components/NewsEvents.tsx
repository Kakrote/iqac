import Reveal from "@/components/Reveal";
import images from "@/data/images.json";
import site from "@/data/site.json";

export type NewsEventsData = {
  title: string[];
  text: string;
  viewMore?: string;
  items: { category: string; date: string; title: string; asset?: string }[];
};

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`placeholder ${className}`} role="img" aria-label={`${label} placeholder image`}><span>{label}</span></div>;
}

export default function NewsEvents({ data = site.news }: { data?: NewsEventsData }) {
  return (
    <section id="sustainability" className="news section-shell">
      <Reveal className="section-heading"><h2>{data.title[0]} <em>{data.title[1]}</em></h2><p>{data.text}</p></Reveal>
      <div className="news-grid">
        {data.items.map((item, index) => (
          <article key={`${item.title}-${index}`}>
            {item.asset ? <img className="news-image" src={item.asset} alt="" /> : <Placeholder label={images.news.label} />}
            <div><span>{item.category}</span><time>{item.date}</time><h3>{item.title}</h3><a href="#top" aria-label={`Read ${item.title}`}>↗</a></div>
          </article>
        ))}
      </div>
      {data.viewMore && <div className="section-action"><a className="blue-button" href="#sustainability">{data.viewMore}<span>↗</span></a></div>}
    </section>
  );
}
