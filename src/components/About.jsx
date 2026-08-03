import Reveal from './Reveal'

export default function About({ t }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-dark">{t.about.eyebrow}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-lead">{t.about.body}</p>
        </Reveal>

        <div className="points">
          {t.about.points.map((p, i) => (
            <Reveal key={p.t} delay={i * 90} className="point">
              <span className="point-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
