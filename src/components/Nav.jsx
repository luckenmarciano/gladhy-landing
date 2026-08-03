import { useEffect, useState } from 'react'
import Mark from './Mark'

export default function Nav({ t, lang, setLang, onSignIn }) {
  // Transparent over the dark hero, solid once the page scrolls past it —
  // otherwise the links sit on whatever section happens to be behind them.
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['#about', t.nav.about],
    ['#features', t.nav.features],
    ['#plans', t.nav.plans],
    ['#contact', t.nav.contact],
  ]

  return (
    <header className={`nav${solid ? ' is-solid' : ''}`}>
      <a className="nav-brand" href="#top" aria-label="Gladhy">
        <Mark size={26} />
        <span>Gladhy</span>
      </a>

      <nav className="nav-links" aria-label={t.nav.about}>
        {links.map(([href, label]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <div className="nav-right">
        <button
          className="lang"
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
          aria-label="Switch language"
        >
          <span className={lang === 'id' ? 'on' : ''}>ID</span>
          <span className="sep">/</span>
          <span className={lang === 'en' ? 'on' : ''}>EN</span>
        </button>
        <button className="btn btn-ghost btn-sm" onClick={onSignIn}>{t.nav.signIn}</button>
      </div>
    </header>
  )
}
