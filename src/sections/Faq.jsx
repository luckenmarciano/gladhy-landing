import SectionHead from '../motion/SectionHead'
import Reveal from '../motion/Reveal'

/**
 * <details> bawaan peramban: bisa dibuka dengan keyboard, terbaca pembaca
 * layar, dan isinya ikut ditemukan Ctrl+F — tanpa satu baris JavaScript.
 * `name` yang sama membuat hanya satu yang terbuka. Animasi tingginya ada di
 * CSS dan hanya aktif di peramban yang mendukungnya.
 */
export default function Faq({ t }) {
  return (
    <section className="section" id="faq">
      <div className="container faq-grid">
        <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />

        <Reveal className="faq-list" stagger={0.06}>
          {t.faq.items.map((f, i) => (
            <details className="faq" name="faq" key={f.q} open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
