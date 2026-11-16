import { useRef, useState } from 'react'
import AppFrame from '../mockups/AppFrame'
import { CertificateMock, CourseMock, TestMock } from '../mockups/screens'
import SectionHead from '../motion/SectionHead'
import Reveal from '../motion/Reveal'
import { useGsap, usePinned } from '../motion/gsap'

const MOCKS = [CourseMock, TestMock, CertificateMock]

/**
 * Latih → Uji → Sertifikasi.
 *
 * Layar lebar: bagian ini tersemat selama digulir; langkah aktif dan mockup di
 * sampingnya berganti mengikuti posisi gulir. Layar sempit atau gerak
 * dikurangi: tiga langkah ditumpuk biasa, masing-masing dengan mockupnya —
 * isinya sama, hanya tanpa pin.
 */
export default function Workflow({ t }) {
  const ref = useRef(null)
  const pinned = usePinned()
  const [active, setActive] = useState(0)
  const steps = t.workflow.steps

  useGsap(ref, ({ ScrollTrigger, wide }) => {
    if (!wide) return
    const pin = ref.current.querySelector('.flow-pin')
    const rail = ref.current.querySelector('.flow-steps')
    ScrollTrigger.create({
      trigger: pin,
      pin: true,
      start: 'top top',
      end: '+=170%',
      onUpdate: (self) => {
        rail.style.setProperty('--p', self.progress.toFixed(3))
        setActive(Math.min(steps.length - 1, Math.floor(self.progress * steps.length)))
      },
    })
  }, [pinned])

  const shot = (i) => {
    const M = MOCKS[i]
    return (
      <AppFrame label={`${steps[i].k}: ${steps[i].t}`}>
        <M m={t.mock} />
      </AppFrame>
    )
  }

  return (
    <section className={`section section-alt flow ${pinned ? 'is-pinned' : 'is-stack'}`} id="workflow" ref={ref}>
      <div className="flow-pin">
        <div className="container flow-grid">
          <div className="flow-left">
            <SectionHead eyebrow={t.workflow.eyebrow} title={t.workflow.title} lead={t.workflow.lead} />

            <ol className="flow-steps">
              {steps.map((s, i) => {
                const on = !pinned || i === active
                const body = (
                  <>
                    <span className="flow-num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flow-text">
                      <h3><em>{s.k}</em>{s.t}</h3>
                      <div className="flow-more">
                        <div>
                          <p>{s.d}</p>
                          <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                          {!pinned && <div className="flow-shot-inline">{shot(i)}</div>}
                        </div>
                      </div>
                    </div>
                  </>
                )
                const cls = `flow-step${on ? ' on' : ''}${pinned && i < active ? ' past' : ''}`
                return pinned
                  ? <li className={cls} key={s.k}>{body}</li>
                  : <Reveal as="li" className={cls} key={s.k}>{body}</Reveal>
              })}
            </ol>
          </div>

          {pinned && (
            <div className="flow-stage">
              {steps.map((s, i) => (
                <div className={`flow-shot${i === active ? ' on' : ''}${i < active ? ' past' : ''}`} key={s.k}>
                  {shot(i)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
