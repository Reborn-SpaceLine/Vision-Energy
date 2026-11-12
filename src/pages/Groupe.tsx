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
  { icon: SealCheck, label: 'Conformité Réglementaire MINMIDT' },
  { icon: <Icon.globe />, label: 'Ancrage National Camerounais' },
  { icon: SolarPanel, label: 'Gaz Domestique & Lubrifiants' },
]

const heroStats = [
  { icon: <Icon.fuel />, label: 'Stations', value: '30', sub: 'Objectif réseau d’ici 2028' },
  { icon: <Icon.flag />, label: 'Terrain', value: '2 Régions', sub: 'Littoral & Ouest', mod: ' grp-stat--blue' },
  { icon: <Icon.users />, label: 'Expertises', value: '4 Métiers', sub: 'Lubrifiants, élec., automatisme, gaz' },
  { icon: <Icon.server />, label: 'Centres gaz', value: '2 Villes', sub: 'Douala & Bafoussam' },
  { icon: <Icon.wifi />, label: 'Stations livrées', value: '6 Repères', sub: 'Ouvertes ou citées depuis 2021', hl: true },
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
          <span className="grp-hero-eyebrow">Acteur énergétique camerounais</span>
          <h1 className="h1">Bâtir l’avenir énergétique du Cameroun avec rigueur et intégrité.</h1>
          <p className="grp-hero-lead">
            Distributeur de carburants, de gaz domestique et de lubrifiants à travers un réseau de
            stations-service en plein développement, Vision Energy sert automobilistes et ménages
            camerounais sous un principe simple : la qualité à bon prix.
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
    year: '2021',
    title: 'Première Station à Douala',
    text: 'Ouverture de notre première station-service à Bonamoussadi (Douala), devenue un repère local et le point de départ de notre réseau de distribution.',
    foot: { icon: <Icon.anchor />, label: 'Bonamoussadi, repère depuis 2021' },
  },
  {
    num: '02',
    year: '2025',
    title: 'Extension du Réseau',
    text: 'Mise en conformité et accompagnement de la station de Tobe (arr. Poumougne, Région de l’Ouest) le 27 juin 2025, aux côtés de Logbessou PK15 et Bamendzi.',
    foot: { icon: <Icon.truck />, label: 'Douala, Bafoussam & Ouest' },
  },
  {
    num: '03',
    year: '2026',
    title: 'Batcham & Mbouda Ouverts',
    text: 'Ouverture de Batcham sur l’axe Mbouda–Batcham le 15 janvier 2026, puis inauguration officielle de Mbouda le 28 avril 2026.',
    foot: { icon: <Icon.drop />, label: 'Mbouda, 28 avril 2026' },
    numMod: 'grp-num--blue',
    yearMod: 'grp-year--blue',
    footMod: ' grp-tl-foot--blue',
  },
  {
    num: '04',
    year: 'Aujourd’hui & Demain',
    title: 'Cap 30 Stations & Gaz',
    text: 'Programme de construction et de réhabilitation de centres de remplissage de gaz à Douala et Bafoussam, avec pour objectif 30 stations d’ici 2028.',
    foot: { icon: <Icon.leaf />, label: 'Objectif : 30 stations en 2028' },
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
            <h2 className="h2">Histoire &amp; Genèse d’un Acteur Camerounais</h2>
          </div>
          <p className="lead">
            Une aventure récente, née à Douala, faite d’ouvertures de stations maîtrisées et
            d’investissements progressifs au service de l’économie réelle.
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
    title: 'Sécurité & Rigueur',
    text: 'Une culture exigeante de la sécurité des personnes et des installations aux stations comme dans les centres de remplissage de gaz, avec des procédures strictes.',
    tag: { label: 'Non-négociable', mod: 'grp-tag--red' },
  },
  {
    icon: <Icon.gavel />,
    tile: 'icon-tile icon-tile--blue',
    title: 'Intégrité & Conformité',
    text: 'Études d’impact, plans d’urgence et dossiers réglementaires MINMIDT suivis avec sérieux pour chaque station du réseau camerounais.',
    tag: { label: 'Conformité MINMIDT', mod: 'grp-tag--blue' },
  },
  {
    icon: <Icon.cpu />,
    tile: 'icon-tile',
    title: 'Innovation Technologique',
    text: 'Ingénieurs en lubrifiants, électricité, automatisme et gaz : nos équipes conçoivent, réhabilitent et supervisent nos installations techniques.',
    tag: { label: '4 spécialités', mod: 'grp-tag--green' },
  },
  {
    icon: <Icon.recycle />,
    tile: 'icon-tile icon-tile--gray',
    title: 'Éco-responsabilité',
    text: 'Collecte des huiles usagées, gestion responsable des déchets et accompagnement des communautés riveraines de nos stations-service.',
    tag: { label: 'Gestes responsables', mod: 'grp-tag--gray' },
  },
]

function Valeurs() {
  return (
    <section className="section section--bg2 grp-sec">
      <div className="container">
        <div className="sec-head sec-head--stack">
          <span className="eyebrow" style={{ color: 'var(--color-primary)' }}>
            Fondations morales &amp; opérationnelles
          </span>
          <h2 className="h2">Vision, Mission &amp; Engagements</h2>
          <p className="lead">
            Nos principes guident chaque geste du réseau : la sécurité des sites, la traçabilité des
            produits et la qualité à bon prix pour chaque client.
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
          <img
            src="/assets/images/grp-director-clean.jpg"
            alt="M. Kamdem Youmbi Ngué Tchuchi Ghislain, Président-Directeur Général de Vision Energy S.A."
            width="954"
            height="1212"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="grp-director-cap">
            <span>Président-Directeur Général</span>
            <b>M. Kamdem Youmbi Ngué Tchuchi Ghislain</b>
            <p>Dirigeant de Vision Energy S.A., capital d’origine camerounaise</p>
          </figcaption>
        </figure>

        <div>
          <span className="eyebrow">Gouvernance stratégique</span>
          <h2 className="h2">Une direction camerounaise, présente sur le terrain depuis 2021.</h2>
          <div className="grp-quote">
            <span className="grp-quote-mark" aria-hidden="true">
              &rdquo;
            </span>
            <p>
              « La qualité à bon prix n’est pas un slogan : c’est l’exigence que nous appliquons à
              chaque station, à chaque bouteille de gaz et à chaque litre distribué à nos clients
              camerounais. »
            </p>
            <cite>— Comité de direction, Vision Energy S.A.</cite>
          </div>

          <div className="grp-gov-cards">
            <article className="card grp-gov-card">
              <h3>
                <Icon.building /> Direction Générale
              </h3>
              <p>
                Pilotée par M. Kamdem Youmbi Ngué Tchuchi Ghislain, elle fixe le cap du réseau :
                30 stations d’ici 2028, avec un capital d’origine camerounaise.
              </p>
            </article>
            <article className="card grp-gov-card">
              <h3>
                <Icon.users /> Comité de Direction
              </h3>
              <p>
                Derrick Pavel Bognou Chiwa (direction technique, lubrifiants &amp; gaz), Rhonis Cabrel
                Pimatchi Sakock (opérations, Douala) et Vanessa Kirro (gestion de projet).
              </p>
            </article>
          </div>

          <div className="grp-team">
            <div className="grp-avatars" aria-hidden="true">
              <i>KY</i>
              <i>DP</i>
              <i>VK</i>
              <i>RC</i>
            </div>
            <p>
              Direction épaulée par des ingénieurs en lubrifiants, électricité, automatisme et gaz.
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
    title: 'Emplois & Compétences Locales',
    text: 'Des équipes camerounaises en poste depuis mars 2023, formées à la sécurité, à la conduite de stations et au service client dans nos différentes villes.',
    foot: { label: 'Équipes locales :', value: 'En poste depuis 2023' },
  },
  {
    icon: ShieldBolt,
    tile: 'icon-tile icon-tile--gray',
    title: 'Programme Gaz Domestique',
    text: 'Construction et réhabilitation de centres de remplissage de gaz, notamment à Douala et Bafoussam, pour rapprocher le GPL ménager des familles.',
    foot: { label: 'Villes de centres gaz :', value: 'Douala & Bafoussam' },
  },
  {
    icon: <Icon.drop />,
    tile: 'icon-tile',
    title: 'Préservation de l’Environnement',
    text: 'Études d’impact, plans d’urgence et gestion responsable des huiles usagées encadrent chaque nouvelle ouverture et chaque mise en conformité.',
    foot: { label: 'Dossiers réglementaires :', value: 'Suivis MINMIDT' },
  },
]

function Rse() {
  return (
    <section className="section section--dark grp-sec" id="rse">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow eyebrow--mint">Pacte d’impact local</span>
            <h2 className="h2" style={{ color: '#fff' }}>
              RSE, Emplois Locaux &amp; Gaz Domestique
            </h2>
          </div>
          <p className="lead">
            Chaque station ouverte, chaque centre de remplissage construit rapproche l’énergie des
            ménages camerounais et crée des emplois formés dans les villes où nous sommes implantés.
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
              <Icon.doc /> Présentation du réseau &amp; des activités
            </span>
            <h2 className="h2">Découvrez le Dossier Réseau &amp; Activités 2026</h2>
            <p className="lead">
              Retrouvez la cartographie de nos stations, nos activités gaz et lubrifiants, notre
              programme de centres de remplissage et notre engagement : la qualité à bon prix.
            </p>
            <div className="grp-report-meta">
              <span>Stations, gaz &amp; lubrifiants</span>
              <i aria-hidden="true">•</i>
              <span>Objectif 30 stations d’ici 2028</span>
              <i aria-hidden="true">•</i>
              <span>Adresses &amp; repères confirmés</span>
            </div>
          </div>
          <div className="grp-report-actions">
            <a className="btn btn--primary" href={href('/reseau')}>
              <Icon.pin /> Localiser nos stations
            </a>
            <a className="btn btn--outline" href={href('/reseau', 'contact')}>
              <Icon.mail /> Écrire à la direction
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
