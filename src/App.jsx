import { useEffect, useState } from 'react'
import { T } from './i18n'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignInDialog from './components/SignInDialog'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Workflow from './sections/Workflow'
import ProductTour from './sections/ProductTour'
import Features from './sections/Features'
import Spotlight from './sections/Spotlight'
import Trust from './sections/Trust'
import Plans from './sections/Plans'
import Faq from './sections/Faq'
import Contact from './sections/Contact'
import { loadMotion } from './motion/gsap'
import { useLenis } from './motion/lenis'

// Diingat supaya pengunjung yang kembali tidak dilempar ke bahasa yang salah
// tiap kali datang. Bawaannya Indonesia: audiensnya lembaga di sini.
const KEY = 'gladhy.lang'

function readLang() {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'id' || saved === 'en') return saved
  } catch { /* penyimpanan diblokir: pakai bahasa peramban */ }
  return navigator.language?.startsWith('en') ? 'en' : 'id'
}

export default function App() {
  const [lang, setLang] = useState(readLang)
  const [signIn, setSignIn] = useState(false)

  useLenis()

  useEffect(() => {
    try { localStorage.setItem(KEY, lang) } catch { /* abaikan */ }
    // Tanpa ini pembaca layar membacakan isi dengan aksen yang salah, dan
    // peramban menawarkan menerjemahkan halaman yang dikiranya berbahasa lain.
    document.documentElement.lang = lang
  }, [lang])

  // Posisi pin dan pemicu dihitung dari tinggi halaman. Tinggi itu berubah
  // setelah font tiba dan setiap kali bahasa diganti, jadi hitung ulang.
  useEffect(() => {
    let dead = false
    const refresh = () => loadMotion().then(({ ScrollTrigger }) => {
      if (!dead) requestAnimationFrame(() => ScrollTrigger.refresh())
    }).catch(() => {})
    refresh()
    document.fonts?.ready.then(refresh)
    return () => { dead = true }
  }, [lang])

  const t = T[lang]
  const openSignIn = () => setSignIn(true)

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} onSignIn={openSignIn} />
      <main>
        <Hero t={t} />
        <Problem t={t} />
        <Workflow t={t} />
        <ProductTour t={t} />
        <Features t={t} />
        <Spotlight t={t} />
        <Trust t={t} />
        <Plans t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} onSignIn={openSignIn} />
      {signIn && <SignInDialog t={t} onClose={() => setSignIn(false)} />}
    </>
  )
}
