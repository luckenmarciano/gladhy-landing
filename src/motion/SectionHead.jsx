import { useRef } from 'react'
import { useGsap } from './gsap'

/**
 * Kepala bagian: label kecil, judul, dan kalimat pengantar.
 *
 * Judul dipecah per kata supaya tiap kata naik dari balik "topeng"-nya. Pembaca
 * layar tetap mendapat kalimat utuh lewat aria-label; kepingan katanya
 * disembunyikan dari mereka.
 */
export default function SectionHead({ eyebrow, title, lead, dark = false, center = false, children }) {
  const ref = useRef(null)

  useGsap(ref, ({ gsap }) => {
    const el = ref.current
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: el, start: 'top 86%', once: true },
    })
    tl.from(el.querySelector('.eyebrow'), { autoAlpha: 0, y: 12, duration: 0.5 })
      .from(el.querySelectorAll('.w-in'), { yPercent: 115, duration: 0.85, stagger: 0.045 }, '-=0.25')
    // Tanpa kalimat pengantar tidak ada yang dianimasikan; GSAP memperingatkan target kosong.
    const rest = el.querySelectorAll('.section-lead, .head-extra')
    if (rest.length) tl.from(rest, { autoAlpha: 0, y: 16, duration: 0.7 }, '-=0.5')
  }, [title])

  const words = String(title).split(' ')

  return (
    <div ref={ref} className={`head${center ? ' head-center' : ''}`}>
      <p className={`eyebrow${dark ? '' : ' eyebrow-light'}`}>
        <span className="dot" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="section-title" aria-label={title}>
        {words.map((w, i) => (
          <span className="w" aria-hidden="true" key={`${w}-${i}`}>
            <span className="w-in">{w}</span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
      {children && <div className="head-extra">{children}</div>}
    </div>
  )
}
