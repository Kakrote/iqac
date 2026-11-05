import Reveal from "@/components/Reveal";
import images from "@/data/images.json";
import site from "@/data/site.json";

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`placeholder ${className}`} role="img" aria-label={`${label} placeholder image`}><span>{label}</span></div>;
}

export default function VideoGallery() {
  return (
    <section id="videos" className="video-section">
      <div className="section-shell section-heading"><Reveal><h2>{site.videos.title}</h2><p>{site.videos.text}</p></Reveal></div>
      <div className="video-grid">
        {site.videos.items.map((video, index) => (
          <article key={`${video.title}-${index}`}>
            <Placeholder label={images.video.label} />
            <div className="video-caption"><span>{video.date}</span><p>{video.role}</p><h3>{video.title}</h3></div>
          </article>
        ))}
      </div>
      <div className="section-action"><a className="blue-button" href="#videos">{site.videos.viewMore}<span>↗</span></a></div>
    </section>
  );
}
