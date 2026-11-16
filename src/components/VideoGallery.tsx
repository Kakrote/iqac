import Reveal from "@/components/Reveal";
import images from "@/data/images.json";
import site from "@/data/site.json";

export type VideoGalleryData = {
  title: string;
  text: string;
  viewMore?: string;
  items: { date: string; role: string; title: string; asset?: string }[];
};

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`placeholder ${className}`} role="img" aria-label={`${label} placeholder image`}><span>{label}</span></div>;
}

export default function VideoGallery({ data = site.videos }: { data?: VideoGalleryData }) {
  return (
    <section id="videos" className="video-section">
      <div className="section-shell section-heading"><Reveal><h2>{data.title}</h2><p>{data.text}</p></Reveal></div>
      <div className="video-grid">
        {data.items.map((video, index) => (
          <article key={`${video.title}-${index}`}>
            {video.asset ? <img className="video-image" src={video.asset} alt="" /> : <Placeholder label={images.video.label} />}
            <div className="video-caption"><span>{video.date}</span><p>{video.role}</p><h3>{video.title}</h3></div>
          </article>
        ))}
      </div>
      {data.viewMore && <div className="section-action"><a className="blue-button" href="#videos">{data.viewMore}<span>↗</span></a></div>}
    </section>
  );
}
