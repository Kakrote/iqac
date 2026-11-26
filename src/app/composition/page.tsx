import Header from "@/components/Header";
import Footer from "@/components/Footer";
import composition from "@/data/composition.json";

export default function CompositionPage() {
    return (
        <main>
            <Header />
            <section className="composition-hero" aria-labelledby="composition-title">
                <div className="composition-hero-content">
                    <p className="composition-kicker">{composition.hero.eyebrow}</p>
                    <h1 id="composition-title">{composition.hero.title[0]} <em>{composition.hero.title[1]}</em></h1>
                    <nav className="composition-breadcrumb" aria-label="Breadcrumb">
                        <a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{composition.hero.breadcrumbLabel}</span>
                    </nav>
                </div>
            </section>

            <section className="composition-content" aria-labelledby="composition-groups-title">
                <div className="composition-heading">
                    <div>
                        <p className="eyebrow">{composition.content.eyebrow}</p>
                        <h2 id="composition-groups-title">{composition.content.title[0]} <em>{composition.content.title[1]}</em></h2>
                    </div>
                    <p className="composition-intro">{composition.content.intro}</p>
                </div>

                <p className="composition-note">{composition.content.note}</p>

                <div className="composition-groups">
                    {composition.groups.map((group, index) => (
                        <details className="composition-group" key={group.title} open={index === 0}>
                            <summary>
                                <span className="composition-group-index">{String(index + 1).padStart(2, "0")}</span>
                                <span className="composition-group-title">{group.title}</span>
                                <span className="composition-group-meta">
                                    {group.members.length > 0
                                        ? `${group.members.length} ${group.members.length === 1 ? "member" : "members"}`
                                        : "No members added"}
                                </span>
                                <span className="composition-toggle" aria-hidden="true" />
                            </summary>
                            {group.members.length > 0 ? (
                                <div className="composition-group-body">
                                    {group.members.map((member, memberIndex) => (
                                        <article className="composition-person" key={`${member.name}-${memberIndex}`}>
                                            <span className="composition-person-mark" aria-hidden="true">{member.initials ?? member.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("")}</span>
                                            <div className="composition-person-name">
                                                <p className="composition-person-role">{group.title}</p>
                                                <h3>{member.name}</h3>
                                                <p>{member.role}</p>
                                            </div>
                                            <span className="composition-person-number">{String(memberIndex + 1).padStart(2, "0")}</span>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <div className="composition-group-body composition-empty-state">
                                    <span aria-hidden="true">—</span>
                                    <p>{composition.content.emptyState}</p>
                                </div>
                            )}
                        </details>
                    ))}
                </div>
                <p className="composition-footnote"><span aria-hidden="true">*</span> {composition.content.footnote}</p>
            </section>
            <Footer />
        </main>
    );
}