import { useRef } from 'react'
import { useGsap } from './gsap'

/**
 * Memunculkan isi saat masuk layar.
 *
 * Keadaan awal (transparan, sedikit turun) dipasang oleh GSAP, bukan CSS. Jadi
 * kalau skrip animasi tidak pernah tiba, atau pengunjung meminta gerak
 * dikurangi, isi tetap terlihat seperti biasa.
 *
 * `stagger`: anak-anak langsungnya muncul bergiliran, bukan sebagai satu blok.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  stagger = 0,
  y = 28,
  ...rest
}) {
  const ref = useRef(null)

  useGsap(ref, ({ gsap }) => {
    const el = ref.current
    const targets = stagger ? Array.from(el.children) : el
    gsap.from(targets, {
      y,
      autoAlpha: 0,
      duration: 0.9,
      delay,
      stagger: stagger || 0,
      ease: 'power3.out',
      clearProps: 'transform,opacity,visibility',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
