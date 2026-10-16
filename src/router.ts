import { useEffect, useState } from 'react'

export type Route = { path: string; section: string }

export function parseHash(): Route {
  const raw = window.location.hash.replace(/^#/, '')
  const parts = raw.split('#')
  let path = parts[0] || '/'
  if (!path.startsWith('/')) path = '/' + path
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1)
  return { path, section: parts[1] || '' }
}

export function href(to: string, section?: string): string {
  return `#${to}${section ? `#${section}` : ''}`
}

export function useRoute(): Route {
  const [route, setRoute] = useState(parseHash)
  useEffect(() => {
    const onChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
    if (route.section) {
      const el = document.getElementById(route.section)
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [route.path, route.section])
  return route
}
