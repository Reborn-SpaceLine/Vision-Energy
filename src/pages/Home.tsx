import { href } from '../router'
import { Icon } from '../components/icons'

/* ------------------------------------------------------------------ hero */
const heroChecks = [
  { icon: <Icon.fuel />, label: 'Super 95 : 840 CFA/L' },
  { icon: <Icon.fuel />, label: 'Gasoil : 828 CFA/L' },
  { icon: <Icon.flame />, label: 'Gaz B6, B12.5 & B35' },
  { icon: <Icon.shield />, label: 'Certifié MINMIDT' },
]

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
              Super 95, Gasoil ProClean™, bouteilles VisionGaz scellées et lubrifiants VisionPro™
              servis au prix juste homologué à Douala, Bafoussam et dans l'Ouest.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={href('/produits')}>
                Nos Produits &amp; Tarifs <Icon.arrowR />
              </a>
              <a className="btn btn--ghost" href={href('/reseau')}>
                <Icon.navigate /> Trouver une station
              </a>
            </div>
            <ul className="hero-checks">
              {heroChecks.map((c) => (
                <li key={c.label}>
                  {c.icon} {c.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Droite : Vitrine Produits & Services en 1ère Scroll (Gaz & Carburant) */}
          <div className="hero-showcase">
            <div className="hero-showcase-head">
              <span className="hero-showcase-badge">
                <Icon.bolt /> En Première Ligne
              </span>
              <span className="hero-showcase-title">Produits &amp; Services Phares</span>
            </div>

            <div className="hero-showcase-grid">
              {/* Carte Gaz Domestique */}
              <a className="hero-prod-card hero-prod-card--gaz" href={href('/produits', 'gaz')}>
                <div className="hero-prod-media">
                  <img
                    src="/assets/images/gaz-agent.jpg"
                    alt="Agent Vision Energy présentant les bouteilles de gaz VisionGaz"
                    decoding="async"
                  />
                  <span className="hero-prod-pill hero-prod-pill--mint">Gaz Domestique</span>
                </div>
                <div className="hero-prod-body">
                  <div className="hero-prod-top">
                    <span className="hero-prod-ico"><Icon.flame /></span>
                    <div>
                      <h3 className="hero-prod-title">VisionGaz B6, B12.5 &amp; B35</h3>
                      <p className="hero-prod-desc">Bouteilles scellées, poids garanti, recharge express.</p>
                    </div>
                  </div>
                  <div className="hero-prod-foot">
                    <span className="hero-prod-tag">Dès 3 400 CFA</span>
                    <span className="hero-prod-link">Voir l'offre <Icon.arrowR /></span>
                  </div>
                </div>
              </a>

              {/* Carte Carburants */}
              <a className="hero-prod-card hero-prod-card--carbu" href={href('/produits', 'carburants')}>
                <div className="hero-prod-media">
                  <img
                    src="/assets/images/pump.jpg"
                    alt="Distributeur de carburants Super 95 et Gasoil Vision Energy"
                    decoding="async"
                  />
                  <span className="hero-prod-pill hero-prod-pill--blue">Carburants Additivés</span>
                </div>
                <div className="hero-prod-body">
                  <div className="hero-prod-top">
                    <span className="hero-prod-ico"><Icon.fuel /></span>
                    <div>
                      <h3 className="hero-prod-title">Super 95 &amp; Gasoil ProClean™</h3>
                      <p className="hero-prod-desc">Additifs détergents, protection injecteurs et moteurs.</p>
                    </div>
                  </div>
                  <div className="hero-prod-foot">
                    <span className="hero-prod-tag">Super 840 F · Gasoil 828 F</span>
                    <span className="hero-prod-link">Tarifs &amp; specs <Icon.arrowR /></span>
                  </div>
                </div>
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
    icon: <Icon.fuel />,
    img: '/assets/images/pump.jpg',
    kicker: 'Moteurs & Flottes',
    title: 'Carburants Additivés ProClean™',
    text: 'Super 95 (840 F/L) et Gasoil (828 F/L) additivés pour préserver vos injecteurs.',
    link: { label: 'Tarifs & Spécifications', to: '/produits', sec: 'carburants' },
  },
  {
    icon: <Icon.flame />,
    img: '/assets/images/gaz-agent.jpg',
    kicker: 'Gaz Domestique & Ménages',
    title: 'VisionGaz B6, B12.5 & B35',
    text: 'Bouteilles scellées et pesées avec exactitude. Recharge express en station.',
    link: { label: 'Formats & Points de Vente', to: '/produits', sec: 'gaz' },
  },
  {
    icon: <Icon.drop />,
    img: '/assets/images/pro-a.jpg',
    kicker: 'Moteurs & Industrie',
    title: 'Lubrifiants VisionPro™',
    text: 'Huiles synthétiques (5W-30, 10W-40, 15W-40) pour véhicules et engins.',
    link: { label: 'Guide de Graissage', to: '/produits', sec: 'lubrifiants' },
  },
  {
    icon: <Icon.shop />,
    img: '/assets/images/station-boutique.jpg',
    kicker: 'Services en Station',
    title: 'Boutiques Express & Vidange',
    text: 'Espace café, rafraîchissements, baies de vidange rapide et lavage.',
    link: { label: 'Services en Station', to: '/produits', sec: 'boutiques' },
  },
]

function Produits() {
  return (
    <section className="section section--bg produits">
      <div className="container">
        <div className="sec-head sec-head--stack">
          <span className="eyebrow eyebrow--center">Gamme intégrée</span>
          <h2 className="h2">Produits &amp; Services de Proximité</h2>
          <p className="lead">
            Carburants de haute qualité, gaz domestique sécurisé et lubrifiants certifiés servis au juste prix.
          </p>
        </div>
        <div className="grid grid-4">
          {produits.map((p) => (
            <article className="card card-hover prod-card" key={p.title}>
              <div className="prod-card-media">
                <img src={p.img} alt={p.title} loading="lazy" decoding="async" />
                <span className="icon-tile">{p.icon}</span>
              </div>
              <div className="prod-card-body">
                <span className="prod-kicker">{p.kicker}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="prod-text">{p.text}</p>
                <a className="link-arrow" href={href(p.link.to, p.link.sec)}>
                  {p.link.label} <Icon.arrowR />
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
            Fondée à Douala, Vision Energy déploie des stations-service modernes et des centres de
            remplissage de gaz sécurisés. Notre priorité : la traçabilité des produits et la satisfaction
            quotidienne des automobilistes et ménages.
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
    text: 'Nouvelle adresse Vision Energy dans l\'Ouest : carburants, gaz domestique, lubrifiants et espace de rafraîchissement.',
    link: 'Lire le communiqué',
  },
  {
    img: '/assets/images/station-aerial.jpg',
    badge: 'Réseau & stations',
    date: '15 Janvier 2026',
    place: 'Batcham, Cameroun',
    title: 'Inauguration de la station de l\'axe Mbouda–Batcham',
    text: 'Maillage continu de l\'Ouest du pays avec un objectif de 30 stations exploitées d\'ici 2028.',
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
            Paiement sans contact, remises immédiates sur carburant, gestion de flotte
            et zéro manipulation d'espèces.
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
            Prix en direct, services disponibles (vidange, lavage, gaz) et état des pompes
            en temps réel.
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
      <CtaBand />
    </>
  )
}
