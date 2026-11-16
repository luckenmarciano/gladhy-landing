import SectionHead from '../motion/SectionHead'
import Reveal from '../motion/Reveal'
import { useTilt } from '../motion/pointer'

// Satu ikon garis per fitur, urutannya sama dengan features.items di i18n.
// Inline, bukan paket ikon: delapan ikon tidak sepadan dengan satu dependensi.
const ICONS = [
  <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" /></>,
  <><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="5" width="3" height="13" /></>,
  <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3M20 14v3M17 17h4M14 21h3M21 21v-1" /></>,
  <><circle cx="12" cy="9" r="6" /><path d="m8.5 14-2 7L12 18l5.5 3-2-7" /></>,
  <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />,
  <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></>,
  <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  <><path d="M3 3v18h18" /><path d="m7 15 4-5 3 3 5-7" /></>,
]

// Kartu lebar membawa ilustrasi kecil; indeksnya mengikuti features.items.
const WIDE = { 0: 'modules', 1: 'gain', 4: 'chat', 7: 'trend' }

function Visual({ kind, t }) {
  if (kind === 'modules') {
    return (
      <div className="fv fv-modules">
        {t.mock.lessons.slice(0, 3).map((l, i) => (
          <span key={l} style={{ '--i': i }}><b>{i + 1}</b>{l}</span>
        ))}
      </div>
    )
  }
  if (kind === 'gain') {
    return (
      <div className="fv fv-gain">
        <div><i style={{ '--h': '42%' }} /><small>{t.features.before}</small></div>
        <div><i className="hi" style={{ '--h': '86%' }} /><small>{t.features.after}</small></div>
        <strong>+44</strong>
      </div>
    )
  }
  if (kind === 'chat') {
    return (
      <div className="fv fv-chat">
        <p className="q">{t.features.chat.q}</p>
        <p className="a">{t.features.chat.a}</p>
      </div>
    )
  }
  return (
    <svg className="fv fv-trend" viewBox="0 0 200 70" fill="none" preserveAspectRatio="none">
      <path d="M0 58 30 50 60 54 95 34 125 38 160 18 200 8V70H0Z" fill="url(#trend)" />
      <path d="M0 58 30 50 60 54 95 34 125 38 160 18 200 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <defs>
        <linearGradient id="trend" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="currentColor" stopOpacity=".22" /><stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Card({ f, i, t }) {
  const ref = useTilt(6)
  const kind = WIDE[i]
  return (
    <li ref={ref} className={`feature${kind ? ' is-wide' : ''}`}>
      <div className="feature-body">
        <span className="feature-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {ICONS[i] || ICONS[0]}
          </svg>
        </span>
        <h3>{f.t}</h3>
        <p>{f.d}</p>
      </div>
      {kind && <div className="feature-visual" aria-hidden="true"><Visual kind={kind} t={t} /></div>}
    </li>
  )
}

export default function Features({ t }) {
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHead eyebrow={t.features.eyebrow} title={t.features.title} lead={t.features.lead} />
        <Reveal as="ul" className="bento" stagger={0.07}>
          {t.features.items.map((f, i) => <Card key={f.t} f={f} i={i} t={t} />)}
        </Reveal>
      </div>
    </section>
  )
}
