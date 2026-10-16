import { href } from '../router'
import { Icon } from '../components/icons'

/* ------------------------------------------------------------------ hero */
const heroChecks = [
  { icon: <Icon.fuel />, label: 'Carburants Haute Performance' },
  { icon: <Icon.bolt />, label: 'Bornes E-Vision Ultra-Fast' },
  { icon: <Icon.shield />, label: 'Norme ISO 9001:2015' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img className="hero-img" src="/images/acc-hero.jpg" alt="Station-service Vision Energy" />
      </div>
      <div className="hero-card">
        <span className="eyebrow eyebrow--dot eyebrow--mint">
          Réseau en pleine expansion • Cameroun &amp; zone CEMAC
        </span>
        <h1 className="hero-title">
          Vision Energy en <span className="hl--mint">pleine expansion</span>
        </h1>
        <p className="hero-text">
          Déploiement accéléré de notre réseau de stations-service à travers le Cameroun — ouverture
          de Tobe / Poumougne, implantations à Bafoussam et à Douala — avec un objectif de plusieurs
          dizaines de stations d’ici 2028. Carburants additivés de haute pureté, gaz butane certifié
          et hubs multi-énergies.
        </p>
        <div className="btn-row">
          <a className="btn btn--primary" href={href('/groupe')}>
            En savoir plus <Icon.arrowR />
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
      <div className="hero-dots" aria-hidden="true">
        <i className="on" />
        <i />
        <i />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- gouvernance */
const govStats = [
  { value: '120+', label: 'Stations Services Actives' },
  { value: '6', label: 'Pays Couverts en Afrique Centrale' },
  { value: '99.8%', label: 'Taux de Disponibilité Cuves' },
]

function Gouvernance() {
  return (
    <section className="section gov">
      <div className="container gov-grid">
        <div>
          <span className="eyebrow">Gouvernance &amp; Capitaux Nationaux</span>
          <h2 className="h2">
            Fondée avec la volonté de transformer la distribution d’énergie,{' '}
            <span className="hl">Vision Energy s’impose comme un acteur majeur</span> des
            hydrocarbures et des énergies de transition.
          </h2>
          <p className="lead">
            Acteur industriel camerounais spécialisé dans la commercialisation de produits pétroliers
            de haute technicité, notre groupe combine l’ingénierie des dépôts et terminaux côtiers, la
            construction et la réhabilitation de centres de remplissage de gaz (Douala, Bafoussam) et
            un trading de brut auprès de stations de proximité. La direction technique est assurée par
            des ingénieurs spécialisés en lubrifiants, électricité, automatisme et gaz.
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
              Découvrir l’histoire du Groupe <Icon.arrowR />
            </a>
            <span className="gov-note">
              <Icon.check /> Protocole HSE Zéro Incident
            </span>
          </div>
        </div>
        <figure className="media gov-media">
          <img src="/images/acc-tower.jpg" alt="Siège administratif et hub logistique Vision Energy" />
          <figcaption className="gov-caption">
            <div>
              <span>Siège administratif &amp; hub logistique</span>
              <b>Douala &amp; Bafoussam Regional Centers</b>
              <p>Coordination de 380 000 m³ de stockage annuel</p>
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

/* ---------------------------------------------------------------- produits */
const produits = [
  {
    icon: <Icon.fuel />,
    kicker: 'Moteurs & Flottes',
    title: 'Carburants Additivés',
    text: 'Super 95 et Gasoil formulés avec des additifs détergents de pointe. Réduction prouvée de 4% de la consommation et diminution des émissions de CO₂.',
    link: { label: 'Voir les spécifications', to: '/produits', sec: 'carburants' },
  },
  {
    icon: <Icon.flame />,
    kicker: 'Gaz & Foyers',
    title: 'Gaz Domestique Certifié',
    text: 'Bonnes de 6kg et 12,5kg scellées avec vanne de sécurité verrouillable. Nos centres de remplissage de Douala et Bafoussam garantissent un contrôle qualité à chaque bouteille.',
    link: { label: 'Points de consigne', to: '/produits', sec: 'gaz' },
  },
  {
    icon: <Icon.drop />,
    kicker: 'Gamme haute viscosité',
    title: 'Lubrifiants VisionPro',
    text: 'Huiles synthétiques et minérales certifiées API & ACEA, formulées par nos ingénieurs lubrifiants pour véhicules légers, engins miniers et poids lourds en climat tropical.',
    link: { label: 'Guide de graissage', to: '/produits', sec: 'lubrifiants' },
  },
  {
    icon: <Icon.shop />,
    kicker: 'Espaces de détente',
    title: 'Boutiques Express',
    text: 'Cafétéria gourmande, supérette de dépannage, aires de lavage éco-responsable et connexion Wi-Fi haut débit offerte en station.',
    link: { label: 'Services en station', to: '/produits', sec: 'boutiques' },
  },
]

function Produits() {
  return (
    <section className="section section--bg produits">
      <div className="container">
        <div className="sec-head sec-head--stack">
          <span className="eyebrow eyebrow--center">Offre énergétique intégrée</span>
          <h2 className="h2">Des Produits d’Excellence pour Particuliers &amp; Professionnels</h2>
          <p className="lead">
            De la pompe jusqu’à l’usine de raffinage, nous assurons des contrôles rigoureux de
            conformité et des carburants additivés pour prolonger la durée de vie de vos motorisations.
          </p>
        </div>
        <div className="grid grid-4">
          {produits.map((p) => (
            <article className="card card-hover prod-card" key={p.title}>
              <span className="icon-tile">{p.icon}</span>
              <span className="prod-kicker">{p.kicker}</span>
              <h3 className="h3">{p.title}</h3>
              <p className="prod-text">{p.text}</p>
              <a className="link-arrow" href={href(p.link.to, p.link.sec)}>
                {p.link.label} <Icon.arrowR />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- actualites */
const news = [
  {
    img: '/images/acc-news-1.jpg',
    badge: 'Expansion réseau',
    date: '24 Mai 2025',
    place: 'Douala, Cameroun',
    title: 'Inauguration du nouveau hub multi-énergies de Bonabéri',
    text: 'Vision Energy poursuit son maillage avec l’ouverture d’un hub équipé de 8 pompes gros débit, d’un terminal GPL et de bornes de recharge rapide.',
    link: 'Lire le communiqué',
  },
  {
    img: '/images/acc-news-2.jpg',
    badge: 'Produits & R&D',
    date: '12 Mai 2025',
    place: 'Technopôle R&D',
    title: 'Lancement de la nouvelle gamme d’huiles VisionPro Synthetic',
    text: 'Formulée spécifiquement pour résister aux contraintes thermiques élevées de la région Centre, la gamme VisionPro réduit l’usure moteur.',
    link: 'Fiche technique & homologations',
  },
  {
    img: '/images/acc-news-3.jpg',
    badge: 'Soutage maritime',
    date: '03 Mai 2025',
    place: 'Bata & Kribi',
    title: 'Renforcement des capacités de soutage offshore au port en eau profonde',
    text: 'Mise en service d’une nouvelle barge de ravitaillement de 5 000 tonnes métriques certifiée aux standards maritimes IMO 2020.',
    link: 'Détails de l’accord',
  },
]

function Actualites() {
  return (
    <section className="section news">
      <div className="container">
        <div className="sec-head sec-head--stack">
          <span className="eyebrow eyebrow--center">Nos actualités</span>
          <p className="lead">
            Suivez les dernières étapes de notre expansion géographique, nos partenariats stratégiques
            et nos innovations réseau.
          </p>
        </div>
        <div className="grid grid-3">
          {news.map((n) => (
            <article className="card card-hover news-card" key={n.title}>
              <div className="media news-media">
                <img src={n.img} alt="" />
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
const wallets = ['Orange Money', 'MTN MoMo', 'Wave Mobile', 'Visa / Mastercard']

function VisionPass() {
  return (
    <section className="section section--dark vp">
      <div className="container vp-grid">
        <div>
          <span className="eyebrow eyebrow--mint">Paiement dématérialisé en piste</span>
          <h2 className="h2 vp-title">
            Réglez tous vos achats Vision Energy avec votre solution{' '}
            <span className="hl--mint">Mobile Money &amp; VisionPass</span>
          </h2>
          <p className="lead vp-lead">
            Gain de temps, sécurité accrue et zéro manipulation d’espèces. Activez vos remises
            immédiates sur le carburant, réglez vos recharges de gaz et pilotez vos flottes en temps
            réel.
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
              <Icon.card /> Découvrir la Carte VisionPass
            </a>
            <a className="btn btn--ghost" href={href('/produits', 'flottes')}>
              Portail Gestionnaire de Flotte <Icon.arrowR />
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
                <span>GROUPE LOGISTIQUE CEMAC</span>
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
          <h2 className="h2">Trouvez la station Vision Energy la plus proche de votre trajet</h2>
          <p className="lead">
            Consultez les prix en direct, les services disponibles (baie de vidange, lavage, gaz,
            restaurant) et l’état des pompes en temps réel.
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
            <input type="search" placeholder="Ville, quartier ou code postal…" aria-label="Rechercher une station" />
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
  title = 'Vision Pay & Carte Carburant Pro',
  text = 'Réglez sans contact, gérez vos flottes et activez vos remises instantanées en station.',
  primary = { label: "Découvrir l'App", to: '/produits', sec: 'visionpass' },
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
      <Gouvernance />
      <Produits />
      <Actualites />
      <VisionPass />
      <Localisation />
      <CtaBand />
    </>
  )
}
