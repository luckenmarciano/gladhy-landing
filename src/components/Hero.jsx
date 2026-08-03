import Mark from './Mark'

export default function Hero({ t }) {
  return (
    <section className="hero" id="top">
      {/* Gradient rather than the 53 MB video the earlier draft carried. A
          marketing page that takes ten seconds to appear has already lost the
          visitor it was written for. */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner">
        <p className="eyebrow">
          <span className="dot" aria-hidden="true" />
          {t.hero.eyebrow}
        </p>

        <h1 className="hero-title">
          {t.hero.title1}
          <br />
          <em>{t.hero.title2}</em>
        </h1>

        <p className="hero-lead">{t.hero.lead}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">{t.hero.ctaPrimary}</a>
          <a className="btn btn-outline" href="#features">{t.hero.ctaSecondary}</a>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <Mark size={40} />
        </div>
      </div>
    </section>
  )
}
