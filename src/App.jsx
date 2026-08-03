import { useEffect, useState } from 'react'
import { T } from './i18n'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Plans from './components/Plans'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SignInDialog from './components/SignInDialog'

// Remembered so a returning visitor is not put back into the wrong language on
// every visit. Defaults to Indonesian: the audience is institutions here.
const KEY = 'gladhy.lang'

export default function App() {
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== 'undefined' && localStorage.getItem(KEY)
    if (saved === 'id' || saved === 'en') return saved
    return navigator.language?.startsWith('en') ? 'en' : 'id'
  })
  const [signIn, setSignIn] = useState(false)

  useEffect(() => {
    localStorage.setItem(KEY, lang)
    // Screen readers announce content in the wrong accent otherwise, and the
    // browser offers to translate a page it thinks is in another language.
    document.documentElement.lang = lang
  }, [lang])

  const t = T[lang]

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} onSignIn={() => setSignIn(true)} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Features t={t} />
        <Plans t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      {signIn && <SignInDialog t={t} onClose={() => setSignIn(false)} />}
    </>
  )
}
