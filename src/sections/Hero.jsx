import AppFrame from '../mockups/AppFrame'
import { DashboardMock } from '../mockups/screens'
import { useGsap } from '../motion/gsap'
import { useMagnetic, useParallax } from '../motion/pointer'

const Arrow = () => (
  <svg className="arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

/**
 * Animasi masuk hero memakai CSS murni (.rise, .hw), bukan GSAP: ini satu-
 * satunya bagian yang terlihat sebelum JavaScript animasi selesai dimuat, jadi
 * tidak boleh menunggunya. GSAP di sini hanya menambah gerak saat digulir.
 */
export default function Hero({ t }) {
  const ref = useParallax()
  const cta = useMagnetic()
  const m = t.mock

  useGsap(ref, ({ gsap, wide }) => {
    const st = { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true }
    gsap.to('.hero-bg', { yPercent: 16, ease: 'none', scrollTrigger: st })
    if (wide) {
      gsap.to('.hero-copy', { y: -50, autoAlpha: 0.25, ease: 'none', scrollTrigger: st })
      gsap.to('.hero-lift', { y: -90, scale: 0.95, ease: 'none', scrollTrigger: st })
    }
  })

  const nav = [
    { id: 'home', label: m.home }, { id: 'training', label: m.training }, { id: 'qr', label: m.qr },
    { id: 'courses', label: m.courses }, { id: 'certs', label: m.certs }, { id: 'reports', label: m.reports },
  ]

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-bg" aria-hidden="true">
        <i className="aurora a" /><i className="aurora b" /><i className="aurora c" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow rise" style={{ '--i': 0 }}>
            <span className="dot" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>

          <h1 className="hero-title" aria-label={t.hero.title.join(' ')}>
            {t.hero.title.map((w, i) => (
              <span key={w} aria-hidden="true">
                {i === 2 && <br />}
                <span className="w">
                  <span className={`hw${i === 2 ? ' accent' : ''}`} style={{ '--i': i }}>{w}</span>
                </span>
                {i === 0 ? ' ' : ''}
              </span>
            ))}
          </h1>

          <p className="hero-lead rise" style={{ '--i': 5 }}>{t.hero.lead}</p>

          <div className="hero-actions rise" style={{ '--i': 6 }}>
            <a ref={cta} className="btn btn-primary" href="#contact">{t.hero.ctaPrimary}<Arrow /></a>
            <a className="btn btn-glass" href="#workflow">{t.hero.ctaSecondary}</a>
          </div>
        </div>

        <div className="hero-stage rise" style={{ '--i': 4 }}>
          <div className="hero-lift">
            <div className="hero-tilt">
              <AppFrame nav={nav} active="home" label={t.tour.roles.admin.screens[0].t}>
                <DashboardMock m={m} />
              </AppFrame>
            </div>

            <div className="chip chip-qr" aria-hidden="true">
              <span className="chip-ico ok">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
              </span>
              <span><strong>{t.hero.chipQr}</strong><small>{t.hero.chipQrSub}</small></span>
            </div>
            <div className="chip chip-cert" aria-hidden="true">
              <span className="chip-ico">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="m8.5 14-2 7L12 18l5.5 3-2-7" /></svg>
              </span>
              <span><strong>{t.hero.chipCert}</strong><small>{t.hero.chipCertSub}</small></span>
            </div>
            <div className="chip chip-gain" aria-hidden="true">
              <span><small>{t.hero.chipGain}</small><strong className="big">+41%</strong></span>
              <svg viewBox="0 0 60 28" width="60" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path className="spark" pathLength="1" d="M2 24 14 19 24 21 36 11 46 13 58 3" /></svg>
            </div>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about" aria-label={t.hero.scroll}>
        <span>{t.hero.scroll}</span><i aria-hidden="true" />
      </a>
    </section>
  )
}
