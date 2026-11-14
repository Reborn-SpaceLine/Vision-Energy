import { href } from '../router'
import { Icon } from '../components/icons'

/* ------------------------------------------------------------------ hero */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          className="hero-img"
          src="/assets/images/station-panoramic.jpg"
          alt="Station-service Vision Energy au Cameroun"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Colonne Gauche : Titre, Lead & Actions */}
          <div className="hero-card">
            <span className="eyebrow eyebrow--dot eyebrow--mint">
              Réseau de Stations-Service · Cameroun
            </span>
            <h1 className="hero-title">
              Carburants Additivés &amp; Gaz Domestique{' '}
              <span className="hl--mint">au Meilleur Prix</span>
            </h1>
            <p className="hero-text">
              Carburants, gaz domestique et lubrifiants aux prix homologués, dans nos stations de
              Douala, Bafoussam et de l’Ouest.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={href('/produits')}>
                Nos Produits &amp; Tarifs <Icon.arrowR />
              </a>
              <a className="btn btn--ghost" href={href('/reseau')}>
                <Icon.navigate /> Trouver une station
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- produits */
const produits = [
  {
    icon: <Icon.flame />,
    img: '/assets/images/gaz-agent.jpg',
    kicker: 'Gaz Domestique & Ménages',
    title: 'VisionGaz B6, B12.5 & B35',
    text: 'Bouteilles scellées et pesées avec exactitude, recharge express en station.',
    link: { label: 'Formats & Points de Vente', to: '/produits', sec: 'gaz' },
  },
  {
    icon: <Icon.fuel />,
    img: '/assets/images/pump.jpg',
    kicker: 'Moteurs & Flottes',
    title: 'Carburants Additivés ProClean™',
    text: 'Super 95 à 840 CFA/L et Gasoil à 828 CFA/L, formulés pour protéger les injecteurs.',
    link: { label: 'Tarifs & Spécifications', to: '/produits', sec: 'carburants' },
  },
  {
    icon: <Icon.drop />,
    img: '/assets/images/pro-a.jpg',
    kicker: 'Moteurs & Industrie',
    title: 'Lubrifiants VisionPro™',
    text: 'Huiles synthétiques 5W-30, 10W-40 et 15W-40 pour véhicules et engins.',
    link: { label: 'Guide de Graissage', to: '/produits', sec: 'lubrifiants' },
  },
  {
    icon: <Icon.shop />,
    img: '/assets/images/station-boutique.jpg',
    kicker: 'Services en Station',
    title: 'Boutiques Express & Vidange',
    text: 'Café, rafraîchissements, vidange rapide et lavage.',
    link: { label: 'Services en Station', to: '/produits', sec: 'boutiques' },
  },
]

function Produits() {
  const featuredProducts = produits.slice(0, 2)
  const additionalProducts = produits.slice(2)

  return (
    <section className="section section--bg produits home-products">
      <div className="container">
        <div className="sec-head home-products-head">
          <div>
            <span className="eyebrow">Nos essentiels</span>
            <h2 className="h2">Gaz domestique &amp; carburants</h2>
          </div>
          <p className="lead">
            Deux offres au cœur de notre réseau, disponibles dans nos stations.
          </p>
        </div>

        <div className="prod-featured-grid">
          {featuredProducts.map((p, index) => (
            <article className="card card-hover prod-card prod-card--featured" key={p.title}>
              <div className="prod-card-media">
                <img
                  src={p.img}
                  alt={p.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
                <span className="icon-tile">{p.icon}</span>
              </div>
              <div className="prod-card-body">
                <span className="prod-kicker">{p.kicker}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="prod-text">{p.text}</p>
                <a className="btn btn--outline prod-card-action" href={href(p.link.to, p.link.sec)}>
                  Découvrir l’offre <Icon.arrowR />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="prod-support-head">
          <h3>Autres services</h3>
          <a className="link-arrow" href={href('/produits')}>
            Toute l’offre <Icon.arrowR />
          </a>
        </div>
        <div className="prod-support-grid">
          {additionalProducts.map((p) => (
            <article className="card card-hover prod-card prod-card--support" key={p.title}>
              <div className="prod-card-media">
                <img src={p.img} alt={p.title} loading="lazy" decoding="async" />
                <span className="icon-tile">{p.icon}</span>
              </div>
              <div className="prod-card-body">
                <span className="prod-kicker">{p.kicker}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="prod-text">{p.text}</p>
                <a className="link-arrow" href={href(p.link.to, p.link.sec)}>
                  En savoir plus <Icon.arrowR />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- gouvernance */
const govStats = [
  { value: '30', label: 'Stations visées d\'ici 2028' },
  { value: '6', label: 'Stations en exploitation' },
  { value: '2', label: 'Centres gaz — Douala & Bafoussam' },
]

function Gouvernance() {
  return (
    <section className="section gov">
      <div className="container gov-grid">
        <div>
          <span className="eyebrow">Capital &amp; Ingénierie camerounais</span>
          <h2 className="h2">
            Un réseau moderne et responsable{' '}
            <span className="hl">au service de l'économie locale.</span>
          </h2>
          <p className="lead">
            Fondée à Douala, Vision Energy développe des stations-service et des centres gaz sécurisés,
            avec une priorité : la traçabilité et la satisfaction des clients.
          </p>
          <div className="gov-stats">
            {govStats.map((s) => (
              <div className="gov-stat" key={s.value}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="gov-foot">
            <a className="btn btn--primary" href={href('/groupe')}>
              Découvrir le Groupe <Icon.arrowR />
            </a>
            <span className="gov-note">
              <Icon.check /> Homologation MINMIDT
            </span>
          </div>
        </div>
        <figure className="media gov-media">
          <img
            src="/assets/images/station-panoramic.jpg"
            alt="Station-service Vision Energy moderne au Cameroun"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="gov-caption">
            <div>
              <span>Réseau &amp; infrastructures</span>
              <b>Douala, Bafoussam &amp; Région Ouest</b>
              <p>Stations modernes et centres gaz opérationnels</p>
            </div>
            <i className="icon-tile icon-tile--dark">
              <Icon.building />
            </i>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- actualites */
const news = [
  {
    img: '/assets/images/station-clean.png',
    badge: 'Expansion réseau',
    date: '28 Avril 2026',
    place: 'Mbouda, Cameroun',
    title: 'Ouverture officielle de notre station de Mbouda',
    text: 'Dans l’Ouest, la station propose carburants, gaz domestique, lubrifiants et rafraîchissements.',
    link: 'Lire le communiqué',
  },
  {
    img: '/assets/images/station-aerial.jpg',
    badge: 'Réseau & stations',
    date: '15 Janvier 2026',
    place: 'Batcham, Cameroun',
    title: 'Inauguration de la station de l\'axe Mbouda–Batcham',
    text: 'Cette ouverture renforce le réseau dans l’Ouest, avec un objectif de 30 stations d’ici 2028.',
    link: 'Retour sur l\'inauguration',
  },
  {
    img: '/assets/images/station-hero.png',
    badge: 'Conformité & environnement',
    date: '27 Juin 2025',
    place: 'Tobe (Poumougne), Cameroun',
    title: 'Station de Tobe : dossier de conformité reçu',
    text: 'Étude d\'impact et dossier technique déposés auprès des autorités — implantation de Tobe accompagnée jusqu\'à sa mise en service.',
    link: 'Détails du dossier',
  },
]

function Actualites() {
  return (
    <section className="section news">
      <div className="container">
        <div className="sec-head sec-head--stack">
          <span className="eyebrow eyebrow--center">Nos actualités</span>
          <p className="lead">
            Suivez les dernières étapes de notre expansion et nos innovations réseau.
          </p>
        </div>
        <div className="grid grid-3">
          {news.map((n) => (
            <article className="card card-hover news-card" key={n.title}>
              <div className="media news-media">
                <img src={n.img} alt="" loading="lazy" decoding="async" />
                <span className="news-badge">{n.badge}</span>
              </div>
              <div className="news-body">
                <div className="news-meta">
                  <span>
                    <Icon.calendar /> {n.date}
                  </span>
                  <i aria-hidden="true">•</i>
                  <span>{n.place}</span>
                </div>
                <h3 className="h3 news-title">{n.title}</h3>
                <p className="prod-text">{n.text}</p>
                <a className="link-arrow" href={href('/actualites')}>
                  {n.link} <Icon.arrowR />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="center" style={{ marginTop: 34 }}>
          <a className="btn btn--primary" href={href('/actualites')}>
            Toutes nos actualités <Icon.arrowR />
          </a>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- visionpass */
const wallets = ['Orange Money', 'MTN MoMo', 'Visa / Mastercard', 'Espèces en station']

function VisionPass() {
  return (
    <section className="section section--dark vp">
      <div className="container vp-grid">
        <div>
          <span className="eyebrow eyebrow--mint">Paiement dématérialisé en piste</span>
          <h2 className="h2 vp-title">
            Réglez en station avec{' '}
            <span className="hl--mint">Mobile Money &amp; VisionPass</span>
          </h2>
          <p className="lead vp-lead">
            Paiement sans contact, remises sur carburant et gestion de flotte sans espèces.
          </p>
          <div className="chips vp-chips">
            {wallets.map((w) => (
              <span className="chip chip--dark" key={w}>
                <Icon.card /> {w}
              </span>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 26 }}>
            <a className="btn btn--mint" href={href('/produits', 'visionpass')}>
              <Icon.card /> Carte VisionPass
            </a>
            <a className="btn btn--ghost" href={href('/produits', 'flottes')}>
              Espace Gestionnaire de Flotte <Icon.arrowR />
            </a>
          </div>
        </div>
        <div className="vp-visual">
          <div className="pass">
            <div className="pass-top">
              <span className="pass-chip" />
              <span className="pass-brand">VisionPass</span>
            </div>
            <div className="pass-nb">•••• &nbsp; 8820 &nbsp; 4192 &nbsp; 0048</div>
            <div className="pass-foot">
              <div>
                <b>TITULAIRE PRO</b>
                <span>FLOTTE TRANSPORT DOUALA</span>
              </div>
              <div className="pass-right">
                <b>VALIDITÉ</b>
                <span>12 / 29</span>
              </div>
            </div>
            <div className="pass-nfc">
              <Icon.nfc />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ localisation */
function Localisation() {
  return (
    <section className="section section--bg loc">
      <div className="container loc-grid">
        <div>
          <span className="eyebrow">Géolocalisation immédiate</span>
          <h2 className="h2">Trouvez la station Vision Energy la plus proche</h2>
          <p className="lead">
            Consultez les services disponibles : vidange, lavage et gaz.
          </p>
        </div>
        <form
          className="loc-form"
          onSubmit={(e) => {
            e.preventDefault()
            window.location.hash = '#/reseau'
          }}
        >
          <label className="loc-input">
            <Icon.search />
            <input
              type="search"
              placeholder="Ville ou quartier…"
              aria-label="Rechercher une station"
            />
          </label>
          <button className="btn btn--primary" type="submit">
            Rechercher
          </button>
        </form>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- cta band */
export function CtaBand({
  title = 'VisionPass & Carte Carburant Pro',
  text = 'Paiement sans contact, gestion de flotte et remises instantanées en station.',
  primary = { label: "Découvrir VisionPass", to: '/produits', sec: 'visionpass' },
  secondary = { label: 'Espace Entreprise', to: '/produits', sec: 'flottes' },
}: {
  title?: string
  text?: string
  primary?: { label: string; to: string; sec?: string }
  secondary?: { label: string; to: string; sec?: string }
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div className="cta-icon">
          <Icon.card />
        </div>
        <div className="cta-text">
          <b>{title}</b>
          <span>{text}</span>
        </div>
        <div className="btn-row">
          <a className="btn btn--outline btn--sm" href={href(primary.to, primary.sec)}>
            {primary.label}
          </a>
          <a className="btn btn--mint btn--sm" href={href(secondary.to, secondary.sec)}>
            {secondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Produits />
      <Gouvernance />
      <Actualites />
      <VisionPass />
      <Localisation />
    </>
  )
}
