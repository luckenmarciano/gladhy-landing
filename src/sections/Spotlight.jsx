import { useEffect, useRef, useState } from 'react'
import AppFrame from '../mockups/AppFrame'
import { LoginMock, SimulationMock, ZoomMock } from '../mockups/screens'
import SectionHead from '../motion/SectionHead'
import { REDUCE, useGsap, useInView, usePinned } from '../motion/gsap'

const SAMPLE_NO = 'GLD-2026-000184'

/** Nomor sertifikat terketik sendiri, lalu cap "asli" muncul. Berulang selama terlihat. */
function VerifyDemo({ v }) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const still = window.matchMedia(REDUCE).matches
  const [n, setN] = useState(still ? SAMPLE_NO.length : 0)

  useEffect(() => {
    if (!inView || still) return undefined
    const done = n >= SAMPLE_NO.length
    const id = setTimeout(() => setN(done ? 0 : n + 1), done ? 3200 : n === 0 ? 700 : 85)
    return () => clearTimeout(id)
  }, [inView, n, still])

  const ok = n >= SAMPLE_NO.length
  return (
    <div className="verify" ref={ref} aria-hidden="true">
      <small>{v.label} · {v.sample}</small>
      <div className="verify-row">
        <span className="verify-input">{SAMPLE_NO.slice(0, n)}<i className="caret" /></span>
        <span className="verify-btn">{v.check}</span>
      </div>
      <div className={`verify-result${ok ? ' on' : ''}`}>
        <span className="verify-seal">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
        </span>
        <span><strong>{v.ok}</strong><small>{v.okSub}</small></span>
      </div>
    </div>
  )
}

// Lembaga rekaan untuk demo branding; warnanya saja yang penting.
const TENANTS = [
  { slug: 'akademi', color: '#B84E2A' },
  { slug: 'balai-diklat', color: '#1D4ED8' },
  { slug: 'pusat-logistik', color: '#0F766E' },
]

function BrandingDemo({ t }) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [i, setI] = useState(0)

  useEffect(() => {
    if (!inView || window.matchMedia(REDUCE).matches) return undefined
    const id = setInterval(() => setI((v) => (v + 1) % TENANTS.length), 2600)
    return () => clearInterval(id)
  }, [inView])

  const tenant = TENANTS[i]
  const name = t.mock.tenants[i]
  return (
    <div ref={ref}>
      <AppFrame url={`${tenant.slug}.gladhy.co.id`} color={tenant.color} label={name}>
        <LoginMock m={t.mock} name={name} />
      </AppFrame>
      <div className="swatches" aria-hidden="true">
        {TENANTS.map((x, k) => <i key={x.slug} className={k === i ? 'on' : ''} style={{ background: x.color }} />)}
      </div>
    </div>
  )
}

/**
 * Empat sorotan dalam satu deret mendatar.
 *
 * Layar lebar: bagian tersemat dan deretnya bergeser mengikuti gulir vertikal.
 * Layar sempit / gerak dikurangi: deret yang sama digeser dengan jari
 * (scroll-snap bawaan peramban), tanpa pin.
 */
export default function Spotlight({ t }) {
  const ref = useRef(null)
  const pinned = usePinned()
  const s = t.spotlight

  useGsap(ref, ({ gsap, wide }) => {
    if (!wide) return
    const pin = ref.current.querySelector('.spot-pin')
    const track = ref.current.querySelector('.spot-track')
    const dist = () => Math.max(0, track.scrollWidth - window.innerWidth)
    gsap.to(track, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: pin,
        pin: true,
        start: 'top top',
        end: () => `+=${dist()}`,
        scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (self) => ref.current?.style.setProperty('--sp', self.progress.toFixed(3)),
      },
    })
  }, [pinned])

  const visuals = [
    <AppFrame dark label={s.items[0].t}><SimulationMock m={t.mock} /></AppFrame>,
    <AppFrame dark label={s.items[1].t}><ZoomMock m={t.mock} /></AppFrame>,
    <VerifyDemo v={s.verify} />,
    <BrandingDemo t={t} />,
  ]

  return (
    <section className={`section section-dark spot ${pinned ? 'is-pinned' : 'is-swipe'}`} id="spotlight" ref={ref}>
      <div className="spot-pin">
        <div className="container spot-head">
          <SectionHead dark eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
          <div className="spot-meter" aria-hidden="true"><span>{s.hint}</span><i /></div>
        </div>

        <ul className="spot-track">
          {s.items.map((it, i) => (
            <li className="spot-panel" key={it.tag}>
              <div className="spot-copy">
                <span className="spot-tag">{String(i + 1).padStart(2, '0')} · {it.tag}</span>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
                <ul>{it.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className="spot-visual">{visuals[i]}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
