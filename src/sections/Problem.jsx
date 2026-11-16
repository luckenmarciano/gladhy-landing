import { useRef } from 'react'
import Mark from '../components/Mark'
import Reveal from '../motion/Reveal'
import SectionHead from '../motion/SectionHead'
import { useGsap } from '../motion/gsap'

/**
 * Tiga "bukti tercecer" menyatu menjadi satu catatan saat digulir.
 *
 * Tanpa GSAP, susunan bawaannya tetap terbaca: tiga kepingan di sekeliling
 * kartu Gladhy di tengah.
 */
export default function Problem({ t }) {
  const ref = useRef(null)

  useGsap(ref, ({ gsap }) => {
    const box = ref.current.querySelector('.merge')
    const scraps = gsap.utils.toArray('.scrap')
    const center = (el) => {
      const r = el.getBoundingClientRect()
      return [r.left + r.width / 2, r.top + r.height / 2]
    }
    const tl = gsap.timeline({
      scrollTrigger: { trigger: box, start: 'top 72%', end: 'top 22%', scrub: 0.6, invalidateOnRefresh: true },
    })
    tl.to(scraps, {
      x: (i, el) => center(box)[0] - center(el)[0],
      y: (i, el) => center(box)[1] - center(el)[1],
      rotate: 0, scale: 0.45, autoAlpha: 0, ease: 'power2.in', stagger: 0.08,
    })
      .from('.merge-core', { scale: 0.6, autoAlpha: 0, ease: 'back.out(1.6)' }, 0.35)
      .from('.merge-ring', { scale: 0.4, autoAlpha: 0, ease: 'power2.out' }, 0.45)
  })

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="problem-grid">
          <SectionHead eyebrow={t.problem.eyebrow} title={t.problem.title} lead={t.problem.body} />

          <div className="merge" aria-hidden="true">
            <i className="merge-ring" />
            <div className="scrap s1">
              <b>{t.problem.scraps[0]}</b>
              <i /><i /><i className="short" /><i />
            </div>
            <div className="scrap s2">
              <b>{t.problem.scraps[1]}</b>
              <div className="cells">{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</div>
            </div>
            <div className="scrap s3">
              <b>{t.problem.scraps[2]}</b>
              <div className="files"><i /><i /><i /></div>
            </div>
            <div className="merge-core">
              <Mark size={34} title="" />
              <strong>{t.problem.core}</strong>
              <small>{t.problem.coreSub}</small>
            </div>
          </div>
        </div>

        <Reveal as="ol" className="points" stagger={0.12}>
          {t.problem.points.map((p, i) => (
            <li className="point" key={p.t}>
              <span className="point-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
