import Mark from '../components/Mark'

/**
 * Bingkai jendela aplikasi untuk semua mockup.
 *
 * Mockup digambar ulang dengan HTML/CSS, bukan tangkapan layar: tetap tajam di
 * layar apa pun, beratnya nyaris nol, ikut berganti bahasa, dan tidak memuat
 * data lembaga sungguhan. Seluruhnya dekoratif, jadi disembunyikan dari pembaca
 * layar dan diberi satu label ringkas sebagai gantinya.
 *
 * `--mk` adalah warna lembaga di dalam mockup; demo branding menggantinya.
 */
export default function AppFrame({
  url = 'akademi.gladhy.co.id',
  nav = [],
  active,
  label,
  dark = false,
  color,
  className = '',
  children,
}) {
  return (
    <div
      className={`mk${dark ? ' mk-dark' : ''}${className ? ' ' + className : ''}`}
      style={color ? { '--mk': color } : undefined}
      role="img"
      aria-label={label}
    >
      <div className="mk-bar" aria-hidden="true">
        <i /><i /><i />
        <span className="mk-url">
          <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.4">
            <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          {url}
        </span>
      </div>
      <div className="mk-body" aria-hidden="true">
        {nav.length > 0 && (
          <aside className="mk-side">
            <div className="mk-logo"><Mark size={15} title="" /> Gladhy</div>
            {nav.map((n) => (
              <span key={n.id} className={`mk-nav${n.id === active ? ' on' : ''}`}>
                <b />{n.label}
              </span>
            ))}
          </aside>
        )}
        <div className="mk-main">{children}</div>
      </div>
    </div>
  )
}
