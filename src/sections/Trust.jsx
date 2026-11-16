import Reveal from '../motion/Reveal'
import { Counter } from '../motion/pointer'
import { CLIENTS } from '../data/plans'

/**
 * Angka di sini adalah fakta produk yang bisa dicek di kode, bukan angka
 * pemakaian. Jumlah lembaga/peserta/sertifikat hanya boleh dipasang kalau
 * datanya benar-benar ada — angka karangan di halaman yang menjual "bukti
 * yang bisa diperiksa" merusak pesan utamanya.
 *
 * Deret logo hanya muncul bila CLIENTS (src/data/plans.js) diisi.
 */
export default function Trust({ t }) {
  return (
    <section className="trust" aria-label={t.trust.title}>
      <div className="container">
        <Reveal as="p" className="trust-title">{t.trust.title}</Reveal>
        <Reveal as="dl" className="stats" stagger={0.1}>
          {t.trust.stats.map((s) => (
            <div className="stat" key={s.l}>
              <dd><Counter value={s.v} />{s.suffix}</dd>
              <dt>{s.l}</dt>
            </div>
          ))}
        </Reveal>

        {CLIENTS.length > 0 && (
          <div className="clients">
            <p>{t.trust.clients}</p>
            <div className="marquee">
              {/* Digandakan agar putarannya tanpa sambungan; salinan kedua dekoratif. */}
              {[0, 1].map((k) => (
                <ul key={k} aria-hidden={k === 1}>
                  {CLIENTS.map((c) => (
                    <li key={c.name}><img src={c.src} alt={k === 0 ? c.name : ''} loading="lazy" /></li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
