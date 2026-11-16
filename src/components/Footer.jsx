import Mark from './Mark'
import { whatsappLink } from '../config'

export default function Footer({ t, onSignIn }) {
  const wa = whatsappLink(t.contact.waText)
  const product = ['workflow', 'tour', 'features', 'plans', 'faq']

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="footer-brand" href="#top" aria-label={t.footer.top}>
              <Mark size={28} />
              Gladhy
            </a>
            <p className="footer-tag">{t.footer.tagline}</p>
          </div>

          <div>
            <h3>{t.footer.product}</h3>
            <ul className="footer-list">
              {product.map((id) => (
                <li key={id}><a href={`#${id}`}>{t.nav[id]}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{t.footer.company}</h3>
            <ul className="footer-list">
              <li><a href="#contact">{t.nav.contact}</a></li>
              {wa && <li><a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>}
              <li><button onClick={onSignIn}>{t.nav.signIn}</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>© {new Date().getFullYear()} Gladhy. {t.footer.rights}</span>
          <a href="#top">{t.footer.top} ↑</a>
        </div>
      </div>
    </footer>
  )
}
