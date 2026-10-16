import type { ReactNode } from 'react'
import { href } from '../router'
import { Icon } from '../components/icons'
import { CtaBand } from './Home'
import '../styles/metiers.css'

/* ------------------------------------------------------------------- hero */
const heroStats = [
  { value: '1.2M+', label: 'Tonnes métriques distribuées/an' },
  { value: '145+', label: 'Stations-service actives' },
  { value: '280k m³', label: 'Capacité globale de stockage' },
  { value: '0.02', label: 'Taux de fréquence HSE (LTIF)' },
]

function Hero() {
  return (
    <section className="mt-hero">
      <div className="mt-hero-bg" aria-hidden="true" />
      <div className="container">
        <div className="mt-hero-top">
          <span className="mt-hero-pill">
            <Icon.share /> Intégration verticale
          </span>
          <span className="mt-hero-tag">Afrique de l’Ouest &amp; Corridor Maritime</span>
        </div>
        <h1 className="mt-hero-title">
          Nos Métiers <span className="hl--mint">— De l’approvisionnement en gros à la pompe de proximité.</span>
        </h1>
        <p className="mt-hero-lead">
          Une maîtrise complète et sécurisée du flux d’hydrocarbures et de nouvelles énergies :
          sourcing international, terminaux haute sécurité, livraison sur site minier et stations
          connectées de dernière génération.
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
    title: 'Importation & Négoce',
    text: 'Affrètement de navires pétroliers (MR & LR), sourcing certifié sans dilution, gestion rigoureuse des cours mondiaux et couverture des risques de change.',
    noteLabel: 'Garantie qualité',
    noteValue: 'Inspection SGS / Bureau Veritas',
  },
  {
    icon: <Icon.ship />,
    tone: 'blue',
    step: 'Étape 02 • Hubs',
    title: 'Stockage Maritime & Terrestre',
    text: 'Parcs de cuves sécurisées raccordées aux sea-lines portuaires, systèmes d’inertage d’azote et séparateurs hydrocarbures de classe I.',
    noteLabel: 'Infrastructures',
    noteValue: 'Terminaux Dakar, Abidjan & Lomé',
  },
  {
    icon: <Icon.truck />,
    tone: 'green',
    step: 'Étape 03 • Transit',
    title: 'Transport & Logistique Flotte',
    text: 'Flotte de citernes propriétaires certifiées ADR, géolocalisation satellite temps réel, capteurs anti-mélange de compartiments et conducteurs formés éco-conduite.',
    noteLabel: 'Surveillance flotte',
    noteValue: 'Télémétrie GPS & Scellés Électroniques',
  },
  {
    icon: <Icon.fuel />,
    tone: 'blue',
    step: 'Étape 04 • Usages',
    title: 'Distribution B2B & Réseau B2C',
    text: 'Alimentation directe des installations industrielles, barges de bunkering au mouillage, et approvisionnement quotidien de nos stations-service grand public.',
    noteLabel: 'Points de contact',
    noteValue: 'Automobilistes, Mines & Armateurs',
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
              <i /> Flux Liquides (Super, Gasoil, HFO)
            </li>
            <li className="l-blue">
              <i /> Flux Gaz &amp; Nouveaux Vecteurs
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
      'Notre réseau de plus de 145 stations maillant axes autoroutiers et centres métropolitains ne se limite plus à la simple distribution de carburants. Vision Energy conçoit de véritables hubs de vie et multi-énergies, conçus pour le confort du conducteur et la rapidité du service.',
    feats: [
      {
        icon: <Icon.bolt />,
        title: 'Concept Multi-Énergies',
        text: 'Carburants additivés haute performance, GPL/Autogaz et bornes de recharge rapide DC 150kW en partenariat solaire.',
        tone: 'green',
      },
      {
        icon: <Icon.nfc />,
        title: 'Écosystème VisionPass',
        text: 'Badge RFID et application smartphone avec débit instantané, gestion des plafonds de pleins et facturation mensuelle centralisée.',
        tone: 'blue',
      },
      {
        icon: <Icon.shop />,
        title: 'Boutiques VisionMart',
        text: 'Espaces de restauration saine, baies de lavage haute pression recyclant 80% des eaux et lubrifiants certifiés constructeurs.',
        tone: 'green',
      },
      {
        icon: <Icon.shieldPlus />,
        title: 'Exactitude Volumétrique',
        text: 'Étalonnage bimensuel assermenté des pistolets de distribution pour une précision infaillible au millilitre près.',
        tone: 'blue',
      },
    ],
    foot: 'Couverture territoriale : Sénégal, Mali, Côte d’Ivoire, Guinée',
    link: { label: 'En savoir plus sur l’affiliation de station', to: '/reseau', tone: 'green' },
  },
  {
    n: 'Pôle N°02',
    poleTone: 'blue',
    polePos: 'tr',
    img: '/images/met-b-clean.jpg',
    alt: 'Ravitaillement d’engins sur site minier',
    side: 'right',
    eyebrowIco: <Icon.factory />,
    eyebrow: 'Grands comptes & extraction',
    eyebrowTone: 'blue',
    title: 'B2B, Industrie Lourde & Exploitations Minières',
    intro:
      'Les sites miniers isolés et les grands chantiers de génie civil ne peuvent tolérer aucune rupture d’approvisionnement. Vision Energy déploie des solutions clé en main d’approvisionnement en gros, de cuves mobiles sécurisées et de gestion d’hydrocarbures directement in situ.',
    feats: [
      {
        icon: <Icon.fuel />,
        title: 'Vente en Gros & Citernes Dédiées',
        text: 'Livraisons cadencées par camions-citernes blindés avec dépotage assisté par pompes autonomes à gros débit (1 000 L/min).',
        tone: 'blue',
      },
      {
        icon: <Icon.signal />,
        title: 'Dépôts Déportés "Vendor-Managed"',
        text: 'Installation et maintenance de stations privatives sur site client avec gestion automatique du réassort par télémétrie satellitaire.',
        tone: 'green',
      },
      {
        icon: <Icon.wrench />,
        title: 'Flottes & BTP Hors-Piste',
        text: 'Carburant tout-terrain ultra-filtré (teneur en soufre maîtrisée) protégeant les injecteurs des engins Caterpillar, Komatsu et dumpers.',
        tone: 'blue',
      },
      {
        icon: <Icon.shield />,
        title: 'Protocoles Zéro Déversement',
        text: 'Bassins de rétention métalliques normalisés, kits d’intervention d’urgence anti-pollution et astreinte technique 24/7.',
        tone: 'green',
      },
    ],
    foot: 'Contrats cadres : De 500 m³ à plus de 50 000 m³ / an',
    link: { label: 'Demander un audit de consommation', to: '/metiers', sec: 'cotation', tone: 'blue' },
  },
  {
    n: 'Pôle N°03',
    poleTone: 'green',
    polePos: 'tl',
    img: '/images/met-c-clean.jpg',
    alt: 'Barge de soutage au port',
    side: 'left',
    eyebrowIco: <Icon.ship />,
    eyebrow: 'Logistique offshore & ports',
    eyebrowTone: 'green',
    title: 'Soutage Maritime (Bunkering) & Avitaillement Fluvial',
    intro:
      'Positionné stratégiquement sur les grandes routes maritimes transatlantiques et ouest-africaines, Vision Energy assure l’avitaillement sécurisé des navires porte-conteneurs, chalutiers industriels, minéraliers et bâtiments de soutien offshore (PSV/OSV).',
    feats: [
      {
        icon: <Icon.anchor />,
        title: 'Conformité Stricte IMO 2020',
        text: 'Livraison de VLSFO (Very Low Sulphur Fuel Oil 0.5%), MGO (Marine Gas Oil DMA) et lubrifiants marins certifiés ISO 8217.',
        tone: 'green',
      },
      {
        icon: <Icon.ship />,
        title: 'Avitaillement au Quai & Rade',
        text: 'Opérations menées par barges de soutage dédiées (jusqu’à 3 500 DWT) et par camions autorisés sur appontements portuaires sécurisés.',
        tone: 'blue',
      },
      {
        icon: <Icon.gauge />,
        title: 'Débit Rapide & Sécurisé',
        text: 'Cadence de pompage jusqu’à 650 tonnes/heure pour minimiser le temps d’escale au port et réduire les frais de surestarie.',
        tone: 'green',
      },
      {
        icon: <Icon.drop />,
        title: 'Prélèvement Témoin MARPOL',
        text: 'Échantillonnage continu d’égouttement (continuous drip sampling) scellé en 4 flacons homologués en présence de l’équipage.',
        tone: 'blue',
      },
    ],
    foot: 'Bunkering Desk disponible 24/7 pour confirmations de stem',
    link: { label: 'Consulter les prix Platts & Disponibilités', to: '/metiers', sec: 'cotation', tone: 'green' },
  },
  {
    n: 'Pôle N°04',
    poleTone: 'green',
    polePos: 'tr',
    img: '/images/met-d.jpg',
    alt: 'Parc de stockage et dépôt pétrolier',
    side: 'right',
    eyebrowIco: <Icon.check />,
    eyebrow: 'Infrastructures & sécurité Seveso III',
    eyebrowTone: 'blue',
    title: 'Logistique, Dépôts & Stockage Haute Sécurité',
    intro:
      'L’épine dorsale de notre chaîne énergétique réside dans nos parcs de stockage modernes. Conçus selon les directives internationales les plus rigoureuses, nos terminaux assurent le tampon stratégique des réserves énergétiques nationales.',
    feats: [
      {
        icon: <Icon.gauge />,
        title: 'Télémétrage Automatisé',
        text: 'Capteurs radar Endress+Hauser mesurant niveau, température moyenne et teneur en eau avec précision millimétrique en temps réel.',
        tone: 'blue',
      },
      {
        icon: <Icon.fire />,
        title: 'Protection Incendie Automatisée',
        text: 'Couronnes de mousse à haut foisonnement, rideaux d’eau de refroidissement et motopompes diesel redondantes à démarrage instantané.',
        tone: 'green',
      },
      {
        icon: <Icon.flask />,
        title: 'Laboratoire Qualité sur Site',
        text: 'Analyses de densité, point d’éclair, distillation sous vide et conductivité réalisées avant chaque chargement de camion.',
        tone: 'blue',
      },
      {
        icon: <Icon.cpu />,
        title: 'Îlots de Chargement Bas',
        text: 'Système « Bottom Loading » avec récupération des vapeurs d’hydrocarbures (VRU) préservant la santé des opérateurs et l’air ambiant.',
        tone: 'green',
      },
    ],
    foot: 'Capacités disponibles en location ou souscription hôtelière',
    link: { label: 'Réserver des capacités de passage', to: '/metiers', sec: 'cotation', tone: 'blue' },
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
    tile: '9001',
    tone: 'green' as const,
    label: 'Qualité opérationnelle',
    title: 'ISO 9001:2015',
    text: "Management de la qualité totale : contrôle rigoureux de l'approvisionnement, satisfaction client traçable et amélioration continue de nos procédures de livraison.",
    noteLabel: 'Reconduction validée • 2024–2027',
    noteValue: '',
  },
  {
    tile: '14001',
    tone: 'green' as const,
    label: 'Protection environnementale',
    title: 'ISO 14001:2015',
    text: "Prévention active de la pollution des sols et nappes, gestion responsable des résidus hydrocarbures et réduction programmée de l'empreinte carbone des opérations.",
    noteLabel: 'Programme « Zero Spills » actif',
    noteValue: '',
  },
  {
    tile: '45001',
    tone: 'blue' as const,
    label: 'Santé & sécurité au travail',
    title: 'ISO 45001 (OHSAS 18001)',
    text: "Protection maximale du personnel de gantry, des équipages en mer et des chauffeurs routiers. Culture de « Stop-Work Authority » accordée à chaque agent.",
    noteLabel: "Taux d'accident LTIF < 0.05",
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
          <h2 className="h2">Les Standards les plus Exigeants de l’Industrie</h2>
          <p className="lead">
            La manipulation de produits pétroliers et d’énergies nouvelles exige une discipline
            absolue. Vision Energy fonde chaque geste opérationnel sur des accréditations
            internationales certifiées par des tiers indépendants.
          </p>
          <div className="mt-audit">
            <span className="mt-audit-icon">
              <Icon.check />
            </span>
            <div>
              <b>Audits Trimestriels Non Annoncés</b>
              <p>Maintien permanent du niveau d’excellence opérationnelle</p>
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
  'B2B, Industrie Lourde & Mines',
  'Retail & Stations-Service',
  'Soutage Maritime (Bunkering)',
  'Dépôts & Stockage',
  'Gaz & Lubrifiants',
]
const volumeOptions = [
  'De 10 m³ à 50 m³ / mois',
  'De 50 m³ à 500 m³ / mois',
  'De 500 m³ à 5 000 m³ / mois',
  'Plus de 5 000 m³ / mois',
]

function Cotation() {
  return (
    <section className="section section--bg" id="cotation">
      <div className="container">
        <div className="mt-cta-card">
          <div className="mt-cta-dark">
            <span className="eyebrow mt-ico eyebrow--mint">
              <Icon.briefcase /> Bureau commercial grands comptes
            </span>
            <h2 className="h2">Initiez Votre Partenariat Énergétique B2B</h2>
            <p className="mt-cta-lead">
              Vous gérez une flotte de camions, une mine, un chantier d’infrastructure ou un navire
              en escale ? Nos experts commerciaux configurent votre devis sur mesure sous 24 heures
              ouvrées.
            </p>
            <div className="mt-cta-items">
              <div className="mt-cta-item">
                <Icon.rosette />
                <div>
                  <b>Formules d’indexation claires</b>
                  <p>Cotations basées sur Platts FOB MED/ARA ou prix officiels régulés selon le pays d’exploitation.</p>
                </div>
              </div>
              <div className="mt-cta-item">
                <Icon.truck />
                <div>
                  <b>Garantie de continuité logistique</b>
                  <p>Stock dédié alloué contractuellement pour absorber les tensions de marché mondiales.</p>
                </div>
              </div>
            </div>
            <div className="mt-cta-line">
              <span>Ligne dédiée grands comptes &amp; bunkering</span>
              <b>
                <Icon.phone /> +221 33 800 20 50
              </b>
              <p>Email : b2b@visionenergy-group.com</p>
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
                <input required type="text" placeholder="Ex: Eiffage Génie Civil, Dangote..." />
              </label>
              <label>
                Nom &amp; Fonction du Contact *
                <input required type="text" placeholder="Ex: Moussa Diop, Dir. Achats" />
              </label>
              <label>
                Email Professionnel *
                <input required type="email" placeholder="m.diop@entreprise.com" />
              </label>
              <label>
                Téléphone Direct *
                <input required type="tel" placeholder="+221 77 000 00 00" />
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
                <textarea placeholder="Précisez le port d'escale, le site minier ou la région ciblée..." />
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
