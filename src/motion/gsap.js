import { useEffect, useState, useSyncExternalStore } from 'react'

/**
 * GSAP dimuat belakangan, lewat import() dinamis.
 *
 * Hero dianimasikan dengan CSS murni, jadi halaman sudah tampil dan bergerak
 * sebelum bundel animasi tiba. Semua yang memakai GSAP berada di bawah lipatan
 * dan mulai dari keadaan TERLIHAT di CSS: kalau muatan ini gagal, pengunjung
 * kehilangan gerak, bukan isi.
 */
let pending
export function loadMotion() {
  pending ||= Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([g, st]) => {
    g.gsap.registerPlugin(st.ScrollTrigger)
    return { gsap: g.gsap, ScrollTrigger: st.ScrollTrigger }
  })
  return pending
}

export const REDUCE = '(prefers-reduced-motion: reduce)'
export const WIDE = '(min-width: 861px)'
export const FINE = '(hover: hover) and (pointer: fine)'

/**
 * Menjalankan `setup` di dalam gsap.matchMedia yang dibatasi ke `scopeRef`.
 *
 * - Semua tween/ScrollTrigger yang dibuat di dalamnya dibongkar otomatis saat
 *   komponen lepas atau saat lebar layar melewati ambang.
 * - Dengan prefers-reduced-motion, `setup` tidak dipanggil sama sekali.
 * - `wide` memberi tahu apakah pin boleh dipasang (pin di HP rawan macet).
 */
export function useGsap(scopeRef, setup, deps = []) {
  useEffect(() => {
    let mm
    let dead = false
    loadMotion()
      .then(({ gsap, ScrollTrigger }) => {
        if (dead || !scopeRef.current) return
        mm = gsap.matchMedia(scopeRef)
        mm.add({ reduce: REDUCE, wide: WIDE, narrow: '(max-width: 860px)' }, (ctx) => {
          if (ctx.conditions.reduce) return undefined
          return setup({ gsap, ScrollTrigger, wide: ctx.conditions.wide })
        })
      })
      .catch(() => {})
    return () => {
      dead = true
      mm?.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** Nilai media query yang ikut berubah saat jendela diubah ukurannya. */
export function useMedia(query) {
  return useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia(query)
      m.addEventListener('change', cb)
      return () => m.removeEventListener('change', cb)
    },
    () => window.matchMedia(query).matches,
    () => false
  )
}

/** Pin scroll hanya di layar lebar dan hanya bila gerak tidak dikurangi. */
export function usePinned() {
  const wide = useMedia(WIDE)
  const reduce = useMedia(REDUCE)
  return wide && !reduce
}

/** true selama elemen berada di layar; dipakai untuk menjeda demo yang berulang. */
export function useInView(ref, margin = '0px') {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setInView(true)
      return undefined
    }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: margin })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, margin])
  return inView
}
