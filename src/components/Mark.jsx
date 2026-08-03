/**
 * The Gladhy mark — three ascending bars and a dot.
 *
 * Copied from the app (osct_frontend/src/shared/BrandLogo.jsx) rather than
 * imported: these are separate repositories, and wiring them together for one
 * SVG and four hex values would couple a marketing site to the product's
 * release cycle. If the mark ever changes, it changes in both places.
 *
 * Geometry measured from public/gladhy-mark.png on a 480px canvas, scaled to
 * this 48-unit viewBox.
 */
export const BRAND = {
  amber: '#F2B85C',
  orange: '#E8963A',
  terracotta: '#C4552F',
  ink: '#2A1D17',
}

export default function Mark({ size = 28, title = 'Gladhy' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label={title}
      style={{ flexShrink: 0, display: 'block' }}
    >
      <rect x="6" y="8.3" width="14.9" height="8.1" rx="4.05" fill={BRAND.amber} />
      <circle cx="37.5" cy="12.35" r="4.44" fill={BRAND.terracotta} />
      <rect x="6" y="19.9" width="25.4" height="8.1" rx="4.05" fill={BRAND.orange} />
      <rect x="6" y="31.5" width="35.9" height="8.1" rx="4.05" fill={BRAND.terracotta} />
    </svg>
  )
}
