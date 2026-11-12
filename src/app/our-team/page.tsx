import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoGallery from "@/components/VideoGallery";
import NewsEvents from "@/components/NewsEvents";
import Reveal from "@/components/Reveal";
import teamData from "@/data/ourteam.json";

const team = teamData.members;
const criteria = teamData.criteria.items;

function TeamPortrait({ member }: { member: (typeof team)[number] }) {
    return (
        <article className="team-member">
            <div className={`team-portrait ${member.tone}`} aria-label={`${member.name} portrait placeholder`}>
                <span>{member.initials}</span>
            </div>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
        </article>
    );
}

export default function OurTeamPage() {
    return (
        <main>
            <Header />
            <section className="team-intro section-shell" id="teams">
                <Reveal className="team-intro-heading">
                    <p className="eyebrow">{teamData.intro.eyebrow}</p>
                    <h1>{teamData.intro.title[0]} <em>{teamData.intro.title[1]}</em></h1>
                    <p>{teamData.intro.text}</p>
                </Reveal>
                <div className="team-roster">
                    {team.map((member) => <TeamPortrait key={member.name} member={member} />)}
                </div>
            </section>

            <section className="criteria-section" aria-labelledby="criteria-title">
                <div className="section-shell">
                    <Reveal className="criteria-heading">
                        <p className="eyebrow light">{teamData.criteria.eyebrow}</p>
                        <h2 id="criteria-title">{teamData.criteria.title[0]} <em>{teamData.criteria.title[1]}</em></h2>
                    </Reveal>
                    <div className="criteria-grid">
                        {criteria.map((criterion) => (
                            <article className="criterion-card" key={criterion.number}>
                                <span className="criterion-number">{criterion.number}</span>
                                <h3>{criterion.title}</h3>
                                <div className="criterion-lead">
                                    <span className="criterion-avatar">{criterion.lead.slice(0, 1)}</span>
                                    <span><strong>{criterion.lead}</strong><small>{criterion.role}</small></span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <VideoGallery />
            <NewsEvents />
            <Footer />
        </main>
    );
}