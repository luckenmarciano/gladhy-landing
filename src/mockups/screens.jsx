import Mark from '../components/Mark'

/**
 * Isi layar untuk AppFrame. Tiap komponen menggambar ulang satu layar aplikasi
 * dengan data contoh; `m` adalah kamus teks mockup dari i18n.
 *
 * Nama orang di sini rekaan. Jangan ganti dengan data lembaga sungguhan.
 */

const PEOPLE = ['Rina A.', 'Budi S.', 'Dewi K.', 'Agus P.', 'Sari W.']

const Check = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
)

/* ── QR tiruan: pola acak tetap dengan tiga penanda sudut ────────────── */
const N = 21
function finder(x, y) {
  for (const [ox, oy] of [[0, 0], [N - 7, 0], [0, N - 7]]) {
    const lx = x - ox
    const ly = y - oy
    if (lx >= -1 && lx <= 7 && ly >= -1 && ly <= 7) {
      if (lx < 0 || lx > 6 || ly < 0 || ly > 6) return 0
      const edge = lx === 0 || lx === 6 || ly === 0 || ly === 6
      const core = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4
      return edge || core ? 1 : 0
    }
  }
  return null
}
const QR_CELLS = (() => {
  const out = []
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const f = finder(x, y)
      const on = f === null ? ((x * 7 + y * 13 + x * y * 3 + (x ^ y)) % 5) < 2 : f === 1
      if (on) out.push([x, y])
    }
  }
  return out
})()

export function QrGlyph({ className = '' }) {
  return (
    <svg className={`qr ${className}`} viewBox={`0 0 ${N} ${N}`} shapeRendering="crispEdges">
      {QR_CELLS.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />)}
    </svg>
  )
}

/* ── Dasbor ──────────────────────────────────────────────────────────── */
export function DashboardMock({ m }) {
  const stats = [
    [m.active, '128', '+12'],
    [m.attendance, '94%', '+3%'],
    [m.issued, '86', '+18'],
  ]
  const bars = [[38, 79], [45, 88], [33, 74]]
  return (
    <div className="mk-pad">
      <div className="mk-head">
        <div>
          <small>{m.greeting}, Rina</small>
          <strong>{m.overview}</strong>
        </div>
        <span className="mk-avatar">RA</span>
      </div>

      <div className="mk-stats">
        {stats.map(([label, value, delta]) => (
          <div className="mk-card mk-stat" key={label}>
            <small>{label}</small>
            <strong>{value}</strong>
            <em>▲ {delta}</em>
          </div>
        ))}
      </div>

      <div className="mk-split">
        <div className="mk-card">
          <small>{m.gain}</small>
          <div className="mk-bars">
            {bars.map(([pre, post], i) => (
              <div className="mk-bargroup" key={m.programs[i]}>
                <div className="mk-barpair">
                  <i className="pre" style={{ '--h': `${pre}%`, '--d': `${i * 90}ms` }} />
                  <i style={{ '--h': `${post}%`, '--d': `${i * 90 + 120}ms` }} />
                </div>
                <span>{m.programs[i]}</span>
              </div>
            ))}
          </div>
          <div className="mk-legend"><span><i className="pre" />{m.pre}</span><span><i />{m.post}</span></div>
        </div>

        <div className="mk-card mk-hide-sm">
          <small>{m.upcoming}</small>
          {m.programs.map((p, i) => (
            <div className="mk-li" key={p}>
              <b className="mk-date">{12 + i}</b>
              <span>{p}<small>{i === 0 ? m.today : m.tomorrow} · {String(8 + i).padStart(2, '0')}.00</small></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Kursus ──────────────────────────────────────────────────────────── */
export function CourseMock({ m }) {
  const types = [m.video, m.doc, m.video, m.simulation]
  return (
    <div className="mk-pad">
      <div className="mk-head">
        <div>
          <small>{m.programs[2]}</small>
          <strong>{m.module} 2 · {m.lessons[2]}</strong>
        </div>
        <span className="mk-ring" style={{ '--v': 68 }}><b>68%</b></span>
      </div>

      <div className="mk-progress"><i style={{ '--w': '68%' }} /></div>

      <div className="mk-card mk-lessons">
        {m.lessons.map((l, i) => (
          <div className={`mk-lesson${i < 2 ? ' done' : ''}${i === 2 ? ' now' : ''}`} key={l}>
            <span className="mk-tick">{i < 2 ? <Check /> : i + 1}</span>
            <span className="mk-lesson-t">{l}<small>{m.lesson} {i + 1}</small></span>
            <span className={`mk-tag${i === 3 ? ' hot' : ''}`}>{types[i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Tes ─────────────────────────────────────────────────────────────── */
export function TestMock({ m }) {
  return (
    <div className="mk-pad">
      <div className="mk-head">
        <div>
          <small>{m.post} · {m.programs[2]}</small>
          <strong>{m.question} 4 {m.of} 20</strong>
        </div>
        <span className="mk-timer">
          <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2M9 2h6" /></svg>
          12:48
        </span>
      </div>
      <div className="mk-progress"><i style={{ '--w': '20%' }} /></div>

      <div className="mk-card mk-q">
        <p>{m.qText}</p>
        {m.options.map((o, i) => (
          <div className={`mk-opt${i === 1 ? ' on' : ''}`} key={o}>
            <b>{'ABCD'[i]}</b>{o}
          </div>
        ))}
      </div>
      <div className="mk-actions"><span className="mk-btn">{m.next} →</span></div>
    </div>
  )
}

/* ── Absensi QR ──────────────────────────────────────────────────────── */
export function QrMock({ m }) {
  return (
    <div className="mk-pad mk-qr">
      <div className="mk-card mk-qr-code">
        <small>{m.scanTitle}</small>
        <div className="mk-qr-box"><QrGlyph /><i className="mk-scanline" /></div>
        <span>{m.session}</span>
      </div>
      <div className="mk-card mk-qr-list">
        <div className="mk-head tight">
          <small>{m.present}</small>
          <strong>18<span>/20</span></strong>
        </div>
        {PEOPLE.map((p, i) => (
          <div className="mk-li mk-pop" style={{ '--d': `${300 + i * 260}ms` }} key={p}>
            <b className="mk-avatar sm">{p[0]}</b>
            <span>{p}<small>08.0{i + 1} · {m.scanned}</small></span>
            <em className="mk-ok"><Check /></em>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Sertifikat ──────────────────────────────────────────────────────── */
export function CertificateMock({ m }) {
  return (
    <div className="mk-pad mk-center">
      <div className="mk-cert">
        <Mark size={22} title="" />
        <h4>{m.certTitle}</h4>
        <small>{m.certGiven}</small>
        <strong>Dewi Kartika</strong>
        <small>{m.certFor}</small>
        <p>{m.programs[2]}</p>
        <div className="mk-cert-foot">
          <span>{m.certNo} GLD-2026-000184</span>
          <QrGlyph className="tiny" />
        </div>
        <span className="mk-seal"><Check />{m.verified}</span>
      </div>
    </div>
  )
}

/* ── Laporan ─────────────────────────────────────────────────────────── */
export function ReportMock({ m }) {
  const rows = [[92, 88, true], [100, 94, true], [64, 0, false], [100, 81, true], [48, 0, false]]
  return (
    <div className="mk-pad">
      <div className="mk-head">
        <div>
          <small>{m.reports}</small>
          <strong>{m.programs[0]}</strong>
        </div>
        <span className="mk-btn ghost">↓ {m.export}</span>
      </div>
      <div className="mk-card mk-table">
        <div className="mk-tr mk-th"><span>{m.participant}</span><span>{m.progress}</span><span>{m.result}</span></div>
        {rows.map(([prog, score, pass], i) => (
          <div className="mk-tr" key={PEOPLE[i]}>
            <span><b className="mk-avatar sm">{PEOPLE[i][0]}</b>{PEOPLE[i]}</span>
            <span className="mk-progress slim"><i style={{ '--w': `${prog}%`, '--d': `${i * 80}ms` }} /></span>
            <span className={`mk-pill${pass ? ' ok' : ''}`}>{pass ? `${m.passed} · ${score}` : m.ongoing}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Simulasi ────────────────────────────────────────────────────────── */
export function SimulationMock({ m }) {
  return (
    <div className="mk-sim">
      <div className="mk-sim-floor" />
      <div className="mk-sim-box a" /><div className="mk-sim-box b" /><div className="mk-sim-box c" />
      <div className="mk-sim-fire"><i /><i /><i /></div>
      <div className="mk-sim-target" />

      <div className="mk-hud tl">
        <small>{m.objectives}</small>
        {m.objList.map((o, i) => (
          <span className={i < 2 ? 'done' : ''} key={o}><b>{i < 2 && <Check />}</b>{o}</span>
        ))}
      </div>
      <div className="mk-hud tr"><small>{m.score}</small><strong>80</strong></div>
      <div className="mk-hud bc">{m.simulation} · {m.lessons[3]}</div>
    </div>
  )
}

/* ── Sesi daring ─────────────────────────────────────────────────────── */
export function ZoomMock({ m }) {
  const mins = [58, 58, 54, 57]
  return (
    <div className="mk-zoom">
      <div className="mk-zoom-grid">
        {PEOPLE.slice(0, 4).map((p, i) => (
          <div className={`mk-tile${i === 0 ? ' speaking' : ''}`} key={p}>
            <b>{p[0]}</b>
            <span>{p}</span>
          </div>
        ))}
        <span className="mk-live"><i />{m.live}</span>
      </div>
      <div className="mk-zoom-side">
        <small>{m.autoAttendance}</small>
        {PEOPLE.slice(0, 4).map((p, i) => (
          <div className="mk-li mk-pop" style={{ '--d': `${200 + i * 220}ms` }} key={p}>
            <span>{p}<small>{mins[i]} {m.minutes}</small></span>
            <em className="mk-ok"><Check /></em>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Halaman masuk lembaga ───────────────────────────────────────────── */
export function LoginMock({ m, name }) {
  return (
    <div className="mk-login">
      <div className="mk-login-cover">
        <span className="mk-login-logo">{name[0]}</span>
        <strong>{name}</strong>
      </div>
      <div className="mk-login-form">
        <small>{m.signInTo}</small>
        <strong>{name}</strong>
        <label>{m.email}<i /></label>
        <label>{m.password}<i /></label>
        <span className="mk-btn block">{m.signIn}</span>
      </div>
    </div>
  )
}
