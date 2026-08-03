/**
 * The handful of values that differ between a local check and the real site.
 *
 * Read from Vite env vars so the deployed build can be pointed at the right
 * domain and phone number without editing components. Defaults are the live
 * values, so `npm run dev` behaves like production without a .env file.
 */

// Where institution subdomains live: {slug}.{PLATFORM_DOMAIN}
export const PLATFORM_DOMAIN = import.meta.env.VITE_PLATFORM_DOMAIN || 'gladhy.co.id'

// The app itself. `app` is a reserved subdomain label in the backend
// (src/middleware/tenant.js), so it can never collide with an institution.
export const APP_URL = import.meta.env.VITE_APP_URL || `https://app.${PLATFORM_DOMAIN}`

// International format, digits only — wa.me rejects '+' and spaces.
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || ''

// Same origin in production: Caddy proxies /api on the landing host too, which
// is what keeps the contact form free of CORS entirely.
export const API_BASE = import.meta.env.VITE_API_URL || ''

export function whatsappLink(text) {
  if (!WHATSAPP_NUMBER) return null
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
