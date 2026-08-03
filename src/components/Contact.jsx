import { useState } from 'react'
import Reveal from './Reveal'
import { API_BASE, whatsappLink } from '../config'

export default function Contact({ t }) {
  const [form, setForm] = useState({ name: '', institution: '', email: '', message: '', website: '' })
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const wa = whatsappLink(
    t.htmlLang === 'id'
      ? 'Halo, saya ingin tahu lebih lanjut tentang Gladhy.'
      : 'Hello, I would like to know more about Gladhy.'
  )

  async function submit(e) {
    e.preventDefault()
    if (state === 'sending') return
    setState('sending')
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/v1/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        // The API explains rate limiting and outages in words the visitor can
        // act on ("use WhatsApp"), so prefer its message over a generic one.
        const data = await res.json().catch(() => ({}))
        setError(data.error || t.contact.errGeneric)
        setState('error')
        return
      }
      setState('sent')
    } catch {
      setError(t.contact.errGeneric)
      setState('error')
    }
  }

  return (
    <section className="section section-dark" id="contact">
      <div className="container container-narrow">
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-lead">{t.contact.lead}</p>
        </Reveal>

        {wa && (
          <Reveal delay={80}>
            <a className="btn btn-wa" href={wa} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
                <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
              </svg>
              {t.contact.wa}
            </a>
          </Reveal>
        )}

        <Reveal delay={140}>
          {state === 'sent' ? (
            <div className="form-done" role="status">
              <strong>{t.contact.okTitle}</strong>
              <span>{t.contact.okBody}</span>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              {/* Honeypot: hidden from people, irresistible to bots that fill
                  every field. The API answers such a submission normally and
                  sends nothing, so a bot cannot tell it was caught. */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off"
                  value={form.website} onChange={set('website')} />
              </div>

              <div className="form-row">
                <label>
                  <span>{t.contact.name}</span>
                  <input required value={form.name} onChange={set('name')} autoComplete="name" />
                </label>
                <label>
                  <span>{t.contact.institution}</span>
                  <input required value={form.institution} onChange={set('institution')} autoComplete="organization" />
                </label>
              </div>

              <label>
                <span>{t.contact.email}</span>
                <input required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
              </label>

              <label>
                <span>{t.contact.message}</span>
                <textarea required rows={4} value={form.message} onChange={set('message')} />
              </label>

              {error && <p className="form-error" role="alert">{error}</p>}

              <button className="btn btn-primary btn-block" type="submit" disabled={state === 'sending'}>
                {state === 'sending' ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
