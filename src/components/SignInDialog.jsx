import { useEffect, useRef, useState } from 'react'
import { APP_URL, PLATFORM_DOMAIN } from '../config'

/**
 * Where "Masuk" leads.
 *
 * Each institution has its own subdomain, and that is the address worth using:
 * it carries their logo, colours and name. So the primary path asks which
 * institution, and sends the visitor there.
 *
 * There is deliberately no "look up my institution" search. An endpoint that
 * turns a name into a subdomain would also let anyone page through the
 * customer list, which is not a trade worth making for one input field.
 *
 * The fallback link is the safety net: signing in on the platform host works
 * for everyone, because the backend only enforces a tenant match when a tenant
 * host was addressed (osct_backend/src/routes/auth.js). The visitor loses their
 * institution's branding, not their access.
 */
export default function SignInDialog({ t, onClose }) {
  const [slug, setSlug] = useState('')
  const inputRef = useRef(null)
  const boxRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // Subdomain labels are lowercase letters, digits and hyphens. Stripping as
  // they type means a pasted "PT Akademi" cannot produce a URL that fails with
  // a certificate error the visitor has no way to interpret.
  const clean = slug.toLowerCase().replace(/[^a-z0-9-]/g, '')
  const target = clean ? `https://${clean}.${PLATFORM_DOMAIN}` : null

  function go(e) {
    e.preventDefault()
    if (target) window.location.href = target
  }

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => { if (!boxRef.current?.contains(e.target)) onClose() }}
      role="presentation"
    >
      <div className="modal" ref={boxRef} role="dialog" aria-modal="true" aria-label={t.signIn.title}>
        <button className="modal-close" onClick={onClose} aria-label={t.signIn.close}>×</button>
        <h2 className="modal-title">{t.signIn.title}</h2>
        <p className="modal-lead">{t.signIn.lead}</p>

        <form onSubmit={go}>
          <div className="slug-row">
            <input
              ref={inputRef}
              className="slug-input"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder={t.signIn.placeholder}
              aria-label={t.signIn.placeholder}
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck="false"
            />
            <span className="slug-suffix">.{PLATFORM_DOMAIN}</span>
          </div>

          <button className="btn btn-primary btn-block" type="submit" disabled={!target}>
            {t.signIn.go}
          </button>
        </form>

        {target && (
          <p className="modal-hint">
            {t.signIn.hintPrefix} <strong>{target.replace('https://', '')}</strong>
          </p>
        )}

        <a className="modal-fallback" href={APP_URL}>{t.signIn.fallback}</a>
      </div>
    </div>
  )
}
