import Reveal from './Reveal'

/**
 * Mirrors osct_backend/src/config/plans.js. Two copies of the same numbers is a
 * real cost, but the alternative — fetching plan definitions from the API — puts
 * a network round-trip and a failure mode in front of a marketing page. If the
 * limits in that file change, change them here too.
 *
 * `null` means unlimited, matching the backend's convention.
 */
const PLANS = [
  {
    label: 'Paket 1',
    key: 'BASIC',
    participants: 50,
    programs: 3,
    ai: false,
    translate: false,
    compliance: false,
  },
  {
    label: 'Paket 2',
    key: 'PROFESSIONAL',
    participants: 250,
    programs: 15,
    ai: true,
    translate: false,
    compliance: false,
    featured: true,
  },
  {
    label: 'Enterprise',
    key: 'ENTERPRISE',
    participants: null,
    programs: null,
    ai: true,
    translate: true,
    compliance: true,
  },
]

export default function Plans({ t }) {
  const r = t.plans.rows
  const num = (v) => (v === null ? t.plans.unlimited : v.toLocaleString('id-ID'))

  return (
    <section className="section" id="plans">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-dark">{t.plans.eyebrow}</p>
          <h2 className="section-title">{t.plans.title}</h2>
          <p className="section-lead">{t.plans.lead}</p>
        </Reveal>

        <div className="plan-grid">
          {PLANS.map((p, i) => (
            <Reveal key={p.key} delay={i * 90} className={`plan${p.featured ? ' is-featured' : ''}`}>
              <h3 className="plan-name">{p.label}</h3>

              <dl className="plan-limits">
                <div>
                  <dt>{r.participants}</dt>
                  <dd>{num(p.participants)}</dd>
                </div>
                <div>
                  <dt>{r.programs}</dt>
                  <dd>{num(p.programs)}</dd>
                </div>
              </dl>

              <ul className="plan-features">
                <li className="yes">{r.core}</li>
                <li className="yes">{r.branding}</li>
                <li className={p.ai ? 'yes' : 'no'}>{r.ai}</li>
                <li className={p.translate ? 'yes' : 'no'}>{r.translate}</li>
                <li className={p.compliance ? 'yes' : 'no'}>{r.compliance}</li>
              </ul>

              <a className={`btn btn-block ${p.featured ? 'btn-primary' : 'btn-outline-dark'}`} href="#contact">
                {t.plans.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="plan-note">{t.plans.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
