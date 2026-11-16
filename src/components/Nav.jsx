import { useEffect, useRef, useState } from 'react'
import Mark from './Mark'
import { lockScroll } from '../motion/lenis'

const SECTIONS = ['workflow', 'tour', 'features', 'plans', 'faq', 'contact']
// Bagian tanpa tautan sendiri: menumpang ke tautan terdekat, atau mengosongkannya.
const OWNER = { top: '', about: '', spotlight: 'features' }

export default function Nav({ t, lang, setLang, onSignIn }) {
  const ref = useRef(null)
  // Transparan di atas hero yang gelap, padat setelah halaman bergulir —
  // kalau tidak, tautannya menumpang di atas bagian apa pun di belakangnya.
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setSolid(window.scrollY > 40)
        const max = document.documentElement.scrollHeight - window.innerHeight
        ref.current?.style.setProperty('--read', max > 0 ? (window.scrollY / max).toFixed(4) : '0')
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Tautan aktif = bagian yang sedang melintasi garis tengah layar.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(OWNER[e.target.id] ?? e.target.id)
        })
      },
      { rootMargin: '-48% 0px -48% 0px' }
    )
    const watched = SECTIONS.concat(Object.keys(OWNER))
    watched.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    lockScroll(open)
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      lockScroll(false)
    }
  }, [open])

  const links = SECTIONS.map((id) => [id, t.nav[id]])
  const toggleLang = () => setLang(lang === 'id' ? 'en' : 'id')

  return (
    <>
      <header ref={ref} className={`nav${solid ? ' is-solid' : ''}${open ? ' is-open' : ''}`}>
        <div className="nav-inner">
          <a className="nav-brand" href="#top" aria-label="Gladhy" onClick={() => setOpen(false)}>
            <Mark size={27} />
            <span>Gladhy</span>
          </a>

          <nav className="nav-links" aria-label={t.nav.main}>
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'is-active' : ''}
                aria-current={active === id ? 'true' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <button className="lang" onClick={toggleLang} aria-label="Bahasa / Language">
              <span className={lang === 'id' ? 'on' : ''}>ID</span>
              <span className="sep">/</span>
              <span className={lang === 'en' ? 'on' : ''}>EN</span>
            </button>
            <button className="btn btn-sm nav-signin" onClick={onSignIn}>{t.nav.signIn}</button>
            <button
              className="nav-burger"
              aria-expanded={open}
              aria-controls="menu"
              aria-label={open ? t.nav.close : t.nav.menu}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
        <i className="nav-progress" aria-hidden="true" />
      </header>

      {open && (
        <div className="menu" id="menu">
          {links.map(([id, label], i) => (
            <a key={id} href={`#${id}`} style={{ '--i': i }} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <button
            className="btn btn-primary"
            onClick={() => { setOpen(false); onSignIn() }}
          >
            {t.nav.signIn}
          </button>
          <button className="lang" style={{ marginTop: 18, fontSize: 14 }} onClick={toggleLang}>
            <span className={lang === 'id' ? 'on' : ''}>Bahasa Indonesia</span>
            <span className="sep">/</span>
            <span className={lang === 'en' ? 'on' : ''}>English</span>
          </button>
        </div>
      )}
    </>
  )
}
