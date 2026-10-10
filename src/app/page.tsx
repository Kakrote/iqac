import Reveal from "@/components/Reveal";

const principles = [
  { number: "01", title: "Clear by design", text: "Every interaction guides students forward with focus, rhythm, and purpose." },
  { number: "02", title: "Bold, never loud", text: "Confident blue foundations meet warm amber moments that reward attention." },
  { number: "03", title: "Built to move", text: "A fluid motion language makes digital experiences feel considered and alive." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Uttaranchal University home">
          <span className="brand-mark">U</span>
          <span>Uttaranchal<br /><b>University</b></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#principles">Principles</a>
          <a href="#palette">Palette</a>
          <a href="#motion">Motion</a>
        </nav>
        <a className="header-action" href="#start">Explore system <span>↗</span></a>
      </header>

      <section id="top" className="hero">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="hero-copy">
          <p className="eyebrow">01 / Foundation</p>
          <h1>Make room<br /><em>to grow.</em></h1>
          <p className="hero-intro">A living design system for a university that moves with curiosity, purpose, and possibility.</p>
          <a className="primary-button" href="#principles">Discover the system <span>↓</span></a>
        </div>
        <div className="hero-note">
          <span className="vertical-line" />
          <p>Uttaranchal University<br /><small>Dehradun · India</small></p>
        </div>
        <div className="hero-scroll">Scroll to explore <span>↓</span></div>
      </section>

      <section id="principles" className="section principles">
        <Reveal><p className="eyebrow blue">02 / Principles</p></Reveal>
        <Reveal><h2>Designed for the<br /><span>next chapter.</span></h2></Reveal>
        <div className="principle-grid">
          {principles.map((principle) => (
            <Reveal key={principle.number} className="principle-card">
              <span className="card-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
              <span className="card-arrow">↗</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="palette" className="palette-section">
        <div className="section palette-heading">
          <Reveal><p className="eyebrow">03 / Color language</p></Reveal>
          <Reveal><h2>Color carries<br /><span>the feeling.</span></h2></Reveal>
          <Reveal><p className="section-copy">A blue-led palette creates a calm, confident canvas. Amber marks the moments that matter.</p></Reveal>
        </div>
        <div className="swatches">
          <div className="swatch swatch-blue"><span>University Blue</span><b>#16437D</b></div>
          <div className="swatch swatch-amber"><span>Amber</span><b>#FCA700</b></div>
          <div className="swatch swatch-sky"><span>Sky</span><b>#A2DAF7</b></div>
          <div className="swatch swatch-page"><span>Page</span><b>#F5F5F5</b></div>
        </div>
      </section>

      <section id="motion" className="section motion-section">
        <Reveal><p className="eyebrow blue">04 / Motion</p></Reveal>
        <div className="motion-layout">
          <Reveal><h2>Stay curious.<br /><span>Keep moving.</span></h2></Reveal>
          <Reveal><p className="section-copy">Lenis smooth scroll and GSAP transitions create a gentle sense of momentum — never distracting, always human.</p></Reveal>
        </div>
        <Reveal className="motion-card">
          <div className="motion-card-line" />
          <span>THE UNIVERSITY OF TOMORROW</span>
          <strong>Learn<br /><i>without limits.</i></strong>
          <span className="motion-card-mark">UU / 2024</span>
        </Reveal>
      </section>

      <footer id="start">
        <div className="footer-top">
          <div><p className="eyebrow">05 / Begin here</p><h2>Build what’s<br /><em>possible.</em></h2></div>
          <a className="primary-button light" href="#top">Back to top <span>↑</span></a>
        </div>
        <div className="footer-bottom"><span>Uttaranchal University</span><span>Design system · v1.0</span><span>Dehradun, India</span></div>
      </footer>
    </main>
  );
}
