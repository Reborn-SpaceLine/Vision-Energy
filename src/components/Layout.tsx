import { useEffect, useRef, useState } from 'react'
import { href } from '../router'
import { Icon } from './icons'

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Le Groupe', path: '/groupe' },
  { label: 'Nos Métiers', path: '/metiers' },
  { label: 'Actualités', path: '/actualites' },
  { label: 'Produits & Services', path: '/produits' },
  { label: 'Réseau de Stations', path: '/reseau' },
  { label: 'Carrières', path: '/carrieres' },
]

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span className="topbar-item">
            <Icon.pin /> Siège social : Douala · Cameroun
          </span>
          <span className="topbar-item">
            <Icon.headset /> Assistance : <a href="tel:+237699002000">+237 6 99 00 20 00</a>
          </span>
        </div>
        <div className="topbar-right">
          <span className="topbar-item accent">
            <Icon.siren /> Urgences Réseau : 800 10 10
          </span>
          <span className="topbar-item lang">
            <Icon.globe /> <b>FR</b> | EN
          </span>
        </div>
      </div>
    </div>
  )
}

export function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsidePointer)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsidePointer)
    }
  }, [open])

  return (
    <header className="header" ref={headerRef}>
      <div className="container header-inner">
        <a className="brand" href={href('/')} aria-label="Vision Energy S.A. — accueil">
          <img
            src="/images/logo-wordmark.png"
            alt="Vision Energy SA"
            className="brand-logo"
            width="210"
            height="27"
          />
        </a>

        <nav
          id="primary-navigation"
          className={`nav${open ? ' open' : ''}`}
          aria-label="Navigation principale"
        >
          <ul>
            {navItems.map((n) => {
              const active = n.path === path
              return (
                <li key={n.path}>
                  <a
                    href={href(n.path)}
                    aria-current={active ? 'page' : undefined}
                    className={active ? 'active' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="nav-mobile-cta">
            <a
              className="btn btn--primary btn--block"
              href={href('/reseau', 'contact')}
              onClick={() => setOpen(false)}
            >
              <Icon.send /> Nous Contacter
            </a>
          </div>
        </nav>

        {open && (
          <div
            className="nav-backdrop"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
        )}

        <div className="header-actions">
          <a className="btn btn--primary btn--sm header-cta-desktop" href={href('/reseau', 'contact')}>
            <Icon.send /> Nous Contacter
          </a>
          <a className="user-chip" href={href('/reseau', 'contact')} aria-label="Espace client">
            <Icon.user />
          </a>
          <button
            type="button"
            className="nav-burger"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Icon.close /> : <Icon.burger />}
          </button>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <div className="footer-brand">
            <img src="/images/logo-wordmark.png" alt="Vision Energy SA" width="186" height="24" />
          </div>
          <p>
            Carburants, gaz domestique et lubrifiants dans nos stations au Cameroun.
          </p>
          <span className="footer-tagline">La qualité à bon prix</span>
        </div>

        <nav className="footer-column" aria-label="Produits et services">
          <h4>Nos produits &amp; services</h4>
          <ul>
            <li>
              <a href={href('/produits', 'carburants')}>Carburants additivés</a>
            </li>
            <li>
              <a href={href('/produits', 'gaz')}>Gaz domestique VisionGaz</a>
            </li>
            <li>
              <a href={href('/produits', 'lubrifiants')}>Lubrifiants VisionPro</a>
            </li>
            <li>
              <a href={href('/produits', 'boutiques')}>Services en station</a>
            </li>
            <li>
              <a href={href('/produits', 'flottes')}>Solutions pour flottes</a>
            </li>
            <li>
              <a href={href('/produits', 'stockage')}>Cuves &amp; approvisionnement</a>
            </li>
            <li>
              <a href={href('/reseau', 'contact')}>Devis professionnels</a>
            </li>
          </ul>
        </nav>

        <div className="footer-column">
          <h4>Nous contacter</h4>
          <ul className="footer-contact">
            <li><Icon.pin /> B.P. 11 480, Douala · Cameroun</li>
            <li>
              <Icon.phone /> <a href="tel:+237699002000">+237 6 99 00 20 00</a>
            </li>
            <li>
              <Icon.mail /> <a href="mailto:direction@vision-energy.cm">direction@vision-energy.cm</a>
            </li>
          </ul>
          <a className="footer-rse" href={href('/reseau')}>
            <Icon.navigate /> Trouver une station
          </a>
        </div>

        <nav className="footer-column footer-company" aria-label="Vision Energy">
          <h4>Vision Energy</h4>
          <ul>
            <li>
              <a href={href('/groupe')}>Le Groupe</a>
            </li>
            <li>
              <a href={href('/metiers')}>Nos métiers</a>
            </li>
            <li><a href={href('/actualites')}>Actualités</a></li>
            <li><a href={href('/carrieres')}>Carrières</a></li>
            <li><a href={href('/groupe', 'rse')}>RSE &amp; Éthique</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Vision Energy S.A. · Tous droits réservés.</span>
          <a href="mailto:direction@vision-energy.cm">Nous écrire</a>
        </div>
      </div>
    </footer>
  )
}
