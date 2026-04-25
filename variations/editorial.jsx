// Variation 2 — Editorial Technical
// Instrument Serif (display) + Inter (body) + JetBrains Mono (labels). Magazine layout.

const getED = () => window.PORTFOLIO_DATA;

function EDTicker({ items }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 2200);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <span className="ed-ticker">
      <span className="ed-ticker-inner" style={{ transform: `translateY(-${i * 1.2}em)` }}>
        {items.map((w, idx) => (
          <span key={idx} className="ed-ticker-item">{w}</span>
        ))}
      </span>
    </span>
  );
}

function EDProjectCard({ p, expanded, onToggle, idx }) {
  return (
    <article className={`ed-project ${expanded ? "is-open" : ""}`}>
      <header className="ed-project-head" onClick={onToggle}>
        <div className="ed-project-num">{String(idx + 1).padStart(2, "0")}</div>
        <div className="ed-project-titles">
          <h3 className="ed-project-name">{p.name}</h3>
          <p className="ed-project-tag">{p.tagline}</p>
        </div>
        <div className="ed-project-meta">
          <span className="ed-mono">{p.year}</span>
          <span className="ed-mono ed-fg-3">{p.kind}</span>
        </div>
        <div className="ed-project-toggle">{expanded ? "Close —" : "Read +"}</div>
      </header>
      {expanded && (
        <div className="ed-project-body">
          <div className="ed-project-grid">
            <div>
              <div className="ed-mono ed-label">Synopsis</div>
              <p className="ed-project-summary">{p.summary}</p>
              <div className="ed-mono ed-label" style={{ marginTop: 24 }}>What I built</div>
              <ul className="ed-project-list">
                {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
            <aside className="ed-project-aside">
              <div>
                <div className="ed-mono ed-label">Venue</div>
                <div className="ed-aside-val">{p.venue}</div>
              </div>
              <div>
                <div className="ed-mono ed-label">Stack</div>
                <div className="ed-aside-stack">
                  {p.stack.map((s) => <span className="ed-tag" key={s}>{s}</span>)}
                </div>
              </div>
              <div>
                <div className="ed-mono ed-label">Links</div>
                <div className="ed-aside-links">
                  {p.links.map((l) => <a key={l.label} href={l.href} className="ed-link">{l.label} ↗</a>)}
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </article>
  );
}

function EditorialPortfolio({ accent = "#d97706", mode = "dark", texture = "clean" }) {
  const ED = window.PORTFOLIO_DATA;
  const [openId, setOpenId] = React.useState("medsift");
  const isLight = mode === "light";

  const styleVars = {
    "--ed-accent": accent,
    "--ed-bg": isLight ? "#f7f5f0" : "#161310",
    "--ed-paper": isLight ? "#fffbf2" : "#1d1916",
    "--ed-fg": isLight ? "#1a1410" : "#f5efe5",
    "--ed-fg-2": isLight ? "#5a4f44" : "#b9ad9c",
    "--ed-fg-3": isLight ? "#8a7c6c" : "#7a6f60",
    "--ed-line": isLight ? "rgba(26,20,16,0.14)" : "rgba(245,239,229,0.13)",
    "--ed-line-2": isLight ? "rgba(26,20,16,0.06)" : "rgba(245,239,229,0.06)",
  };

  const textureClass = texture === "grid" ? "ed-tex-grid" : texture === "noise" ? "ed-tex-noise" : "ed-tex-clean";

  return (
    <div className={`ed-root ${textureClass} ${isLight ? "is-light" : "is-dark"}`} style={styleVars}>
      <div className="ed-tex-layer" />

      <header className="ed-masthead">
        <div className="ed-masthead-inner">
          <div className="ed-masthead-left ed-mono">
            <span className="ed-fg-3">{ED.location}</span>
          </div>
          <a href="#top" className="ed-mark">TV<span className="ed-mark-dot">.</span></a>
          <nav className="ed-nav ed-mono">
            <a href="#work">Work</a>
            <a href="#experience">Story</a>
            <a href="#writing">Writing</a>
            <a href="#skills">Toolkit</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="ed-main" id="top">
        {/* HERO */}
        <section className="ed-hero">
          <div className="ed-hero-asym">
            <div className="ed-hero-asym-l">
              <h1 className="ed-h1">
                <span className="ed-h1-line">Tejas Vaidya is a</span>
                <span className="ed-h1-line ed-h1-emph"><EDTicker items={ED.rotators} /></span>
                <span className="ed-h1-line">building things that ship.</span>
              </h1>
            </div>
            <div className="ed-hero-asym-r">
              <figure className="ed-portrait">
                {ED.photo ? (
                  <img src={ED.photo} alt="Tejas Vaidya" />
                ) : (
                  <div className="ed-portrait-ph" aria-label="Portrait placeholder">
                    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <pattern id="ed-stripes" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                          <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="0.6" opacity="0.18" />
                        </pattern>
                      </defs>
                      <rect width="100" height="120" fill="url(#ed-stripes)" />
                      <circle cx="50" cy="44" r="18" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
                      <path d="M 18 120 Q 50 78 82 120 Z" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
                    </svg>
                    <div className="ed-portrait-cap">photo · drop file at /uploads/</div>
                  </div>
                )}
                <figcaption className="ed-portrait-cap-fixed ed-mono">Tejas Vaidya · 2026</figcaption>
              </figure>
            </div>
          </div>
          <div className="ed-hero-cols">
            <p className="ed-lede">
              {ED.about.long}
            </p>
            <div className="ed-hero-side">
              <div className="ed-mono ed-label">Currently</div>
              <p className="ed-side-p">
                Graduate Research Assistant at <strong>Truist Bank</strong>, building production-grade evaluation for an enterprise AI chatbot.
              </p>
              <div className="ed-mono ed-label" style={{ marginTop: 18 }}>Studying</div>
              <p className="ed-side-p">M.S. Data Analytics — Georgia State, 4.0 GPA. Graduating December 2026.</p>
              <div className="ed-hero-actions">
                <a className="ed-btn-primary" href="#work">See the work</a>
                <a className="ed-btn-link ed-mono" href={`mailto:${ED.email}`}>or write to me ↗</a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="ed-strip">
          {ED.stats.map((s, i) => (
            <div className="ed-strip-cell" key={i}>
              <div className="ed-strip-val">{s.value}</div>
              <div className="ed-strip-lab ed-mono">{s.label}</div>
            </div>
          ))}
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="ed-section">
          <div className="ed-section-head">
            <div className="ed-section-num ed-mono">§ 01</div>
            <h2 className="ed-h2">The story so far,<br/><em>in three chapters.</em></h2>
          </div>
          <div className="ed-xp">
            {ED.experience.map((x, i) => (
              <article className="ed-xp-row" key={i}>
                <div className="ed-xp-period ed-mono">{x.period}<br/><span className="ed-fg-3">{x.location}</span></div>
                <div>
                  <h3 className="ed-xp-role">{x.role}<span className="ed-xp-at"> at </span><span className="ed-xp-org">{x.org}</span></h3>
                  <p className="ed-xp-summary">{x.summary}</p>
                  <ul className="ed-xp-bullets">
                    {x.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  <div className="ed-aside-stack">
                    {x.stack.map((s) => <span className="ed-tag" key={s}>{s}</span>)}
                  </div>
                </div>
              </article>
            ))}
            <article className="ed-xp-row">
              <div className="ed-xp-period ed-mono">Education</div>
              <div className="ed-edu-list">
                {ED.education.map((e, i) => (
                  <div className="ed-edu-row" key={i}>
                    <div className="ed-edu-school">{e.school}</div>
                    <div className="ed-edu-degree">{e.degree}{e.detail ? ` · ${e.detail}` : ""}</div>
                    <div className="ed-mono ed-fg-3">{e.period}</div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="ed-section">
          <div className="ed-section-head">
            <div className="ed-section-num ed-mono">§ 02</div>
            <h2 className="ed-h2">Selected work, <em>recently shipped.</em></h2>
          </div>
          <div className="ed-projects">
            {ED.projects.map((p, idx) => (
              <EDProjectCard
                key={p.id}
                p={p}
                idx={idx}
                expanded={openId === p.id}
                onToggle={() => setOpenId(openId === p.id ? null : p.id)}
              />
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="ed-section">
          <div className="ed-section-head">
            <div className="ed-section-num ed-mono">§ 03</div>
            <h2 className="ed-h2">A working <em>toolkit.</em></h2>
          </div>
          <div className="ed-skills">
            {Object.entries(ED.skills).map(([cat, items]) => (
              <div className="ed-skills-row" key={cat}>
                <div className="ed-skills-cat">{cat}</div>
                <div className="ed-skills-items">
                  {items.map((s, i) => (
                    <React.Fragment key={s}>
                      <span className="ed-skill-item">{s}</span>
                      {i < items.length - 1 && <span className="ed-skill-sep">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WRITING */}
        <section id="writing" className="ed-section">
          <div className="ed-section-head">
            <div className="ed-section-num ed-mono">§ 04</div>
            <h2 className="ed-h2">Selected <em>writing.</em></h2>
          </div>
          <div className="ed-writing-meta">
            <span className="ed-mono ed-label">Published on Medium</span>
            <a className="ed-mono ed-medium-link" href={ED.medium.url}>{ED.medium.handle} ↗</a>
          </div>
          <ul className="ed-writing">
            {ED.medium.posts.map((p, i) => (
              <li key={i}>
                <a href={p.url} className="ed-write-row">
                  <span className="ed-write-num ed-mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ed-write-title">{p.title}</span>
                  <span className="ed-write-meta ed-mono">{p.readTime}</span>
                  <span className="ed-write-date ed-mono">{p.date}</span>
                  <span className="ed-write-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={ED.medium.url} className="ed-writing-all ed-mono">Read all on Medium ↗</a>
        </section>

        {/* QUOTE */}
        <section className="ed-quote">
          <blockquote>
            <span className="ed-quote-mark">“</span>
            {ED.quote.text}
            <span className="ed-quote-mark">”</span>
          </blockquote>
          <cite>— {ED.quote.author}</cite>
        </section>

        {/* CONTACT */}
        <section id="contact" className="ed-contact-section">
          <div className="ed-section-head">
            <div className="ed-section-num ed-mono">§ 05</div>
            <h2 className="ed-h2">Get in <em>touch.</em></h2>
          </div>
          <div className="ed-contact-grid">
            <a className="ed-contact-email" href={`mailto:${ED.email}`}>
              {ED.email} <span className="ed-arrow">↗</span>
            </a>
            <div className="ed-contact-links">
              <a href={ED.github} className="ed-cl">
                <span className="ed-mono ed-label">github</span>
                <span>Tejasvaidya10</span>
              </a>
              <a href={ED.linkedin} className="ed-cl">
                <span className="ed-mono ed-label">linkedin</span>
                <span>tejasvaidya1903</span>
              </a>
              <a href={ED.medium.url} className="ed-cl">
                <span className="ed-mono ed-label">medium</span>
                <span>{ED.medium.handle}</span>
              </a>
              <a href={ED.resumeHref} className="ed-cl">
                <span className="ed-mono ed-label">résumé</span>
                <span>Download (PDF)</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="ed-footer ed-mono">
          <span>© 2026 Tejas Vaidya</span>
          <span>Set in Instrument Serif & Inter</span>
          <span>Atlanta, GA</span>
        </footer>
      </main>
    </div>
  );
}

window.EditorialPortfolio = EditorialPortfolio;
