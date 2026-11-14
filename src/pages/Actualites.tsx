import { href } from '../router'
import { Icon } from '../components/icons'
import '../styles/act.css'

function IconHome() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <path d="M3.5 10.5 12 3.5l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5.5h4V20" />
    </svg>
  )
}

function Hero() {
  return (
    <section className="act-hero page-hero">
      <div className="container">
        <nav className="act-crumb" aria-label="Fil d'Ariane">
          <IconHome />
          <a href={href('/')}>Accueil</a>
          <i>/</i>
          <b>Actualités</b>
        </nav>
        <span className="act-hero-pill">
          <Icon.megaphone /> Espace Presse
        </span>
        <h1 className="act-hero-title">
          Actualités du réseau <span className="hl">Vision Energy</span>
        </h1>
        <p className="act-hero-lead">
          Ouvertures de stations, projets gaz et actualités réglementaires au Cameroun.
        </p>
        <div className="btn-row act-hero-cta">
          <a className="btn btn--primary" href={href('/actualites', 'actualites')}>
            <Icon.calendar /> Voir les actualités
          </a>
          <a className="btn btn--outline" href={href('/carrieres')}>
            <Icon.briefcase /> Offres d'emploi
          </a>
        </div>
      </div>
    </section>
  )
}

const newsCards = [
  {
    img: '/assets/images/station-aerial.jpg',
    date: '28 Avril 2026',
    read: '3 min',
    title: 'Inauguration officielle de la station de Mbouda',
    text: 'Ouverte dans les Bamboutos, elle propose carburants, gaz en bouteille et lubrifiants.',
  },
  {
    img: '/assets/images/station-clean.png',
    date: '15 Janvier 2026',
    read: '5 min',
    title: 'Batcham ouverte sur l’axe Mbouda – Batcham',
    text: 'Cette ouverture renforce le maillage de Vision Energy dans la Région de l’Ouest.',
  },
  {
    img: '/assets/images/station-modern-2.png',
    date: '27 Juin 2025',
    read: '4 min',
    title: 'Station de Tobe : accompagnement vers la mise en conformité',
    text: 'Étude d’impact, plan d’urgence et dossier technique transmis au MINMIDT pour la station sur l’axe Douala–Yaoundé.',
  },
]

function News() {
  return (
    <section className="section act-news" id="actualites">
      <div className="container">
        <div className="sec-head act-news-head">
          <div>
            <span className="eyebrow eyebrow--dot">Actualités du réseau</span>
            <h2 className="h2 act-news-title">Les dernières nouvelles</h2>
            <p className="act-news-lead">
              Les ouvertures et étapes clés de notre réseau.
            </p>
          </div>
        </div>

        <div className="grid grid-3 act-cards">
          {newsCards.map((card) => (
            <article className="card card--pad0 card-hover act-card" key={card.title}>
              <div className="act-card-media">
                <img src={card.img} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="act-card-body">
                <div className="news-meta">
                  <span>
                    <Icon.calendar /> {card.date}
                  </span>
                  <i aria-hidden="true">•</i>
                  <span>
                    <Icon.clock /> {card.read}
                  </span>
                </div>
                <h3 className="act-card-title">{card.title}</h3>
                <p className="act-card-text">{card.text}</p>
                <a className="link-arrow" href={href('/actualites')}>
                  Consulter l’article <Icon.arrowR />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="act-press" id="presse">
          <div className="icon-tile act-press-icon">
            <Icon.folderStar />
          </div>
          <div className="act-press-text">
            <span className="eyebrow eyebrow--muted">Relations médias</span>
            <h3 className="act-press-title">Espace presse &amp; documentation</h3>
            <p>
              Logo institutionnel, photos et informations réseau disponibles sur demande.
            </p>
          </div>
          <div className="btn-row act-press-cta">
            <a
              className="btn btn--primary act-press-btn"
              href="mailto:direction@vision-energy.cm?subject=Demande%20de%20kit%20m%C3%A9dia"
            >
              <Icon.mail /> Demander le kit média
            </a>
            <a className="btn act-press-btn2" href={href('/reseau', 'contact')}>
              <Icon.phone /> Contacter le réseau
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ActualitesPage() {
  return (
    <>
      <Hero />
      <News />
    </>
  )
}
