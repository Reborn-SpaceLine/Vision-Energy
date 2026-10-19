import type { ReactNode } from 'react'
import { href } from '../router'
import { Icon } from '../components/icons'
import { CtaBand } from './Home'
import '../styles/metiers.css'

/* ------------------------------------------------------------------- hero */
const heroStats = [
  { value: '30', label: 'Stations visées d’ici 2028' },
  { value: '6', label: 'Stations en exploitation' },
  { value: '2', label: 'Villes de centres gaz — Douala & Bafoussam' },
  { value: '4', label: 'Spécialités d’ingénierie' },
]

function Hero() {
  return (
    <section className="mt-hero">
      <div className="mt-hero-bg" aria-hidden="true" />
      <div className="container">
        <div className="mt-hero-top">
          <span className="mt-hero-pill">
            <Icon.share /> La qualité à bon prix
          </span>
          <span className="mt-hero-tag">Cameroun — Littoral &amp; Ouest</span>
        </div>
        <h1 className="mt-hero-title">
          Nos Métiers <span className="hl--mint">— De l’approvisionnement en gros à la pompe de proximité.</span>
        </h1>
        <p className="mt-hero-lead">
          Une maîtrise complète et sécurisée du flux énergétique : approvisionnement en produits
          pétroliers, centres de remplissage de gaz, lubrifiants et stations-service de proximité
          au service des automobilistes et des ménages camerounais.
        </p>
        <div className="btn-row">
          <a className="btn btn--primary btn--lg" href={href('/metiers', 'chaine')}>
            Découvrir la Chaîne Intégrée <Icon.arrowD />
          </a>
          <a className="btn btn--ghost btn--lg" href={href('/metiers', 'cotation')}>
            <Icon.doc /> Demander une Cotation Pro
          </a>
        </div>
        <div className="mt-stats">
          {heroStats.map((s) => (
            <div className="mt-stat" key={s.value}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------- chaîne de valeur */
const steps: {
  icon: ReactNode
  tone: 'green' | 'blue'
  step: string
  title: string
  text: string
  noteLabel: string
  noteValue: string
}[] = [
  {
    icon: <Icon.globe />,
    tone: 'green',
    step: 'Étape 01 • Amont',
    title: 'Approvisionnement en Gros',
    text: 'Achats d’essence, gasoil, gaz de pétrole liquéfié et lubrifiants auprès de fournisseurs agréés, avec contrôle qualité rigoureux à chaque lot réceptionné.',
    noteLabel: 'Garantie qualité',
    noteValue: 'Produits conformes et tracés',
  },
  {
    icon: <Icon.ship />,
    tone: 'blue',
    step: 'Étape 02 • Hubs',
    title: 'Stockage & Centres de Remplissage',
    text: 'Cuves et centres de remplissage de bouteilles de gaz, construits et réhabilités par nos équipes techniques à Douala et Bafoussam, exploités sous protocole de sécurité.',
    noteLabel: 'Infrastructures',
    noteValue: 'Centres gaz Douala & Bafoussam',
  },
  {
    icon: <Icon.truck />,
    tone: 'green',
    step: 'Étape 03 • Transit',
    title: 'Transport & Logistique Flotte',
    text: 'Camions-citernes dédiés à la desserte de nos stations et de nos clients professionnels, itinéraires planifiés et scellés de chargement contrôlés à chaque étape.',
    noteLabel: 'Surveillance flotte',
    noteValue: 'Suivi GPS & Scellés Électroniques',
  },
  {
    icon: <Icon.fuel />,
    tone: 'blue',
    step: 'Étape 04 • Usages',
    title: 'Distribution B2B & Réseau B2C',
    text: 'Service quotidien dans nos stations — Bonamoussadi, Logbessou PK15, Bamendzi, Batcham, Mbouda, Tobe — et approvisionnement direct des professionnels et des ménages.',
    noteLabel: 'Points de contact',
    noteValue: 'Automobilistes, Ménages & Pros',
  },
]

function Chaine() {
  return (
    <section className="section section--bg" id="chaine">
      <div className="container">
        <div className="mt-chain-head">
          <div>
            <span className="eyebrow mt-ico">
              <Icon.share /> Architecture opérationnelle
            </span>
            <h2 className="h2">Chaîne de Valeur Intégrée</h2>
            <p className="lead">
              De la négociation internationale des cargaisons à la micro-distribution au volant,
              chaque maillon est optimisé pour garantir l’indépendance et la traçabilité.
            </p>
          </div>
          <span className="mt-pill-plain">Flux sous contrôle continu 24/7/365</span>
        </div>
        <div className="mt-steps">
          {steps.map((s) => (
            <article className="mt-step" key={s.step}>
              <span className={`icon-tile ${s.tone === 'green' ? '' : 'icon-tile--blue'}`}>{s.icon}</span>
              <span className={`mt-step-label ${s.tone === 'green' ? '' : 'is-green'}`}>
                {s.step.split(' • ')[0]} <i>•</i> {s.step.split(' • ')[1]}
              </span>
              <h3 className="h3">{s.title}</h3>
              <p className="mt-step-text">{s.text}</p>
              <div className="mt-note">
                <span>{s.noteLabel}</span>
                <b>{s.noteValue}</b>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-band">
          <span className="mt-band-title">
            <Icon.swap /> Boucle de contrôle qualité en temps réel
          </span>
          <ul className="mt-legend">
            <li>
              <i /> Flux Liquides (Essence, Diesel)
            </li>
            <li className="l-blue">
              <i /> Flux Gaz &amp; Lubrifiants
            </li>
            <li className="l-gray">
              <i /> Supervision Numérique Cloud
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- les 4 pôles */
type Feat = { icon: ReactNode; title: string; text: string; tone: 'green' | 'blue' }
type Pole = {
  n: string
  poleTone: 'green' | 'blue'
  polePos: 'tl' | 'tr'
  img: string
  alt: string
  side: 'left' | 'right'
  eyebrowIco: ReactNode
  eyebrow: string
  eyebrowTone: 'green' | 'blue'
  title: string
  intro: string
  feats: Feat[]
  foot: string
  link: { label: string; to: string; sec?: string; tone: 'green' | 'blue' }
}

const poles: Pole[] = [
  {
    n: 'Pôle N°01',
    poleTone: 'green',
    polePos: 'tl',
    img: '/images/met-a-clean.jpg',
    alt: 'Station-service multi-énergies Vision Energy',
    side: 'left',
    eyebrowIco: <Icon.shop />,
    eyebrow: 'Retail & nouveaux usages',
    eyebrowTone: 'green',
    title: 'Distribution au Détail & Réseau Stations-Service',
    intro:
      'Notre réseau de stations-service à Douala et dans la Région de l’Ouest — Bonamoussadi, Logbessou PK15, Bamendzi, Batcham, Mbouda et Tobe — vise 30 stations d’ici 2028. Bien plus qu’un point de ravitaillement, chaque station est un espace de service complet, pensé pour le confort du conducteur et la qualité de l’accueil.',
    feats: [
      {
        icon: <Icon.bolt />,
        title: 'Offre Multi-Services',
        text: 'Carburants, gaz en bouteille et lubrifiants réunis sur un même site, avec un objectif simple : la qualité à bon prix pour tous.',
        tone: 'green',
      },
      {
        icon: <Icon.nfc />,
        title: 'Gaz Domestique en Bouteille',
        text: 'Distribution de GPL ménager dans chaque station, approvisionnée par nos centres de remplissage de Douala et Bafoussam.',
        tone: 'blue',
      },
      {
        icon: <Icon.shop />,
        title: 'Boutiques & Espaces de Repos',
        text: 'Espaces de rafraîchissement et boutiques pour souffler entre deux trajets, tout en trouvant lubrifiants et petits besoins du quotidien.',
        tone: 'green',
      },
      {
        icon: <Icon.shieldPlus />,
        title: 'Exactitude Volumétrique',
        text: 'Pistolets de distribution contrôlés régulièrement et équipements conformes à la réglementation, pour un service juste à chaque plein.',
        tone: 'blue',
      },
    ],
    foot: 'Repères du réseau : Douala, Bafoussam, Batcham, Mbouda & Tobe',
    link: { label: 'En savoir plus sur notre réseau de stations', to: '/reseau', tone: 'green' },
  },
  {
    n: 'Pôle N°02',
    poleTone: 'blue',
    polePos: 'tr',
    img: '/images/met-b-clean.jpg',
    alt: 'Bouteilles de gaz et lubrifiants Vision Energy',
    side: 'right',
    eyebrowIco: <Icon.factory />,
    eyebrow: 'Énergie des ménages & professionnels',
    eyebrowTone: 'blue',
    title: 'Gaz Domestique & Lubrifiants',
    intro:
      'Le gaz ménager et les lubrifiants sont au cœur de notre offre. Vision Energy développe un programme industriel de construction et de réhabilitation de centres de remplissage de gaz, notamment à Douala et Bafoussam, pour sécuriser l’approvisionnement des foyers et des ateliers au meilleur prix.',
    feats: [
      {
        icon: <Icon.fuel />,
        title: 'Centres de Remplissage GPL',
        text: 'Programme de construction et de réhabilitation de centres de remplissage de bouteilles de gaz à Douala et Bafoussam, pilotes de notre offre domestique.',
        tone: 'blue',
      },
      {
        icon: <Icon.signal />,
        title: 'Expertise Lubrifiants',
        text: 'Une gamme suivie par notre directeur technique, expert lubrifiants et gaz, présente dans toutes nos stations pour moteurs et équipements.',
        tone: 'green',
      },
      {
        icon: <Icon.wrench />,
        title: 'Ateliers & Professionnels',
        text: 'Livraison aux garages, transportsurs et PME qui consomnent régulièrement gaz et lubrifiants, avec des conditions adaptées à leur activité.',
        tone: 'blue',
      },
      {
        icon: <Icon.shield />,
        title: 'Manipulation Sécurisée',
        text: 'Protocoles de remplissage, de transport et de stockage des bouteilles, adossés à des plans d’urgence sur chaque site.',
        tone: 'green',
      },
    ],
    foot: 'Programme industriel : centres de remplissage gaz en développement',
    link: { label: 'Demander une offre gaz & lubrifiants', to: '/metiers', sec: 'cotation', tone: 'blue' },
  },
  {
    n: 'Pôle N°03',
    poleTone: 'green',
    polePos: 'tl',
    img: '/images/met-c-clean.jpg',
    alt: 'Équipe d’ingénierie Vision Energy sur une installation',
    side: 'left',
    eyebrowIco: <Icon.ship />,
    eyebrow: 'Quatre spécialités d’ingénierie',
    eyebrowTone: 'green',
    title: 'Ingénierie & Travaux Énergétiques',
    intro:
      'Nos installations sont conçues et entretenues par nos propres compétences : ingénieurs en lubrifiants, électricité, automatisme et gaz. Cette équipe interne pilote la construction et la réhabilitation de nos centres de remplissage et de nos stations, de l’étude à la mise en service.',
    feats: [
      {
        icon: <Icon.anchor />,
        title: 'Construction de Centres Gaz',
        text: 'Conception et travaux de nouveaux centres de remplissage, avec nos experts gaz et lubrifiants sous la direction technique de Derrick Pavel Bognou Chiwa.',
        tone: 'green',
      },
      {
        icon: <Icon.ship />,
        title: 'Réhabilitation de Stations',
        text: 'Remise à niveau des installations existantes — îlots de distribution, unités de pompage — à l’image de la mise en conformité de Tobe en juin 2025.',
        tone: 'blue',
      },
      {
        icon: <Icon.gauge />,
        title: 'Électricité & Automatisme',
        text: 'Câblage, automatismes de distribution et supervision des équipements, assurés par nos ingénieurs électricité et automatisme.',
        tone: 'green',
      },
      {
        icon: <Icon.drop />,
        title: 'Gestion de Projet',
        text: 'Chantier suivi de A à Z par notre direction technique et gestion de projet, en lien avec les opérations de Douala.',
        tone: 'blue',
      },
    ],
    foot: 'Lubrifiants, électricité, automatisme & gaz : 4 spécialités internes',
    link: { label: 'Présenter un projet technique', to: '/metiers', sec: 'cotation', tone: 'green' },
  },
  {
    n: 'Pôle N°04',
    poleTone: 'green',
    polePos: 'tr',
    img: '/images/met-d.jpg',
    alt: 'Installation de stockage et distribution Vision Energy',
    side: 'right',
    eyebrowIco: <Icon.check />,
    eyebrow: 'Conformité & accompagnement administratif',
    eyebrowTone: 'blue',
    title: 'Sécurité, Conformité & Suivi Réglementaire',
    intro:
      'Chaque station et chaque centre gaz est exploité dans un cadre réglementaire strict : études d’impact, plans d’urgence et dossiers MINMIDT sont établis et suivis par nos équipes, du projet initial jusqu’à la mise en conformité des sites repris.',
    feats: [
      {
        icon: <Icon.gauge />,
        title: 'Études d’Impact',
        text: 'Analyses environnementales et sécurité réalisées en amont de chaque nouvelle implantation du réseau, comme pour Batcham ou Mbouda.',
        tone: 'blue',
      },
      {
        icon: <Icon.fire />,
        title: 'Plans d’Urgence',
        text: 'Dispositifs d’intervention et de prévention incendie élaborés pour chaque site, stations comme centres de remplissage de gaz.',
        tone: 'green',
      },
      {
        icon: <Icon.flask />,
        title: 'Dossiers MINMIDT',
        text: 'Constitutions et suivi des dossiers auprès du Ministère chargé des Mines, de l’Industrie et du Développement Technologique.',
        tone: 'blue',
      },
      {
        icon: <Icon.cpu />,
        title: 'Mise en Conformité',
        text: 'Accompagnement des sites existants vers les normes en vigueur, à l’image de la station de Tobe accompagnée le 27 juin 2025.',
        tone: 'green',
      },
    ],
    foot: 'Station de Bonamoussadi : mise en conformité depuis 2021',
    link: { label: 'Poser une question réglementaire', to: '/metiers', sec: 'cotation', tone: 'blue' },
  },
]

function PoleCard({ p }: { p: Pole }) {
  return (
    <article className={`mt-pillar ${p.side === 'right' ? 'mt-pillar--rev' : ''}`}>
      <div className="mt-pillar-media media">
        <span className={`mt-pole ${p.poleTone === 'blue' ? 'mt-pole--blue' : ''} ${p.polePos === 'tr' ? 'mt-pole--tr' : ''}`}>
          {p.n}
        </span>
        <img src={p.img} alt={p.alt} />
      </div>
      <div className="mt-pillar-body">
        <span
          className={`eyebrow mt-ico ${p.eyebrowTone === 'green' ? 'mt-eyebrow-green' : 'mt-eyebrow-blue'}`}
        >
          {p.eyebrowIco} {p.eyebrow}
        </span>
        <h3 className="h3">{p.title}</h3>
        <p className="mt-pillar-intro">{p.intro}</p>
        <div className="mt-feats">
          {p.feats.map((f) => (
            <div className="mt-feat" key={f.title}>
              <span className={`mt-feat-title ${f.tone === 'blue' ? 'is-blue' : ''}`}>
                {f.icon} {f.title}
              </span>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-pillar-foot">
          <p>{p.foot}</p>
          <a
            className={`link-arrow ${p.link.tone === 'blue' ? 'link-arrow--blue' : ''}`}
            href={href(p.link.to, p.link.sec)}
          >
            {p.link.label} <Icon.arrowR />
          </a>
        </div>
      </div>
    </article>
  )
}

function Piliers() {
  return (
    <section className="section mt-piliers">
      <div className="container">
        <div className="sec-head sec-head--stack">
          <span className="eyebrow eyebrow--center">Expertise métier exhaustive</span>
          <h2 className="h2">Quatre Piliers Stratégiques pour une Énergie Performante</h2>
          <p className="lead">
            Découvrez en détail nos pôles d’activités, leurs caractéristiques techniques, les normes
            de sécurité appliquées et leurs capacités de déploiement immédiat.
          </p>
        </div>
        {poles.map((p) => (
          <PoleCard key={p.n} p={p} />
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- standards */
const standards = [
  {
    tile: 'HSE',
    tone: 'green' as const,
    label: 'Sécurité des personnes',
    title: 'Sécurité sur chaque site',
    text: "Plans d’urgence, procédures de manipulation des bouteilles de gaz et dispositifs de prévention incendie dans nos stations et centres de remplissage.",
    noteLabel: 'Sécurité en station • Non négociable',
    noteValue: '',
  },
  {
    tile: 'REG',
    tone: 'green' as const,
    label: 'Conformité réglementaire',
    title: 'Dossiers MINMIDT',
    text: "Études d’impact et dossiers administratifs déposés et suivis auprès du Ministère en charge des Mines, de l’Industrie et du Développement Technologique.",
    noteLabel: 'Mise en conformité accompagnée, comme à Tobe',
    noteValue: '',
  },
  {
    tile: 'QUAL',
    tone: 'blue' as const,
    label: 'Qualité perçue en station',
    title: 'La qualité à bon prix',
    text: "Produits contrôlés à la réception, justesses de distribution vérifiées et service attentif : notre promesse publique, tenue à chaque visite.",
    noteLabel: 'Slogan public de Vision Energy',
    noteValue: '',
  },
]

function Standards() {
  return (
    <section className="section section--bg2">
      <div className="container mt-std-grid">
        <div>
          <span className="eyebrow mt-ico">
            <Icon.rosette /> Exigence &amp; conformité
          </span>
          <h2 className="h2">Une Discipline Opérationnelle Strictement Appliquée</h2>
          <p className="lead">
            La manipulation des produits pétroliers et du gaz exige une rigueur absolue. Vision Energy
            applique à chaque station et centre de remplissage des procédures de sécurité, des contrôles
            qualité et un suivi réglementaire documenté.
          </p>
          <div className="mt-audit">
            <span className="mt-audit-icon">
              <Icon.check />
            </span>
            <div>
              <b>Contrôles Périodiques sur Chaque Site</b>
              <p>Justesse de distribution, étanchéité des installations et tenue des registres de sécurité</p>
            </div>
          </div>
        </div>
        <div className="mt-std-cards">
          {standards.map((s) => (
            <article className="mt-std-card" key={s.tile}>
              <span className={`mt-std-tile ${s.tone === 'blue' ? 'mt-std-tile--blue' : ''}`}>{s.tile}</span>
              <span className={`mt-std-label ${s.tone === 'blue' ? 'mt-std-label--blue' : ''}`}>{s.label}</span>
              <h3 className="h3">{s.title}</h3>
              <p className="prod-text">{s.text}</p>
              <div className="mt-note">
                <b>{s.noteLabel}</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ CTA + form */
const poleOptions = [
  'Gaz Domestique & Lubrifiants',
  'Stations-Service & Flottes',
  'Carburants en Gros (Super 95 / Gasoil)',
  'Travaux & Réhabilitation d’Installations',
  'Convention Réseau VisionPass',
]
const volumeOptions = [
  'De 1 000 L à 5 000 L / mois',
  'De 5 000 L à 20 000 L / mois',
  'De 20 000 L à 100 000 L / mois',
  'Plus de 100 000 L / mois',
]

function Cotation() {
  return (
    <section className="section section--bg" id="cotation">
      <div className="container">
        <div className="mt-cta-card">
          <div className="mt-cta-dark">
            <span className="eyebrow mt-ico eyebrow--mint">
              <Icon.briefcase /> Bureau commerciaux professionnels
            </span>
            <h2 className="h2">Initiez Votre Partenariat avec Notre Réseau</h2>
            <p className="mt-cta-lead">
              Vous gérez une flotte de camions, un garage, un chantier d’infrastructure ou une
              administration ? Nos équipes configurent votre devis sur mesure sous 24 heures ouvrées,
              pour les professionnels de Douala et de la Région de l’Ouest.
            </p>
            <div className="mt-cta-items">
              <div className="mt-cta-item">
                <Icon.rosette />
                <div>
                  <b>Grille tarifaire conforme à la réglementation</b>
                  <p>Carburants distribués aux prix homologués au Cameroun, gaz et lubrifiants au juste prix.</p>
                </div>
              </div>
              <div className="mt-cta-item">
                <Icon.truck />
                <div>
                  <b>Garantie de continuité logistique</b>
                  <p>Tournées planifiées par nos camions-citernes, adossées à nos centres gaz de Douala et Bafoussam.</p>
                </div>
              </div>
            </div>
            <div className="mt-cta-line">
              <span>Ligne dédiée clients professionnels</span>
              <b>
                <Icon.phone /> Hotline réseau : 800 10 10
              </b>
              <p>Email : direction@vision-energy.cm · B.P. 11 480, Douala</p>
            </div>
          </div>
          <div className="mt-cta-form">
            <h3 className="h3">Formulaire de Demande de Cotation</h3>
            <p>
              Remplissez les informations relatives à vos volumes prévisionnels pour recevoir une
              offre tarifaire détaillée.
            </p>
            <form
              className="mt-form"
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href =
                  'mailto:direction@vision-energy.cm?subject=Demande%20de%20cotation%20B2B'
              }}
            >
              <label>
                Société / Entité Commerciale *
                <input required type="text" placeholder="Ex: Transports Nkolombe SARL, Garage de la Mfoundi..." />
              </label>
              <label>
                Nom &amp; Fonction du Contact *
                <input required type="text" placeholder="Ex: Ngono Alice, Resp. Achats" />
              </label>
              <label>
                Email Professionnel *
                <input required type="email" placeholder="a.ngono@entreprise.cm" />
              </label>
              <label>
                Téléphone Direct *
                <input required type="tel" placeholder="+237 6 00 00 00 00" />
              </label>
              <label>
                Pôle Métier Concerné *
                <select defaultValue={poleOptions[0]}>
                  {poleOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label>
                Volume Estimé / Mois *
                <select defaultValue={volumeOptions[0]}>
                  {volumeOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label className="mt-form--full">
                Lieu de livraison &amp; Contraintes logistiques
                <textarea placeholder="Précisez la ville, la zone (Bonabéri, Bassa, Bafoussam, Mbouda…) ou l’adresse de livraison et vos contraintes de stockage..." />
              </label>
              <div className="mt-form-foot mt-form--full">
                <small>Données sécurisées • Aucune divulgation</small>
                <button className="btn btn--primary" type="submit">
                  Envoyer ma demande <Icon.send />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ page */
export default function MetiersPage() {
  return (
    <div className="mt-page">
      <Hero />
      <Chaine />
      <Piliers />
      <Standards />
      <Cotation />
      <CtaBand
        title="VisionPass & Solutions Flottes Pro"
        text="Paiement sécurisé sans contact, gestion de carburant par véhicule et remises automatiques en station."
        primary={{ label: 'Découvrir VisionPass', to: '/produits', sec: 'visionpass' }}
        secondary={{ label: 'Espace Entreprise', to: '/produits', sec: 'flottes' }}
      />
    </div>
  )
}
