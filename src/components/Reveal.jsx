import { useEffect, useRef, useState } from 'react'

/**
 * Fades a section in as it scrolls into view.
 *
 * IntersectionObserver rather than an animation library: this is the only
 * motion on the page, and a dependency for one effect is weight the visitor
 * pays for on every visit.
 *
 * Respects prefers-reduced-motion by showing the content immediately — for
 * someone who gets motion sickness, a fade-in on every section is not a nice
 * touch.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect() // once revealed, stay revealed
        }
      },
      { rootMargin: '0px 0px -12% 0px' }
    )
    io.observe(el)

    // Safety net. Content that starts at opacity 0 and waits for a scroll is
    // content that can stay invisible forever — to a crawler that never
    // scrolls, to a screenshot tool, to anyone who lands on an anchor deep in
    // the page. After a moment, show it regardless.
    const failsafe = setTimeout(() => { setShown(true); io.disconnect() }, 2500)

    return () => { clearTimeout(failsafe); io.disconnect() }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? ' is-shown' : ''}${className ? ' ' + className : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
