import '../styles/groupe.css'
import { href } from '../router'
import { Icon } from '../components/icons'
import { CtaBand } from './Home'

/* Icônes SVG spécifiques absentes de la bibliothèque (jamais dans icons.tsx) */
const SealCheck = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" width="1em" height="1em" aria-hidden="true">
    <path d="M12 2.6l2.1 1.5 2.6-.2.9 2.4 2.2 1.4-.6 2.6.6 2.6-2.2 1.4-.9 2.4-2.6-.2L12 21.4l-2.1-1.5-2.6.2-.9-2.4-2.2-1.4.6-2.6-.6-2.6 2.2-1.4.9-2.4 2.6.2L12 2.6z" />
    <path d="M8.6 12.1l2.3 2.3 4.5-4.6" strokeLinecap="round" />
  </svg>
)
const SolarPanel = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" aria-hidden="true">
    <path d="M4.5 14.5l2.2-7.5h10.6l2.2 7.5H4.5z" />
    <path d="M12 7v7.5M6.6 11h10.8" />
    <path d="M12 14.5v4M9 18.5h6" />
    <path d="M9.5 3.5l1 1.5M14.5 3.5l-1 1.5M12 2.2v1.6" />
  </svg>
)
const ShieldBolt = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" aria-hidden="true">
    <path d="M12 3l7 2.8v5.1c0 4.6-3 8.1-7 10.1-4-2-7-5.5-7-10.1V5.8L12 3z" />
    <path d="M12.8 8.2l-2.6 4.3h3.6l-2.6 4.3" />
  </svg>
)

/* --------------------------------------------------------------- hero */
const heroFeats = [
  { icon: SealCheck, label: 'Normes HSE Niveau 1' },
  { icon: <Icon.globe />, label: 'Présence Multinationale CEMAC' },
  { icon: SolarPanel, label: 'Transition Hybride 2030' },
]

const heroStats = [
  { icon: <Icon.fuel />, label: 'Stations', value: '120+', sub: 'Réseau moderne maillé' },
  { icon: <Icon.flag />, label: 'Rayonnement', value: '6 Pays', sub: 'Hubs CEMAC & Ouest', mod: ' grp-stat--blue' },
  { icon: <Icon.users />, label: 'Capital humain', value: '450+', sub: 'Collaborateurs directs' },
  { icon: <Icon.server />, label: 'Capacité cuves', value: '380k m³', sub: 'Stockage sous douane' },
  { icon: <Icon.wifi />, label: 'Taux de service', value: '99.8%', sub: 'Fiabilité logistique B2B', hl: true },
]

function Hero() {
  return (
    <>
      <section className="grp-hero">
        <div className="grp-hero-bg" aria-hidden="true" />
        <div className="container grp-hero-inner">
          <nav className="grp-crumb" aria-label="Fil d'Ariane">
            <a href={href('/')}>Accueil</a>
            <Icon.chevR />
            <a href={href('/groupe')} className="cur">
              Le Groupe
            </a>
            <Icon.chevR />
            <span>Vision &amp; Gouvernance</span>
          </nav>
          <span className="grp-hero-eyebrow">Leadership énergétique régional</span>
          <h1 className="h1">Bâtir l’avenir énergétique africain avec rigueur et intégrité.</h1>
          <p className="grp-hero-lead">
            Pionnier de la distribution de carburants, du trading maritime et des infrastructures
            critiques en zone CEMAC et Afrique de l’Ouest, Vision Energy accélère l’autonomie
            stratégique du continent tout en orchestrant sa transition bas-carbone.
          </p>
          <ul className="grp-hero-feats">
            {heroFeats.map((f) => (
              <li key={f.label}>
                {f.icon} {f.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container grp-stats-wrap">
        <div className="grp-stats">
          {heroStats.map((s) => (
            <div className={'grp-stat' + (s.hl ? ' grp-stat--hl' : '') + (s.mod || '')} key={s.label}>
              <div className="grp-stat-top">
                {s.label}
                {s.icon}
              </div>
              <b>{s.value}</b>
              <span>{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

/* ---------------------------------------------------------- trajectoire */
const timeline = [
  {
    num: '01',
    year: '2008',
    title: 'Création & Premier Dépôt',
    text: 'Fondation du consortium de négoce à Douala et mise en service de notre première unité d’avitaillement terrestre de 15 000 m³.',
    foot: { icon: <Icon.anchor />, label: 'Accords portuaires initiaux' },
  },
  {
    num: '02',
    year: '2014',
    title: 'Expansion Régionale CEMAC',
    text: 'Déploiement des opérations au Gabon, en République du Congo et au Tchad. Création du réseau unifié de transport lourd par rail et route.',
    foot: { icon: <Icon.truck />, label: 'Flotte propre de 140 citernes' },
  },
  {
    num: '03',
    year: '2019',
    title: 'Terminaux Côtiers & Bunkering',
    text: 'Inauguration du terminal de soutage maritime offshore à Kribi et lancement officiel du carburant additivé de classe mondiale VisionPro.',
    foot: { icon: <Icon.drop />, label: 'Terminal Kribi Deep Sea' },
    numMod: 'grp-num--blue',
    yearMod: 'grp-year--blue',
    footMod: ' grp-tl-foot--blue',
  },
  {
    num: '04',
    year: 'Aujourd’hui & Demain',
    title: 'Cap Énergie Hybride',
    text: 'Solarisation massive de 80+ stations-service, déploiement des bornes EV rapides et distribution de GPL conditionné ultra-sécurisé.',
    foot: { icon: <Icon.leaf />, label: 'Bilan Carbone ISO 14064' },
    numMod: 'grp-num--solid',
  },
]

function Trajectoire() {
  return (
    <section className="section grp-sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">Trajectoire industrielle</span>
            <h2 className="h2">Histoire &amp; Genèse d’un Géant Africain</h2>
          </div>
          <p className="lead">
            Deux décennies d’expansion structurée, de bravoure logistique et d’investissements
            stratégiques au cœur de l’économie réelle.
          </p>
        </div>
        <div className="grp-tl">
          {timeline.map((t) => (
            <article className="card card-hover grp-tl-card" key={t.num}>
              <span className={'grp-num' + (t.numMod ? ' ' + t.numMod : '')}>{t.num}</span>
              <span className={'grp-year' + (t.yearMod ? ' ' + t.yearMod : '')}>{t.year}</span>
              <h3 className="h3">{t.title}</h3>
              <p>{t.text}</p>
              <span className={'grp-tl-foot' + (t.footMod || '')}>
                {t.foot.icon} {t.foot.label}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- valeurs */
const values = [
  {
    icon: <Icon.shieldPlus />,
    tile: 'icon-tile icon-tile--red',
    title: 'HSE & Zéro Incident',
    text: 'Une culture intransigeante de la sécurité humaine et des installations. Formation systématique et contrôle automatisé de nos dépôts et stations.',
    tag: { label: 'Non-négociable', mod: 'grp-tag--red' },
  },
  {
    icon: <Icon.gavel />,
    tile: 'icon-tile icon-tile--blue',
    title: 'Intégrité & Conformité',
    text: 'Traçabilité totale des flux financiers et des cargaisons de produits raffinés dans le respect strict des réglementations OHADA et internationales.',
    tag: { label: 'Audit annuel PwC', mod: 'grp-tag--blue' },
  },
  {
    icon: <Icon.cpu />,
    tile: 'icon-tile',
    title: 'Innovation Technologique',
    text: 'Télémétrie par satellite des citernes, cartes flotte VisionPass RFID, et plateformes intelligentes de réapprovisionnement prédictif.',
    tag: { label: 'Fintech intégrée', mod: 'grp-tag--green' },
  },
  {
    icon: <Icon.recycle />,
    tile: 'icon-tile icon-tile--gray',
    title: 'Éco-responsabilité',
    text: 'Captation des vapeurs en cuve, recyclage à 100% des huiles usagées via notre filière certifiée et reforestation des emprises logistiques.',
    tag: { label: 'Norme ISO 14001', mod: 'grp-tag--gray' },
  },
]

function Valeurs() {
  return (
    <section className="section section--bg2 grp-sec">
      <div className="container">
        <div className="sec-head sec-head--stack">
          <span className="eyebrow" style={{ color: 'var(--blue)' }}>
            Fondations morales &amp; opérationnelles
          </span>
          <h2 className="h2">Vision, Mission &amp; Engagements</h2>
          <p className="lead">
            Notre boussole stratégique oriente chaque mètre cube distribué et chaque partenariat
            industriel scellé.
          </p>
        </div>
        <div className="grid grid-4">
          {values.map((v) => (
            <article className="card card-hover grp-val" key={v.title}>
              <span className={v.tile}>{v.icon}</span>
              <h3 className="h3">{v.title}</h3>
              <p>{v.text}</p>
              <span className={'grp-tag ' + v.tag.mod}>{v.tag.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- gouvernance */
function Gouvernance() {
  return (
    <section className="section grp-sec">
      <div className="container grp-gov">
        <figure className="grp-director">
          <img src="/images/grp-director-clean.jpg" alt="Paul-Alain Manga, Directeur Général du Groupe Vision Energy" />
          <figcaption className="grp-director-cap">
            <span>Directeur Général du Groupe</span>
            <b>Paul-Alain Manga</b>
            <p>Ancien cadre dirigeant Schlumberger &amp; TotalEnergies Afrique</p>
          </figcaption>
        </figure>

        <div>
          <span className="eyebrow">Gouvernance stratégique</span>
          <h2 className="h2">Une direction forgée dans l’excellence industrielle mondiale.</h2>
          <div className="grp-quote">
            <span className="grp-quote-mark" aria-hidden="true">
              &rdquo;
            </span>
            <p>
              « L’Afrique ne peut bâtir son développement sur l’improvisation énergétique. Chez Vision
              Energy, nous marions la rigueur des standards internationaux à une compréhension intime
              des couloirs de commerce sous-régionaux. »
            </p>
            <cite>— Déclaration du Conseil d’Administration, Session Annuelle 2024</cite>
          </div>

          <div className="grp-gov-cards">
            <article className="card grp-gov-card">
              <h3>
                <Icon.building /> Conseil d’Administration
              </h3>
              <p>
                Composé de 7 administrateurs dont 3 indépendants, garantissant l’alignement sur les
                standards ESG et les intérêts des actionnaires institutionnels.
              </p>
            </article>
            <article className="card grp-gov-card">
              <h3>
                <Icon.users /> Comité Exécutif (COMEX)
              </h3>
              <p>
                8 directeurs opérationnels supervisant le Trading, les Opérations Maritimes, la
                Logistique Aval, le HSE et la Stratégie Digitale.
              </p>
            </article>
          </div>

          <div className="grp-team">
            <div className="grp-avatars" aria-hidden="true">
              <i>DA</i>
              <i>FT</i>
              <i>SK</i>
              <i>+5</i>
            </div>
            <p>
              Comité de direction pluridisciplinaire et paritaire (40% de femmes cadres dirigeantes).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ RSE */
const rse = [
  {
    icon: <Icon.grad />,
    tile: 'icon-tile',
    title: 'Académie Pétrole & Logistique',
    text: 'Programme interne certifiant ayant déjà formé 620 jeunes techniciens, chauffeurs ADR et agents de piste issus des communautés riveraines de nos terminaux.',
    foot: { label: 'Insertion locale :', value: '89% sous 6 mois' },
  },
  {
    icon: ShieldBolt,
    tile: 'icon-tile icon-tile--gray',
    title: 'Plan Solaire Stations 2026',
    text: 'Autonomisation photovoltaïque de l’ensemble de nos auvents et unités de pompage, éliminant plus de 4 800 tonnes de CO₂ générées par les groupes électrogènes de secours.',
    foot: { label: 'Énergie propre captée :', value: '3.2 MW installés' },
  },
  {
    icon: <Icon.drop />,
    tile: 'icon-tile',
    title: 'Préservation des Littoraux',
    text: 'Protocole de double coque obligatoire pour tous les navires affrétés et mécénat actif de dépollution marine en partenariat avec les ONG côtières d’Afrique centrale.',
    foot: { label: 'Incidents de déversement :', value: '0 Litre (Historique)' },
  },
]

function Rse() {
  return (
    <section className="section section--dark grp-sec">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow eyebrow--mint">Pacte d’impact régional</span>
            <h2 className="h2" style={{ color: '#fff' }}>
              RSE, Talents Locaux &amp; Transition Énergétique
            </h2>
          </div>
          <p className="lead">
            Chaque litre distribué participe activement au développement des communautés d’accueil et
            à l’atténuation du changement climatique.
          </p>
        </div>
        <div className="grp-rse">
          {rse.map((c) => (
            <article className="grp-rse-card" key={c.title}>
              <span className={c.tile}>{c.icon}</span>
              <h3 className="h3">{c.title}</h3>
              <p>{c.text}</p>
              <div className="grp-rse-foot">
                <span>{c.foot.label}</span>
                <b>{c.foot.value}</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- rapport */
function Rapport() {
  return (
    <section className="section grp-sec">
      <div className="container">
        <div className="grp-report">
          <div>
            <span className="grp-report-pill">
              <Icon.doc /> Publication financière &amp; extra-financière
            </span>
            <h2 className="h2">Téléchargez le Rapport Intégré &amp; RSE 2024–2025</h2>
            <p className="lead">
              Consultez l’audit complet certifié de nos activités pétrolières, nos performances
              financières consolidées, nos investissements d’avenir et notre bilan carbone certifié.
            </p>
            <div className="grp-report-meta">
              <span>Format PDF interactif</span>
              <i aria-hidden="true">•</i>
              <span>94 pages</span>
              <i aria-hidden="true">•</i>
              <span>Données vérifiées Deloitte &amp; PwC</span>
            </div>
          </div>
          <div className="grp-report-actions">
            <a className="btn btn--primary" href={href('/actualites')}>
              <Icon.download /> Télécharger le Rapport (PDF)
            </a>
            <a className="btn btn--outline" href={href('/contact')}>
              <Icon.mail /> Relations Investisseurs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function GroupePage() {
  return (
    <>
      <Hero />
      <Trajectoire />
      <Valeurs />
      <Gouvernance />
      <Rse />
      <Rapport />
      <CtaBand
        title="VisionPass & Solutions Flottes Pro"
        text="Paiement sécurisé sans contact, gestion de carburant par véhicule et remises automatiques en station."
        primary={{ label: 'Découvrir VisionPass', to: '/produits', sec: 'visionpass' }}
        secondary={{ label: 'Espace Entreprise', to: '/produits', sec: 'flottes' }}
      />
    </>
  )
}
