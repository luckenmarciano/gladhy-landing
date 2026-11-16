import SectionHead from '../motion/SectionHead'
import Reveal from '../motion/Reveal'
import { FEATURE_ORDER, PLANS } from '../data/plans'

export default function Plans({ t }) {
  const p = t.plans
  const num = (v) => (v === null ? p.unlimited : v.toLocaleString('id-ID'))

  return (
    <section className="section section-alt" id="plans">
      <div className="container">
        <SectionHead center eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

        <Reveal as="ul" className="plan-grid" stagger={0.1}>
          {PLANS.map((plan) => (
            <li key={plan.key} className={`plan${plan.featured ? ' is-featured' : ''}`}>
              {plan.featured && <span className="plan-badge">{p.popular}</span>}
              <h3 className="plan-name">{plan.label}</h3>

              <dl className="plan-limits">
                <div>
                  <dd>{num(plan.participants)}</dd>
                  <dt>{p.rows.participants}</dt>
                </div>
                <div>
                  <dd>{num(plan.programs)}</dd>
                  <dt>{p.rows.programs}</dt>
                </div>
              </dl>

              <ul className="plan-features">
                <li className="yes">{p.rows.core}</li>
                <li className="yes">{p.rows.branding}</li>
                {FEATURE_ORDER.map((k) => (
                  <li key={k} className={plan.features[k] ? 'yes' : 'no'}>
                    {p.rows[k]}
                    {!plan.features[k] && <span className="sr-only"> —</span>}
                  </li>
                ))}
              </ul>

              <a className={`btn btn-block ${plan.featured ? 'btn-primary' : 'btn-line'}`} href="#contact">
                {p.cta}
              </a>
            </li>
          ))}
        </Reveal>

        <Reveal as="p" className="plan-note">{p.note}</Reveal>
      </div>
    </section>
  )
}
