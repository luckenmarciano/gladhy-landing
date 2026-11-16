import { useEffect } from 'react'
import { loadMotion, REDUCE, FINE } from './gsap'

let current = null

/**
 * Scroll halus, hanya untuk mouse/trackpad.
 *
 * Layar sentuh sudah punya inersia bawaan yang lebih baik daripada tiruannya,
 * dan pengguna yang meminta gerak dikurangi tidak boleh mendapat scroll yang
 * "mengambang". Di kedua keadaan itu Lenis tidak dimuat sama sekali.
 */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia(REDUCE).matches || !window.matchMedia(FINE).matches) return undefined
    let dead = false
    let lenis
    let tick
    let ticker
    Promise.all([loadMotion(), import('lenis')])
      .then(([{ gsap, ScrollTrigger }, mod]) => {
        if (dead) return
        const Lenis = mod.default
        lenis = new Lenis({ anchors: true, lerp: 0.11 })
        lenis.on('scroll', ScrollTrigger.update)
        tick = (time) => lenis.raf(time * 1000)
        ticker = gsap.ticker
        ticker.add(tick)
        ticker.lagSmoothing(0)
        current = lenis
      })
      .catch(() => {})
    return () => {
      dead = true
      if (ticker && tick) ticker.remove(tick)
      lenis?.destroy()
      if (current === lenis) current = null
    }
  }, [])
}

/** Dipakai dialog dan menu HP: halaman di belakangnya tidak ikut bergulir. */
export function lockScroll(locked) {
  document.body.style.overflow = locked ? 'hidden' : ''
  if (locked) current?.stop()
  else current?.start()
}
