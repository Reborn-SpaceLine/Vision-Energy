import { useState } from 'react'
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
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href={href('/')} aria-label="Vision Energy — accueil">
          <img src="/images/logo-mark.png" alt="" className="brand-img" width="46" height="46" />
          <span className="brand-text">
            <b>VISION ENERGY</b>
            <span>Produits Pétroliers &amp; Gaz Domestique</span>
          </span>
        </a>
        <button
          type="button"
          className="nav-burger"
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Icon.close /> : <Icon.burger />}
        </button>
        <nav className={`nav${open ? ' open' : ''}`} aria-label="Navigation principale">
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
        </nav>
        <div className="header-actions">
          <a className="btn btn--primary btn--sm" href={href('/reseau', 'contact')}>
            <Icon.send /> Nous Contacter
          </a>
          <a className="user-chip" href={href('/reseau', 'contact')} aria-label="Espace client">
            <Icon.user />
          </a>
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
            <img src="/images/logo-mark.png" alt="" width="38" height="38" />
            <b>Vision Energy</b>
          </div>
          <p>
            Vision Energy S.A. — société anonyme camerounaise des produits pétroliers, du gaz et des
            énergies. Nos stations de Douala, Bafoussam, Batcham, Mbouda et Tobe délivrent carburants
            additivés, gaz domestique et lubrifiants, avec un objectif de 30 stations d’ici 2028.
          </p>
          <div className="footer-certs">
            <span>LA QUALITÉ À BON PRIX</span>
            <i aria-hidden="true">|</i>
            <span className="green">RÉSEAU &amp; CENTRES GAZ · CAMEROUN</span>
          </div>
        </div>
        <div>
          <h4>Siège &amp; Gouvernance</h4>
          <ul className="footer-contact">
            <li>
              <Icon.pin /> B.P. 11 480, Douala · Cameroun
            </li>
            <li>
              <Icon.phone />{' '}
              <a href="tel:+237699002000">+237 6 99 00 20 00</a>
            </li>
            <li>
              <Icon.mail />{' '}
              <a href="mailto:direction@vision-energy.cm">direction@vision-energy.cm</a>
            </li>
          </ul>
          <a className="footer-rse" href={href('/groupe', 'rse')}>
            Rapport RSE &amp; Éthique
          </a>
        </div>
        <div>
          <h4>Réseau &amp; Services</h4>
          <ul>
            <li>
              <a href={href('/reseau')}>Trouver une Station-Service</a>
            </li>
            <li>
              <a href={href('/produits', 'gaz')}>Gaz Domestique &amp; Centres de Remplissage</a>
            </li>
            <li>
              <a href={href('/produits', 'lubrifiants')}>Lubrifiants Haute Performance</a>
            </li>
            <li>
              <a href={href('/produits', 'carburants')}>Carburants Additivés</a>
            </li>
            <li>
              <a href={href('/produits', 'boutiques')}>Boutiques &amp; Services en Station</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Solutions B2B &amp; Pro</h4>
          <ul>
            <li>
              <a href={href('/produits', 'flottes')}>Carte Carburant Flottes</a>
            </li>
            <li>
              <a href={href('/produits', 'stockage')}>Cuves &amp; Ravitaillement sur Site</a>
            </li>
            <li>
              <a href={href('/produits', 'logistique')}>Approvisionnement Vrac</a>
            </li>
            <li>
              <a href={href('/carrieres')}>Espace Recrutement &amp; Talents</a>
            </li>
            <li>
              <a href={href('/reseau', 'contact')}>Devis Professionnels</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Vision Energy S.A. Tous droits réservés.</span>
          <nav aria-label="Liens légaux">
            <a href={href('/')}>Mentions Légales</a>
            <a href={href('/')}>Politique de Confidentialité</a>
            <a href={href('/')}>Charte HSE</a>
            <a href={href('/')}>Conditions Générales</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
