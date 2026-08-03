import Reveal from './Reveal'

// Line-art glyphs, one per feature, in the order i18n lists them. Inline rather
// than an icon package: eight icons do not justify a dependency, and these
// inherit the surrounding colour for free.
const ICONS = [
  <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" /></>,
  <><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="5" width="3" height="13" /></>,
  <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3M20 14v3M17 17h4M14 21h3M21 21v-1" /></>,
  <><circle cx="12" cy="9" r="6" /><path d="m8.5 14-2 7L12 18l5.5 3-2-7" /></>,
  <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></>,
  <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />,
  <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  <><path d="M3 3v18h18" /><path d="m7 15 4-5 3 3 5-7" /></>,
]

export default function Features({ t }) {
  return (
    <section className="section section-alt" id="features">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-dark">{t.features.eyebrow}</p>
          <h2 className="section-title">{t.features.title}</h2>
        </Reveal>

        <div className="feature-grid">
          {t.features.items.map((f, i) => (
            <Reveal key={f.t} delay={(i % 4) * 70} className="feature">
              <span className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[i] || ICONS[0]}
                </svg>
              </span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
