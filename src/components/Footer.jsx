import Mark from './Mark'

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Mark size={24} />
          <div>
            <div className="footer-name">Gladhy</div>
            <div className="footer-tag">{t.footer.tagline}</div>
          </div>
        </div>
        <div className="footer-meta">
          © {new Date().getFullYear()} Gladhy. {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
