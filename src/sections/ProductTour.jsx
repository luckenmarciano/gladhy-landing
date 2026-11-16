import { useEffect, useRef, useState } from 'react'
import AppFrame from '../mockups/AppFrame'
import {
  CertificateMock, CourseMock, DashboardMock, QrMock, ReportMock, SimulationMock, TestMock,
} from '../mockups/screens'
import SectionHead from '../motion/SectionHead'
import Reveal from '../motion/Reveal'
import { REDUCE, useInView } from '../motion/gsap'

/**
 * Menu tiap peran meniru sidebar aplikasi (gladhy-frontend/src/components/
 * sidebar/nav.js), diringkas ke butir yang paling menjelaskan peran itu.
 * `screens` berurutan sama dengan tour.roles[peran].screens di i18n.
 */
const ROLES = {
  admin: {
    nav: ['home', 'training', 'qr', 'courses', 'certs', 'reports'],
    screens: [
      { nav: 'home', Mock: DashboardMock },
      { nav: 'certs', Mock: CertificateMock },
      { nav: 'reports', Mock: ReportMock },
    ],
  },
  trainer: {
    nav: ['home', 'training', 'qr', 'manage', 'tests', 'reports'],
    screens: [
      { nav: 'qr', Mock: QrMock },
      { nav: 'manage', Mock: CourseMock },
      { nav: 'tests', Mock: TestMock },
    ],
  },
  participant: {
    nav: ['home', 'myCourses', 'qr', 'pretest', 'certs'],
    screens: [
      { nav: 'myCourses', Mock: CourseMock },
      { nav: 'myCourses', Mock: SimulationMock },
      { nav: 'pretest', Mock: TestMock },
      { nav: 'certs', Mock: CertificateMock },
    ],
  },
}
const ROLE_KEYS = Object.keys(ROLES)
const DWELL = 5000

export default function ProductTour({ t }) {
  const ref = useRef(null)
  const inView = useInView(ref, '-20% 0px')
  const [role, setRole] = useState('admin')
  const [idx, setIdx] = useState(0)
  // Putar otomatis berhenti selamanya begitu pengunjung memilih sendiri:
  // layar yang berganti saat sedang dibaca lebih mengganggu daripada membantu.
  const [auto, setAuto] = useState(() => !window.matchMedia(REDUCE).matches)

  const cfg = ROLES[role]
  const copy = t.tour.roles[role]
  const playing = auto && inView

  useEffect(() => {
    if (!playing) return undefined
    const id = setTimeout(() => {
      if (idx + 1 < cfg.screens.length) {
        setIdx(idx + 1)
      } else {
        setRole(ROLE_KEYS[(ROLE_KEYS.indexOf(role) + 1) % ROLE_KEYS.length])
        setIdx(0)
      }
    }, DWELL)
    return () => clearTimeout(id)
  }, [playing, idx, role, cfg.screens.length])

  const pickRole = (r) => { setAuto(false); setRole(r); setIdx(0) }
  const pickScreen = (i) => { setAuto(false); setIdx(i) }

  const onTabKey = (e) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    e.preventDefault()
    const next = ROLE_KEYS[(ROLE_KEYS.indexOf(role) + d + ROLE_KEYS.length) % ROLE_KEYS.length]
    pickRole(next)
    document.getElementById(`tour-tab-${next}`)?.focus()
  }

  const screen = cfg.screens[idx]
  const Mock = screen.Mock
  const nav = cfg.nav.map((id) => ({ id, label: t.mock[id] }))

  return (
    <section className="section section-dark tour" id="tour" ref={ref}>
      <div className="tour-glow" aria-hidden="true" />
      <div className="container">
        <SectionHead dark center eyebrow={t.tour.eyebrow} title={t.tour.title} lead={t.tour.lead} />

        <Reveal>
          <div className="tabs" role="tablist" aria-label={t.tour.eyebrow} onKeyDown={onTabKey}>
            {ROLE_KEYS.map((r) => (
              <button
                key={r}
                id={`tour-tab-${r}`}
                role="tab"
                aria-selected={role === r}
                aria-controls="tour-panel"
                tabIndex={role === r ? 0 : -1}
                className={`tab${role === r ? ' on' : ''}`}
                onClick={() => pickRole(r)}
              >
                {t.tour.roles[r].label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="tour-grid" id="tour-panel" role="tabpanel" aria-labelledby={`tour-tab-${role}`}>
          <div className="tour-list">
            <p className="tour-blurb" key={role}>{copy.blurb}</p>
            {copy.screens.map((s, i) => (
              <button
                key={`${role}-${i}`}
                className={`tour-item${i === idx ? ' on' : ''}`}
                aria-pressed={i === idx}
                onClick={() => pickScreen(i)}
              >
                <strong>{s.t}</strong>
                <span>{s.d}</span>
                {i === idx && playing && <i className="tour-timer" style={{ '--dwell': `${DWELL}ms` }} />}
              </button>
            ))}
          </div>

          <div className="tour-stage">
            <div className="tour-shot" key={`${role}-${idx}`}>
              <AppFrame nav={nav} active={screen.nav} label={copy.screens[idx].t}>
                <Mock m={t.mock} />
              </AppFrame>
            </div>
            <p className="tour-note">{t.tour.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
