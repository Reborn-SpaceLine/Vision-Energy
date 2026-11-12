import '../styles/produits.css'
import type { SVGProps } from 'react'
import { useState } from 'react'
import { href } from '../router'
import { Icon } from '../components/icons'

/* local icons not present in the shared set */
function GasBottle(p: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...p}
    >
      <path d="M9.5 2.5h5M12 2.5v2.5" />
      <path d="M8 7.5a4 4 0 0 1 8 0V9c1.4 1 2 2.4 2 4v6.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V13c0-1.6.6-3 2-4z" />
      <path d="M7 14h10" />
    </svg>
  )
}

/* --------------------------------------------------------------- hero */
const heroStats = [
  { value: '840', label: 'CFA/L Super 95 — grille MINMIDT' },
  { value: '828', label: 'CFA/L Gasoil — grille MINMIDT' },
  { value: 'B6 → B35', label: 'Gaz en bouteille, en stock' },
]

function Hero() {
  return (
    <section className="pro-hero">
      <div className="container pro-hero-grid">
        <div>
          <span className="pro-hero-badge">
            <Icon.shieldPlus /> Conformité réglementaire &amp; sécurité en station
          </span>
          <h1 className="h1">
            Des Produits de Haute Précision, des Services Pensés pour{' '}
            <span className="hl--mint">Votre Quotidien</span>
          </h1>
          <p className="lead">
            Du carburant additivé aux lubrifiants de synthèse, Vision Energy déploie au Cameroun une
            offre complète de produits pétroliers et de gaz domestique, pensée pour allier sécurité,
            régularité de la qualité et prix maîtrisé — la qualité à bon prix.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href={href('/produits', 'carburants')}>
              <Icon.sliders /> Explorer le Catalogue
            </a>
            <a className="btn btn--onlight" href={href('/produits', 'b2b')}>
              <Icon.doc /> Demander un Devis Pro
            </a>
          </div>
          <div className="pro-hero-stats">
            {heroStats.map((s) => (
              <div className="pro-hero-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pro-hero-media">
           <img
             src="/assets/images/station-gaz-carbu.png"
             alt="Carburants et Gaz Domestique Vision Energy"
             width="1254"
             height="1254"
             fetchPriority="high"
             decoding="async"
           />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- filter bar */
const filterDefs = [
  { label: 'Tous les Produits', scrollTo: 'carburants' },
  { label: 'Particuliers & Familles', scrollTo: 'gaz' },
  { label: 'Flottes & Grands Comptes', scrollTo: 'flottes' },
]

function FilterBar({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  return (
    <div className="pro-filter">
      <div className="container">
        <div className="pro-filter-bar">
          <span className="pro-filter-label">
            <Icon.funnel /> Afficher l’offre adaptée :
          </span>
          <div className="pro-filter-chips">
            {filterDefs.map((f, i) => (
              <button
                key={f.label}
                className={i === active ? 'pro-fchip pro-fchip--on' : 'pro-fchip'}
                type="button"
                aria-pressed={i === active}
                onClick={() => {
                  onSelect(i)
                  const el = document.getElementById(f.scrollTo)
                  if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* --------------------------------------------------------- carburants */
const fuels = [
  {
    pill: 'Sans Plomb 95',
    pillCls: 'pill--sq pill--solid-green',
    icon: <Icon.gauge />,
    tileCls: 'icon-tile--mint-solid',
    title: 'Super 95 ProClean™',
    desc: "Agent détergent actif qui limite l'encrassement des soupapes d'admission et préserve la réactivité du moteur.",
    stats: [
      { cls: 'pro-stat--green', icon: <Icon.tag />, value: '840 CFA/L', label: 'Grille MINMIDT' },
      { cls: 'pro-stat--blue', icon: <Icon.shield />, value: 'Contrôle', label: 'Justesse en station' },
    ],
    ticks: [
      "Molécules anti-friction réduisant l'échauffement interne",
      'Démarrage immédiat à froid et régularité du ralenti',
      'Compatible avec tous les véhicules essence récents et anciens',
    ],
    kicker: 'Disponible à chaque pompe',
    kickerCls: 'kicker--green',
  },
  {
    pill: 'Diesel Premium',
    pillCls: 'pill--sq pill--solid-blue',
    icon: <Icon.wrench />,
    tileCls: 'icon-tile--lav icon-tile--navy',
    title: 'Gasoil ProClean™',
    desc: "Conçu pour les moteurs diesel haute pression, il limite l'encrassement des injecteurs et espace les cycles de maintenance.",
    stats: [
      { cls: 'pro-stat--green', icon: <Icon.tag />, value: '828 CFA/L', label: 'Grille MINMIDT' },
      { cls: 'pro-stat--blue', icon: <Icon.hourglass />, value: 'Disponible', label: 'Disponible en citerne' },
    ],
    ticks: [
      'Indice de cétane optimisé pour une combustion plus propre',
      "Désémulsion rapide pour protéger contre l'eau de condensation",
      'Idéal pour véhicules utilitaires légers, SUV et flottes lourdes',
    ],
    kicker: 'Livraison citerne & cuve sur site',
    kickerCls: 'kicker--blue',
  },
]

function Carburants() {
  return (
    <section className="section pro-carburants" id="carburants">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">
              <Icon.drop /> Carburants &amp; Additifs
            </span>
            <h2 className="h2">Carburants Additivés au Prix Homologué</h2>
            <p className="lead">
              Nos Super 95 et Gasoil intègrent des agents détergents et anti-corrosion qui maintiennent
              le circuit d’alimentation propre et préservent les performances moteur, plein après plein.
            </p>
          </div>
          <div className="pro-eff">
            <span>Contrôle à chaque livraison :</span>
            <span className="pill">Produits tracés</span>
          </div>
        </div>
        <div className="grid grid-2">
          {fuels.map((f) => (
            <article className="card card-hover pro-fuel-card" key={f.title}>
              <div className="pro-card-top">
                <span className={`pill ${f.pillCls}`}>{f.pill}</span>
                <span className={`icon-tile ${f.tileCls}`}>{f.icon}</span>
              </div>
              <h3 className="h3">{f.title}</h3>
              <p className="pro-card-desc">{f.desc}</p>
              <div className="pro-stat-row">
                {f.stats.map((s) => (
                  <div className={`pro-stat ${s.cls}`} key={s.label}>
                    <b>
                      {s.icon} {s.value}
                    </b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <ul className="ticks">
                {f.ticks.map((t) => (
                  <li key={t}>
                    <Icon.check /> {t}
                  </li>
                ))}
              </ul>
              <div className="pro-card-foot">
                <span className={`kicker ${f.kickerCls}`}>{f.kicker}</span>
                <a className="link-arrow link-arrow--blue" href={href('/produits')}>
                  <Icon.doc /> Fiche Technique (TDS)
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------- lubrifiants */
const lubes = [
  {
    img: '/assets/images/lub-canister-synth.jpg',
    pill: 'Synthèse 100%',
    pillCls: 'pill--sq pill--mint-solid',
    grade: '5W-30',
    title: 'VisionPro SynthTech Ultra',
    desc: 'Moteurs essence et diesel récents avec FAP. Réduction des frottements et économie de carburant.',
    specs: ['API SP / SN+', 'ACEA C2/C3'],
    price: 'Bidon 1L / 5L',
    priceCls: 'pro-lub-price--green',
  },
  {
    img: '/assets/images/lub-graissage-bay.jpg',
    pill: 'Semi-Synthèse',
    pillCls: 'pill--sq pill--lav',
    grade: '10W-40',
    title: 'VisionPro MultiDrive Fleet',
    desc: 'Haute résistance thermique idéale pour les climats chauds et le roulage urbain intensif.',
    specs: ['API CI-4 / SL', 'MB 229.1'],
    price: 'Bidon 5L / Fût 208L',
    priceCls: 'pro-lub-price--blue',
  },
  {
    img: '/assets/images/lub-drum-heavyduty.jpg',
    pill: 'Haute Endurance',
    pillCls: 'pill--sq pill--peri',
    grade: '15W-40',
    title: 'VisionPro HeavyDuty Max',
    desc: 'Poids lourds de transport international, engins miniers et flottes de bus soumises à fortes charges.',
    specs: ['API CK-4', 'Volvo VDS-4.5'],
    price: 'Fût 208L / IBC 1000L',
    priceCls: 'pro-lub-price--green',
  },
  {
    img: '/assets/images/lub-industrial-fluid.jpg',
    pill: 'Hydraulique & Industrie',
    pillCls: 'pill--sq pill--mint-solid',
    grade: 'ISO VG 46 / 68',
    title: 'VisionPro Hydro & Transmissions',
    desc: "Huiles hydrauliques et transmissions pour engins de BTP, groupes électrogènes et équipements industriels des sites camerounais.",
    specs: ['DIN 51524 Part 2', 'ISO L-HM'],
    price: 'Fût 208L / Bidon 5L',
    priceCls: 'pro-lub-price--blue',
  },
]

const lubTagDefs = [
  { label: 'Véhicules Légers', keys: ['SynthTech', 'MultiDrive'] },
  { label: 'Poids Lourds & BTP', keys: ['HeavyDuty', 'MultiDrive'] },
  { label: 'Industrie & Engins', keys: ['Hydro'] },
]

function Lubrifiants() {
  const [activeTag, setActiveTag] = useState(0)
  const visibleLubes = activeTag === 0
    ? lubes
    : lubes.filter((l) => lubTagDefs[activeTag].keys.some((k) => l.title.includes(k)))
  return (
    <section className="section pro-lub" id="lubrifiants">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">
              <Icon.flask /> Ingénierie Chimique
            </span>
            <h2 className="h2">Lubrifiants VisionPro™ Synthèse &amp; Minéraux</h2>
            <p className="lead">
              Des formulations rigoureuses homologuées par les grands constructeurs, sélectionnées
              par nos ingénieurs lubrifiants pour l'automobile, le transport lourd, le BTP et
              l'industrie au Cameroun.
            </p>
          </div>
          <div className="pro-tagpills">
            {lubTagDefs.map((t, i) => (
              <button
                key={t.label}
                type="button"
                className={i === activeTag ? 'pro-tagpill pro-tagpill--on' : 'pro-tagpill'}
                onClick={() => setActiveTag(i)}
                aria-pressed={i === activeTag}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-4">
          {visibleLubes.map((l) => (
            <article className="card card-hover pro-lub-card" key={l.title}>
              <div className="media pro-lub-media">
                <img src={l.img} alt={l.title} loading="lazy" decoding="async" />
              </div>
              <div className="pro-lub-meta">
                <span className={`pill ${l.pillCls}`}>{l.pill}</span>
                <b>{l.grade}</b>
              </div>
              <h3 className="h3">{l.title}</h3>
              <p className="prod-text">{l.desc}</p>
              <div className="pro-spec-chips">
                {l.specs.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="pro-card-foot">
                <span className={`pro-lub-price ${l.priceCls}`}>{l.price}</span>
                <a className="pro-dl" href={href('/produits')} aria-label="Télécharger la fiche">
                  <Icon.download />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- gaz */
const cylinders = [
  {
    pill: 'Usage Quotidien',
    pillCls: 'pill--sq pill--solid-green',
    block: 'pro-cyl-block--green',
    weight: '6 kg',
    title: 'Bouteille B6 "Midi"',
    desc: 'Compacte et ergonomique. Équipée pour brûleurs mobiles, campings et petits ménages.',
    footLabel: 'Tarif Homologué Réseau',
    footValue: 'Recharge standard',
    footCls: 'pro-cyl-foot--green',
  },
  {
    pill: 'Le Standard Famille',
    pillCls: 'pill--sq pill--solid-blue',
    block: 'pro-cyl-block--blue',
    weight: '12.5 kg',
    title: 'Bouteille B12 "Foyer"',
    desc: 'Autonomie idéale pour la cuisine domestique, compatible avec toutes les gazinières.',
    footLabel: 'Collerette scellée à chaud',
    footValue: 'Consigne + Charge',
    footCls: 'pro-cyl-foot--blue',
  },
  {
    pill: 'CHR & Industrie',
    pillCls: 'pill--sq pill--solid-slate',
    block: 'pro-cyl-block--dark',
    weight: '35 kg',
    title: 'Bouteille B35 Pro',
    desc: "Conçue pour hôtels, restaurants, boulangeries et séchoirs industriels avec raccord inverseur.",
    footLabel: 'Livraison Directe sur Site',
    footValue: 'Contrat Grand Volume',
    footCls: 'pro-cyl-foot--slate',
  },
]

function Gaz() {
  return (
    <section className="section pro-gaz" id="gaz">
      <div className="container pro-gaz-grid">
        <div>
          <span className="eyebrow">
            <Icon.flame /> Énergie Cuisson &amp; Industrie
          </span>
          <h2 className="h2">VisionGaz : Sécurité Inviolable &amp; Continuité d'Approvisionnement</h2>
          <p className="lead">
            Chaque bouteille de gaz VisionGaz est soumise à un test d'épreuve hydrostatique rigoureux
            et dotée d'une collerette scellée à chaud certifiant la pureté du butane/propane et le
            poids exact. Notre programme industriel de construction et de réhabilitation de centres
            de remplissage, engagé à Douala et à Bafoussam, renforce la disponibilité du gaz en
            bouteille sur l'ensemble de nos sites.
          </p>
          <div className="pro-gaz-infos">
            <div className="pro-info">
              <span className="icon-tile">
                <Icon.lock />
              </span>
              <div>
                <h3 className="h3">Valve de Sécurité Click–On</h3>
                <p>Connexion instantanée, capteur de surpression et fusible thermique de sécurité intégrés.</p>
              </div>
            </div>
            <div className="pro-info">
              <span className="icon-tile icon-tile--lav icon-tile--navy">
                <Icon.truck />
              </span>
              <div>
                <h3 className="h3">Échange Express 24/7</h3>
                <p>
                  Disponible dans nos stations de Douala, Bafoussam, Mbouda et Batcham ainsi que chez
                  nos distributeurs agréés partenaires.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-3">
          {cylinders.map((c) => (
            <article className="card card-hover pro-cyl" key={c.title}>
              <span className={`pill ${c.pillCls}`}>{c.pill}</span>
              <div className={`pro-cyl-block ${c.block}`}>
                <GasBottle />
                <b>{c.weight}</b>
              </div>
              <h3 className="h3">{c.title}</h3>
              <p>{c.desc}</p>
              <div className={`pro-cyl-foot ${c.footCls}`}>
                <span>{c.footLabel}</span>
                <b>{c.footValue}</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------- services (dark) */
const passSubs = [
  { icon: <Icon.sliders />, title: 'Plafonds Précis', text: 'Kilométrage, horaires et volume par jour.' },
  { icon: <Icon.receipt />, title: 'Facture Consolidée', text: 'Une facture unique pour tous les pleins de la flotte.' },
  { icon: <Icon.card />, title: 'Recharge Mobile', text: 'Alimentation instantanée via Mobile Money.' },
]

const boutTicks = [
  { icon: <Icon.coffee />, text: 'Café, boissons fraîches et snacking' },
  { icon: <Icon.shop />, text: 'Boutique de dépannage et petits besoins du trajet' },
  { icon: <Icon.gauge />, text: 'Gonflage, niveaux et lavage sur la piste' },
]

function Services() {
  return (
    <section className="section pro-services" id="visionpass">
      <div className="container">
        <span className="eyebrow eyebrow--mint">
          <Icon.share /> Services en station &amp; paiement
        </span>
        <h2 className="h2">Des Services Utiles, à Côté de la Pompe</h2>
        <p className="lead">
          Nos stations ne sont pas de simples points de ravitaillement : boutique, gaz en bouteille,
          lubrifiants, lavage et moyens de paiement sans contact pour faciliter le plein comme le
          quotidien.
        </p>

        <div className="pro-svc-grid">
          <article className="pro-dcard" id="flottes">
            <div className="pro-dcard-top">
              <span className="pill pill--darkmint">
                <Icon.nfc /> Paiement Sécurisé &amp; Flottes Pro
              </span>
              <span className="wallets">Orange Money&nbsp;&nbsp;•&nbsp;&nbsp;MTN MoMo&nbsp;&nbsp;•&nbsp;&nbsp;Visa</span>
            </div>
            <h3 className="h3">Carte VisionPass™ : Pilotez vos Dépenses de Carburant au Centime Près</h3>
            <p className="pro-dcard-lead">
              Une solution de carte à puce sans contact et badge NFC couplée à un portail
              web d'entreprise. Fixez des plafonds hebdomadaires par véhicule, restreignez les types
              de carburant autorisés et recevez une facture unique consolidée.
            </p>
            <div className="pro-svc-subs">
              {passSubs.map((s) => (
                <div className="pro-svc-sub" key={s.title}>
                  {s.icon}
                  <b>{s.title}</b>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <div className="pro-dcard-foot">
              <a className="btn btn--primary" href={href('/produits', 'flottes')}>
                <Icon.card /> Commander des Cartes Flotte
              </a>
              <span className="note">Accessible aux TPE, PME et Transporteurs routiers</span>
            </div>
          </article>

          <article className="pro-dcard pro-bout" id="boutiques">
            <span className="icon-tile icon-tile--lav icon-tile--navy">
              <Icon.coffee />
            </span>
            <h3 className="h3">Boutiques &amp; Espaces de Repos</h3>
            <p className="pro-dcard-lead">
              Une pause utile sur vos trajets : café et boissons fraîches, produits de première
              nécessité, lubrifiants et petits équipements du véhicule, avec un accueil attentif à
              chaque visite.
            </p>
            <ul className="pro-ticks-dark">
              {boutTicks.map((t) => (
                <li key={t.text}>
                  {t.icon} {t.text}
                </li>
              ))}
            </ul>
            <div className="media pro-bout-media">
              <img
                src="/assets/images/station-boutique.jpg"
                alt="Cafétéria et Boutique Vision Express"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </div>

        <article className="pro-dcard pro-entretien">
          <div>
            <span className="icon-tile icon-tile--mint-solid">
              <Icon.drop />
            </span>
            <h3 className="h3">Entretien Courant &amp; Lavage en Station</h3>
            <p className="pro-dcard-lead">
              Prenez soin de votre véhicule sans rendez-vous grâce à nos aires techniques en station :
              lavage haute pression, niveaux, pressions des pneus et petite vidange réalisés par nos
              agents.
            </p>
          </div>
          <div className="pro-ent-subs">
            <div className="pro-ent-sub">
              <div className="pro-ent-sub-top">
                <b>Baie Vidange Express</b>
                <span className="pro-ent-tag pro-ent-tag--mint">Sans RDV</span>
              </div>
              <p>
                Vidange réalisée en station pendant que vous faites le plein, avec filtres adaptés et
                contrôle des niveaux offert.
              </p>
              <span className="pro-ent-note pro-ent-note--mint">
                <Icon.check /> Huiles VisionPro disponibles en station
              </span>
            </div>
            <div className="pro-ent-sub">
              <div className="pro-ent-sub-top">
                <b>Lavage &amp; Gonflage</b>
                <span className="pro-ent-tag pro-ent-tag--gray">Sans RDV</span>
              </div>
              <p>
                Tunnel à brosses textiles et pistes haute pression pour repartir avec un véhicule propre,
                sans attendre.
              </p>
              <span className="pro-ent-note pro-ent-note--gray">
                <Icon.recycle /> Eau et déchets gérés sur site
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- B2B */
const b2bTicks = [
  'Livraison sur site sous 24h à 48h',
  'Mise à disposition et étalonnage de cuves de stockage',
  'Conditions de paiement flexibles à 30 ou 60 jours',
]

function B2B() {
  return (
    <section className="section pro-b2b" id="b2b">
      <div className="container pro-b2b-grid">
        <div>
          <span className="eyebrow">
            <Icon.briefcase /> Espace B2B &amp; Partenaires
          </span>
          <h2 className="h2">Approvisionnement Citerne, Cuves Dédiées &amp; Flottes Pro</h2>
          <p className="lead">
            Vous gérez une entreprise logistique, un chantier BTP ou un site agro-industriel ? Nos
            conseillers commerciaux élaborent des solutions sur mesure avec approvisionnement garanti
            par camions-citernes scellés.
          </p>
          <div className="pro-b2b-callout" id="stockage">
            <div>
              <h3 className="h3">
                <Icon.headset /> Cellule Grands Comptes Dédiée
              </h3>
              <p>
                Ligne directe : <a href="tel:+237699002000">+237 6 99 00 20 00</a> (Lun - Sam, 8h à 19h) ·
                Hotline réseau : 800 10 10
                <br />
                Email : <a href="mailto:direction@vision-energy.cm">direction@vision-energy.cm</a>
                <br />
                Siège : B.P. 11 480, Douala · Cameroun
              </p>
            </div>
          </div>
          <ul className="ticks" id="logistique">
            {b2bTicks.map((t) => (
              <li key={t}>
                <Icon.check /> {t}
              </li>
            ))}
          </ul>
        </div>

        <form className="card pro-form" onSubmit={(e) => e.preventDefault()}>
          <h3 className="h3">Formulaire de Demande de Cotation &amp; Devis</h3>
          <p>
            Remplissez les informations relatives à votre structure pour recevoir une offre tarifaire
            ferme sous 4 heures ouvrées.
          </p>
          <div className="pro-form-grid">
            <label className="pro-field">
              <span>Raison Sociale / Société</span>
              <input type="text" placeholder="Ex: Transports Logistiques du Wouri SARL" />
            </label>
            <label className="pro-field">
              <span>Nom du Contact Responsable</span>
              <input type="text" placeholder="Ex: Mbarga Jean" />
            </label>
            <label className="pro-field">
              <span>Téléphone Professionnel</span>
              <input type="tel" placeholder="+237 6 00 00 00 00" />
            </label>
            <label className="pro-field">
              <span>Email Professionnel</span>
              <input type="email" placeholder="achat@entreprise.cm" />
            </label>
            <label className="pro-field">
              <span>Type de Produit Requis</span>
              <select defaultValue="Gasoil ProClean — Livraison Citerne">
                <option>Gasoil ProClean — Livraison Citerne</option>
                <option>Super 95 ProClean — Livraison Citerne</option>
                <option>Lubrifiants VisionPro (Fût / IBC)</option>
                <option>Gaz VisionGaz (Palette / Conteneur)</option>
              </select>
            </label>
            <label className="pro-field">
              <span>Volume Mensuel Estimé</span>
              <input type="text" defaultValue="5 000 à 15 000 Litres" />
            </label>
            <label className="pro-field pro-field--full">
              <span>Lieu de Livraison &amp; Spécifications Particulières</span>
              <textarea placeholder="Indiquez la zone géographique (ex: Zone industrielle de Bonabéri ou de Bassa, Douala; Bafoussam; Yaoundé; axe Douala – Yaoundé) ou vos contraintes techniques..." />
            </label>
          </div>
          <div className="pro-form-foot">
            <button className="btn btn--primary" type="submit">
              <Icon.send /> Transmettre la Demande de Devis
            </button>
            <span className="note">Confidentialité commerciale garantie</span>
          </div>
        </form>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- FAQ */
const faqs = [
  {
    q: 'Quelle est la différence entre un carburant classique et un carburant ProClean ?',
    a: "Nos carburants additivés intègrent un paquet détergent et anti-corrosion exclusif qui nettoie en continu le circuit d'alimentation, protège les injecteurs et réduit jusqu'à 4,1% la consommation moyenne par rapport à un carburant standard.",
  },
  {
    q: 'Comment souscrire à la carte flotte VisionPass pour mon entreprise ?',
    a: "Contactez notre Cellule Grands Comptes via le formulaire de devis ou par téléphone. Nous configurons les plafonds par véhicule, les types de carburant autorisés et l'accès au portail web de gestion en quelques jours ouvrés.",
  },
  {
    q: "Mes bouteilles de gaz d'une autre marque sont-elles échangeables contre VisionGaz ?",
    a: "Oui. Le principe de l'échange express vous permet de rapporter toute bouteille conforme et scellée dans nos stations et chez nos distributeurs agréés pour repartir avec une bouteille VisionGaz contrôlée.",
  },
  {
    q: 'Quel lubrifiant VisionPro choisir pour mon véhicule ou ma flotte ?',
    a: "Chaque fiche technique indique les normes constructeur (API, ACEA, MB, Volvo). Nos ingénieurs lubrifiants vous orientent vers la viscosité et l'homologation adaptées à vos motorisations et à votre climat d'exploitation.",
  },
]

function Faq() {
  return (
    <section className="section pro-faq">
      <div className="container">
        <div className="sec-head sec-head--stack">
          <span className="eyebrow eyebrow--center">
            <Icon.help /> Questions Fréquentes
          </span>
          <h2 className="h2">Tout Savoir sur nos Produits &amp; Services</h2>
          <p className="lead">
            Consultez nos réponses directes pour optimiser vos approvisionnements et l'utilisation de
            nos équipements.
          </p>
        </div>
        <div className="pro-faq-list">
          {faqs.map((f) => (
            <details className="pro-acc" key={f.q}>
              <summary>
                {f.q}
                <Icon.chevD />
              </summary>
              <div className="pro-acc-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- cta band
   (local copy of the shared CtaBand markup, using the global .cta-band
   classes from index.css, so this page stays independent of Home.tsx) */
function ProCtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string
  text: string
  primary: { label: string; to: string; sec: string }
  secondary: { label: string; to: string; sec: string }
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

/* --------------------------------------------------------------- page */
export default function ProduitsPage() {
  const [activeFilter, setActiveFilter] = useState(0)
  return (
    <div className="produits-root">
      <Hero />
      <FilterBar active={activeFilter} onSelect={setActiveFilter} />
      <Carburants />
      <Lubrifiants />
      <Gaz />
      <Services />
      <B2B />
      <Faq />
      <ProCtaBand
        title="VisionPass & Solutions Flottes Pro"
        text="Paiement sécurisé sans contact, gestion de carburant par véhicule et remises automatiques en station."
        primary={{ label: 'Découvrir VisionPass', to: '/produits', sec: 'visionpass' }}
        secondary={{ label: 'Espace Entreprise', to: '/produits', sec: 'b2b' }}
      />
    </div>
  )
}
