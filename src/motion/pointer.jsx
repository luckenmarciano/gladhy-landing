import { useEffect, useRef, useState } from 'react'
import { FINE, REDUCE } from './gsap'

const canHover = () =>
  window.matchMedia(FINE).matches && !window.matchMedia(REDUCE).matches

/**
 * Kartu yang miring mengikuti kursor, dengan sorot cahaya di bawahnya.
 *
 * Hanya menulis variabel CSS; transformnya sendiri ada di stylesheet. Layar
 * sentuh tidak punya "kursor di atas kartu", jadi di sana tidak dipasang.
 */
export function useTilt(max = 7) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !canHover()) return undefined
    let raf = 0
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        el.style.setProperty('--rx', `${(0.5 - py) * max}deg`)
        el.style.setProperty('--ry', `${(px - 0.5) * max}deg`)
        el.style.setProperty('--px', `${px * 100}%`)
        el.style.setProperty('--py', `${py * 100}%`)
      })
    }
    const leave = () => {
      cancelAnimationFrame(raf)
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [max])
  return ref
}

/** Tombol yang sedikit "tertarik" ke kursor. */
export function useMagnetic(strength = 0.28) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !canHover()) return undefined
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - (r.left + r.width / 2)) * strength
      const y = (e.clientY - (r.top + r.height / 2)) * strength
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    const leave = () => { el.style.transform = '' }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [strength])
  return ref
}

/**
 * Posisi kursor relatif ke tengah elemen, ditulis sebagai --mx / --my (-1..1).
 * Lapisan-lapisan di dalamnya bergeser dengan jarak berbeda untuk kesan dalam.
 */
export function useParallax() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !canHover()) return undefined
    let raf = 0
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
        el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
      })
    }
    el.addEventListener('pointermove', move)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', move)
    }
  }, [])
  return ref
}

/**
 * Angka yang berhitung naik saat pertama kali terlihat.
 *
 * Nilai akhirnya yang dirender lebih dulu: tanpa IntersectionObserver, atau
 * dengan gerak dikurangi, pengunjung langsung membaca angka yang benar.
 */
export function Counter({ value, duration = 1400 }) {
  const ref = useRef(null)
  const [n, setN] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia(REDUCE).matches || !('IntersectionObserver' in window)) return undefined
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const step = (now) => {
        const p = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setN(Math.round(value * eased))
        if (p < 1) raf = requestAnimationFrame(step)
      }
      setN(0)
      raf = requestAnimationFrame(step)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value, duration])

  return <span ref={ref}>{n}</span>
}
