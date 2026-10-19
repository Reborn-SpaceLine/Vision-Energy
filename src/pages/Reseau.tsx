import '../styles/res.css'
import { Icon } from '../components/icons'
import { href } from '../router'
import { CtaBand } from './Home'

/* --------------------------------------------------------------- hero */
const services = [
  { icon: <Icon.sliders />, label: 'Tout afficher', on: true },
  { icon: <Icon.drop />, label: 'Lavage Express' },
  { icon: <Icon.shop />, label: 'Boutique & Café' },
  { icon: <Icon.gauge />, label: 'Gonflage & Niveaux' },
  { icon: <Icon.flame />, label: 'Gaz Bouteille' },
  { icon: <Icon.nfc />, label: 'VisionPass & Mobile Money' },
  { icon: <Icon.coffee />, label: 'Café / Restauration' },
]

/* ----------------------------------------------------------- stations */
type Price = { label: string; value: string; unit?: string; tone?: 'green' | 'blue' }
type Station = {
  tag: string
  tone: 'green' | 'blue' | 'gray'
  dot?: boolean
  status: string
  name: string
  addr: string
  prices: Price[]
  svcs: { icon: React.ReactNode; label: string }[]
  dist: string
  time: string
  lead?: boolean
}

const stations: Station[] = [
  {
    tag: 'Station Historique',
    tone: 'green',
    dot: true,
    status: 'Ouvert 24/7',
    name: 'Station Douala – Bonamoussadi',
    addr: 'Bonamoussadi, Douala, Région du Littoral',
    lead: true,
    prices: [
      { label: 'Super 95', value: '795', unit: 'CFA/L' },
      { label: 'Gasoil', value: '745', unit: 'CFA/L', tone: 'green' },
      { label: 'Gaz Bout.', value: 'En stock', tone: 'blue' },
    ],
    svcs: [
      { icon: <Icon.drop />, label: 'Lavage & Gonflage' },
      { icon: <Icon.shop />, label: 'Boutique & Café' },
      { icon: <Icon.flame />, label: 'Gaz B6 / B12 / B35' },
      { icon: <Icon.card />, label: 'Lubrifiants VisionPro' },
      { icon: <Icon.nfc />, label: 'VisionPass' },
    ],
    dist: 'À 1.4 km de vous',
    time: '4 min',
  },
  {
    tag: 'Quartier Populaire',
    tone: 'blue',
    status: 'Ouvert 24/7',
    name: 'Station Douala – Logbessou PK15',
    addr: 'Logbessou, PK15, Douala, Région du Littoral',
    prices: [
      { label: 'Super 95', value: '795', unit: 'CFA/L' },
      { label: 'Gasoil', value: '745', unit: 'CFA/L', tone: 'green' },
      { label: 'Gaz Bout.', value: 'En stock' },
    ],
    svcs: [
      { icon: <Icon.flame />, label: 'Gaz B6 / B12' },
      { icon: <Icon.shop />, label: 'Boutique' },
      { icon: <Icon.gauge />, label: 'Gonflage Pneus' },
      { icon: <Icon.nfc />, label: 'VisionPass' },
    ],
    dist: 'À 9.5 km de vous',
    time: '20 min',
  },
  {
    tag: 'Chef-lieu Régional',
    tone: 'gray',
    status: 'Ouvert 24/7',
    name: 'Station Bafoussam – Bamendzi',
    addr: 'Bamendzi, avant le stade municipal, Bafoussam, Région de l’Ouest',
    prices: [
      { label: 'Super 95', value: '795', unit: 'CFA/L' },
      { label: 'Gasoil', value: '745', unit: 'CFA/L', tone: 'green' },
      { label: 'Gaz Bout.', value: 'En stock' },
    ],
    svcs: [
      { icon: <Icon.flame />, label: 'Centre de remplissage gaz' },
      { icon: <Icon.shop />, label: 'Boutique' },
      { icon: <Icon.gauge />, label: 'Gonflage Pneus' },
      { icon: <Icon.card />, label: 'VisionPass Pro' },
    ],
    dist: 'À 295 km de vous',
    time: '4 h 05',
  },
  {
    tag: 'Nouvelle Ouverture',
    tone: 'green',
    status: 'Ouverte le 15/01/2026',
    name: 'Station Batcham',
    addr: 'Axe Mbouda – Batcham, Région de l’Ouest',
    prices: [
      { label: 'Super 95', value: '795', unit: 'CFA/L' },
      { label: 'Gasoil', value: '745', unit: 'CFA/L', tone: 'green' },
      { label: 'Gaz Bout.', value: 'En stock' },
    ],
    svcs: [
      { icon: <Icon.flame />, label: 'Gaz Bouteille' },
      { icon: <Icon.shop />, label: 'Boutique' },
      { icon: <Icon.truck />, label: 'Ravitaillement Flottes' },
      { icon: <Icon.nfc />, label: 'VisionPass' },
    ],
    dist: 'À 320 km de vous',
    time: '4 h 30',
  },
  {
    tag: 'Nouvelle Ouverture',
    tone: 'blue',
    status: 'Ouverte le 28/04/2026',
    name: 'Station Mbouda',
    addr: 'Mbouda, Département des Bamboutos, Région de l’Ouest',
    prices: [
      { label: 'Super 95', value: '795', unit: 'CFA/L' },
      { label: 'Gasoil', value: '745', unit: 'CFA/L', tone: 'green' },
      { label: 'Lubrifiant', value: 'Pro 15W40' },
    ],
    svcs: [
      { icon: <Icon.drop />, label: 'Lavage' },
      { icon: <Icon.shop />, label: 'Boutique' },
      { icon: <Icon.card />, label: 'Lubrifiants VisionPro' },
      { icon: <Icon.gauge />, label: 'Gonflage Pneus' },
    ],
    dist: 'À 305 km de vous',
    time: '4 h 20',
  },
  {
    tag: 'Axe Douala – Yaoundé',
    tone: 'gray',
    status: 'Mise en conformité le 27/06/2025',
    name: 'Station Tobe – Poumougne',
    addr: 'Tobe, arr. Poumougne, Koung-Khi, Région de l’Ouest',
    prices: [
      { label: 'Super 95', value: '795', unit: 'CFA/L' },
      { label: 'Gasoil', value: '745', unit: 'CFA/L', tone: 'green' },
      { label: 'Gaz Bout.', value: 'En stock' },
    ],
    svcs: [
      { icon: <Icon.flame />, label: 'Gaz B6 / B12' },
      { icon: <Icon.shop />, label: 'Boutique' },
      { icon: <Icon.truck />, label: 'Ravitaillement Flottes' },
      { icon: <Icon.nfc />, label: 'VisionPass' },
    ],
    dist: 'À 250 km de vous',
    time: '3 h 30',
  },
]

/* ---------------------------------------------------------- experience */
const PisteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="4.4" r="2.1" />
    <path d="M11 6.8v6.2M11 13l-3.2 6.4M11 13l3.2 6.4M7.4 9.2 11 7.6l4.6-3.4M15.6 4.2l1.8-1.4" />
  </svg>
)

const experiences = [
  {
    icon: <PisteIcon />,
    tile: 'mint',
    title: 'Équipes de Piste en Station',
    text: "Accueil à la pompe, coup d'œil sur la pression des pneumatiques et les niveaux, halte propre avant de repartir : le service qui fait la différence au quotidien.",
    img: '/images/res-a.jpg',
    alt: 'Équipe de piste Vision Energy au service d’un client en station',
  },
  {
    icon: <Icon.shield />,
    tile: 'blue',
    title: 'Stations Éclairées et Surveillées',
    text: "Pistes éclairées la nuit, présence constante d’agents et procédures de sécurité affichées sur chaque site, y compris à côté des aires de remplissage gaz.",
    img: '/images/res-b.jpg',
    alt: 'Station Vision Energy éclairée de nuit',
  },
  {
    icon: <Icon.shop />,
    tile: 'dark',
    title: 'Boutiques & Espaces Café',
    text: 'Boissons fraîches, produits de dépannage, lubrifiants et accessoires : de quoi reprendre la route sans détour, dans un espace entretenu pendant l’attente.',
    img: '/images/res-c.jpg',
    alt: 'Intérieur de boutique Vision Energy',
  },
]

/* --------------------------------------------------------- partenariat */
const partPoints = [
  {
    icon: <Icon.check />,
    tone: 'green',
    title: 'Aménagement & Enseigne',
    text: 'Îlots de distribution, signalétique et équipements repris par nos équipes techniques, comme lors de la mise en conformité de Tobe.',
  },
  {
    icon: <Icon.trendUp />,
    tone: 'blue',
    title: 'Rentabilité & Approvisionnement Garanti',
    text: "Approvisionnement suivi grâce à notre logistique dédiée et à nos capacités de stockage.",
  },
  {
    icon: <Icon.grad />,
    tone: 'green',
    title: 'Formation de Vos Équipes',
    text: 'Accompagnement de vos gérants et agents de piste sur la sécurité, la manipulation du gaz et l’accueil client.',
  },
]

/* ------------------------------------------------------------------ page */
export default function ReseauPage() {
  return (
    <>
      {/* ===== hero + recherche ===== */}
      <section className="res-hero" id="geoloc">
        <div className="container">
          <div className="res-hero-top">
            <div>
              <span className="res-hero-pill">
                <Icon.share /> Réseau Vision Energy Cameroun • 30 stations d’ici 2028
              </span>
              <h1 className="res-hero-title">
                Trouvez une Station <span className="res-hero-mint">Vision Energy</span> à
                Proximité.
              </h1>
              <p className="res-hero-lead">
                Carburants additivés au prix juste, gaz en bouteille, lubrifiants et boutiques dans
                nos stations de Douala et de la Région de l’Ouest — la qualité à bon prix.
              </p>
            </div>
            <div className="res-hero-stats">
              <div className="res-stat">
                <b>6</b>
                <span>Stations en exploitation</span>
              </div>
              <div className="res-stat">
                <b className="res-stat--white">24h/24</b>
                <span>Sécurité &amp; Piste</span>
              </div>
            </div>
          </div>

          <form className="res-panel" onSubmit={(e) => e.preventDefault()}>
            <div className="res-panel-grid">
              <div>
                <span className="res-flabel">Ville, quartier ou axe routier</span>
                <label className="res-finput">
                  <Icon.navigate />
                  <input
                    type="text"
                    defaultValue="Douala, Cameroun"
                    aria-label="Ville, quartier ou axe routier"
                  />
                </label>
              </div>
              <div>
                <span className="res-flabel">Type d'énergie</span>
                <label className="res-finput res-fselect">
                  <Icon.fuel />
                  <select defaultValue="all" aria-label="Type d'énergie">
                    <option value="all">Tous carburants &amp; énergie</option>
                    <option>Carburants (Super 95 / Gasoil)</option>
                    <option>Gaz domestique &amp; bouteilles</option>
                    <option>Lubrifiants VisionPro</option>
                  </select>
                  <Icon.chevD className="res-chev" />
                </label>
              </div>
              <div>
                <span className="res-flabel">Rayon</span>
                <label className="res-finput res-fselect">
                  <Icon.target />
                  <select defaultValue="15" aria-label="Rayon de recherche">
                    <option>5 km</option>
                    <option>10 km</option>
                    <option value="15">15 km</option>
                    <option>25 km</option>
                    <option>50 km</option>
                  </select>
                  <Icon.chevD className="res-chev" />
                </label>
              </div>
              <button className="res-btn-search" type="submit">
                <Icon.search /> Rechercher
              </button>
            </div>
            <div className="res-services">
              <span className="res-services-lbl">Services prioritaires :</span>
              {services.map((s) => (
                <button key={s.label} type="button" className={'res-svc' + (s.on ? ' on' : '')}>
                  {s.icon} {s.label}
                </button>
              ))}
            </div>
          </form>
        </div>
      </section>

      {/* ===== stations à proximité + carte ===== */}
      <section className="res-stations">
        <div className="container res-st-grid">
          <div>
            <div className="res-st-head">
              <div>
                <h2 className="res-st-h">Stations à proximité</h2>
                <p className="res-st-count">6 stations identifiées au Cameroun • objectif 30 d’ici 2028</p>
              </div>
              <span className="res-live">Réseau Cameroun</span>
            </div>

            {stations.map((st) => (
              <article
                key={st.name}
                className={'res-station' + (st.lead ? ' res-station--lead' : '')}
              >
                <div className="res-st-top">
                  <span className={'res-tag res-tag--' + st.tone}>
                    {st.dot && <i className="res-dot" />}
                    {st.tag}
                  </span>
                  <span className="res-open">{st.status}</span>
                </div>
                <h3 className="res-st-name">{st.name}</h3>
                <p className="res-st-addr">
                  <Icon.pin /> {st.addr}
                </p>
                <div className="res-prices">
                  {st.prices.map((p) => (
                    <div className="res-price" key={p.label}>
                      <span>{p.label}</span>
                      <b
                        className={
                          p.tone === 'green'
                            ? 'res-p-green'
                            : p.tone === 'blue'
                              ? 'res-p-blue'
                              : undefined
                        }
                      >
                        {p.value}
                      </b>
                      {p.unit && <i> {p.unit}</i>}
                    </div>
                  ))}
                </div>
                <div className="res-st-svcs">
                  {st.svcs.map((s) => (
                    <span className="res-svc2" key={s.label}>
                      {s.icon} {s.label}
                    </span>
                  ))}
                </div>
                <div className="res-st-foot">
                  <span className="res-dist">
                    <b>{st.dist}</b> • {st.time}
                  </span>
                  <span className="res-st-actions">
                    <a className="res-btn-route" href={href('/reseau', 'geoloc')}>
                      <Icon.navigate /> Itinéraire
                    </a>
                    <button className="res-btn-info" type="button" aria-label={'Infos ' + st.name}>
                      <Icon.info />
                    </button>
                  </span>
                </div>
              </article>
            ))}

            <p className="res-note">
              <Icon.pin /> Réseau en déploiement accéléré : Tobe / Poumougne mise en conformité le
              27/06/2025, Batcham ouverte le 15/01/2026 et Mbouda le 28/04/2026, aux côtés de
              Bonamoussadi, Logbessou PK15 et Bamendzi (Bafoussam) — objectif 30 stations d’ici 2028.
              Programme de centres de remplissage de gaz à Douala et Bafoussam. Siège : B.P. 11 480,
              Douala · Cameroun.
            </p>
          </div>

          <div className="res-map">
            <svg className="vmap" viewBox="0 0 760 720" role="img" aria-labelledby="vmap-title">
              <title id="vmap-title">
                Schéma du réseau Vision Energy : six stations réparties entre le Littoral et
                l’Ouest du Cameroun — Bonamoussadi et Logbessou PK15 à Douala, Bamendzi à
                Bafoussam, Mbouda, Batcham et Tobe / Poumougne.
              </title>
              <defs>
                <pattern id="vmap-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M60 0H0v60" fill="none" strokeWidth="1" stroke="rgba(255,255,255,.05)" />
                </pattern>
              </defs>
              <rect width="760" height="720" fill="url(#vmap-grid)" />

              <path
                className="vmap-region"
                d="M120 60q180-30 300 50 100 70 50 190-50 100-190 80-140-20-175-140-25-110 15-180z"
              />
              <path
                className="vmap-region"
                d="M430 380q130-40 230 40 80 70 40 180-50 100-180 80-120-20-140-140-15-100 50-160z"
              />
              <path className="vmap-sea" d="M760 508q-58 34-86 92-24 52-12 120h98z" />

              <g className="vmap-road" fill="none">
                <path d="M470 470Q400 392 302 252" />
                <path d="M470 470Q300 400 182 192" />
                <path d="M182 192Q270 138 388 152" />
                <path d="M302 252Q356 202 388 152" />
                <path d="M302 252Q358 288 400 330" />
              </g>

              <text className="vmap-eyebrow" x="36" y="48">
                Réseau Vision Energy
              </text>
              <text className="vmap-title" x="36" y="80">
                Littoral &amp; Ouest
              </text>
              <text className="vmap-note" x="36" y="106">
                6 stations · 2 centres gaz
              </text>

              <text className="vmap-region-lbl" x="150" y="348">
                OUEST
              </text>
              <text className="vmap-region-lbl" x="596" y="412">
                LITTORAL
              </text>

              <g className="vmap-stop">
                <circle className="vmap-dot" cx="388" cy="152" r="7.5" />
                <text className="vmap-st-name" x="388" y="128" textAnchor="middle">
                  Batcham
                </text>
              </g>
              <g className="vmap-stop">
                <circle className="vmap-dot" cx="181" cy="191" r="7.5" />
                <text className="vmap-st-name" x="158" y="190" textAnchor="end">
                  Mbouda
                </text>
                <text className="vmap-st-sub" x="158" y="209" textAnchor="end">
                  Bamboutos
                </text>
              </g>
              <g className="vmap-stop">
                <circle className="vmap-gas" cx="301" cy="251" r="14" />
                <circle className="vmap-dot" cx="301" cy="251" r="7.5" />
                <text className="vmap-st-name" x="328" y="246">
                  Bamendzi
                </text>
                <text className="vmap-st-sub" x="328" y="265">
                  Bafoussam · centre gaz
                </text>
              </g>
              <g className="vmap-stop">
                <circle className="vmap-dot" cx="400" cy="330" r="7.5" />
                <text className="vmap-st-name" x="424" y="326">
                  Tobe · Poumougne
                </text>
                <text className="vmap-st-sub" x="424" y="345">
                  Koung-Khi
                </text>
              </g>
              <g className="vmap-stop">
                <circle className="vmap-gas" cx="470" cy="470" r="14" />
                <circle className="vmap-dot" cx="470" cy="470" r="7.5" />
                <text className="vmap-st-name" x="446" y="464" textAnchor="end">
                  Bonamoussadi
                </text>
                <text className="vmap-st-sub" x="446" y="483" textAnchor="end">
                  Douala · centre gaz
                </text>
              </g>
              <g className="vmap-stop">
                <circle className="vmap-dot" cx="540" cy="505" r="7.5" />
                <text className="vmap-st-name" x="564" y="500">
                  Logbessou PK15
                </text>
                <text className="vmap-st-sub" x="564" y="519">
                  Douala
                </text>
              </g>

              <g className="vmap-legend-box">
                <circle className="vmap-dot" cx="494" cy="150" r="6" />
                <text className="vmap-legend" x="512" y="155">
                  Station en exploitation
                </text>
                <circle className="vmap-gas" cx="494" cy="178" r="9" />
                <text className="vmap-legend" x="512" y="183">
                  Centre de remplissage gaz
                </text>
                <text className="vmap-note" x="470" y="212">
                  Positions indicatives — schéma
                </text>
              </g>
            </svg>
            <div className="res-map-card">
              <span className="res-map-icon">
                <Icon.rosette />
              </span>
              <div>
                <span className="res-map-k">Engagement Qualité</span>
                <h3>Contrôle Métrologique des Pompes</h3>
                <p>Pompes électroniques vérifiées périodiquement par les services compétents de la métrologie.</p>
              </div>
              <a className="res-tariff" href={href('/produits', 'carburants')}>
                <Icon.fuel /> Consulter nos carburants
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== standards & confort ===== */}
      <section className="res-exp">
        <div className="container">
          <span className="res-eyebrow">Standards &amp; Confort</span>
          <h2 className="res-exp-h">Une Expérience en Station Repensée pour Chaque Conducteur</h2>
          <p className="res-exp-lead">
            Chez Vision Energy, faire le plein doit rester simple. Nos pistes suivent des procédures
            de sécurité et de contrôle appliquées sur chaque station du réseau.
          </p>
          <div className="grid grid-3 res-exp-grid">
            {experiences.map((c) => (
              <article className="card res-exp-card" key={c.title}>
                <span className={'res-exp-icon res-exp-icon--' + c.tile}>{c.icon}</span>
                <h3 className="res-exp-title">{c.title}</h3>
                <p className="res-exp-text">{c.text}</p>
                <div className="media res-exp-media">
                  <img src={c.img} alt={c.alt} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== partenariat foncier ===== */}
      <section className="res-part" id="partenariat">
        <div className="container">
          <div className="res-part-card">
            <div className="res-part-left">
              <span className="res-part-pill">Expansion du Réseau Vision Energy</span>
              <h2 className="res-part-h">Devenez Gérant ou Partenaire Foncier</h2>
              <p className="res-part-p">
                Vous possédez un terrain stratégique le long d'un axe majeur ? Vous êtes un
                entrepreneur aguerri désireux d'exploiter un hub de distribution moderne sous notre
                enseigne ? Rejoignez un réseau camerounais en construction, avec un objectif de 30
                stations d’ici 2028.
              </p>
              <ul className="res-part-list">
                {partPoints.map((p) => (
                  <li key={p.title}>
                    <span className={'res-part-icon res-part-icon--' + p.tone}>{p.icon}</span>
                    <div>
                      <b>{p.title}</b>
                      <p>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="res-part-foot">
                <span>Cellule Développement Foncier :</span>
                <a href="tel:8001010">800 10 10</a>
              </div>
            </div>

            <div className="res-part-right">
              <h2 className="res-form-h">Dossier de Candidature Partenaire</h2>
              <p className="res-form-sub">
                Remplissez ce formulaire préliminaire pour planifier une expertise technique sur
                site.
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <span className="res-flabel">Nature de votre proposition</span>
                <div className="res-radio-row">
                  <label className="res-radio">
                    <input type="radio" name="nature" defaultChecked /> Mise à disposition de
                    terrain nu
                  </label>
                  <label className="res-radio">
                    <input type="radio" name="nature" /> Gérance libre de station existante
                  </label>
                </div>
                <div className="res-form-grid">
                  <div>
                    <span className="res-flabel">Nom complet ou raison sociale</span>
                    <input
                      className="res-in"
                      type="text"
                      placeholder="Ex: Mbarga Pierre / Transports Mbarga SARL"
                    />
                  </div>
                  <div>
                    <span className="res-flabel">Numéro de téléphone</span>
                    <input className="res-in" type="tel" placeholder="+237 6 00 00 00 00" />
                  </div>
                  <div>
                    <span className="res-flabel">Adresse email professionnelle</span>
                    <input className="res-in" type="email" placeholder="contact@domaine.com" />
                  </div>
                  <div>
                    <span className="res-flabel">Localisation du bien / ville</span>
                    <input
                      className="res-in"
                      type="text"
                      placeholder="Ex: Bafoussam – Axe Douala / Yaoundé"
                    />
                  </div>
                  <div>
                    <span className="res-flabel">Superficie estimée (m²)</span>
                    <input className="res-in" type="text" placeholder="Ex: 2500" />
                  </div>
                  <div>
                    <span className="res-flabel">Statut juridique du foncier</span>
                    <input
                      className="res-in"
                      type="text"
                      defaultValue="Titre Foncier (TF) disponible"
                    />
                  </div>
                  <div className="res-form-full">
                    <span className="res-flabel">
                      Détails complémentaires sur le flux routier ou le projet
                    </span>
                    <textarea
                      className="res-in res-in--area"
                      rows={3}
                      placeholder="Précisez la façade sur route (en mètres), les commerces riverains ou vos antécédents dans la distribution…"
                    />
                  </div>
                  <button className="res-submit" type="submit">
                    <Icon.send /> Soumettre le Dossier à la Direction Commerciale
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== aide / contact ===== */}
      <section className="res-help" id="contact">
        <div className="container res-help-inner">
          <span className="icon-tile icon-tile--lav res-help-icon">
            <Icon.help />
          </span>
          <div className="res-help-text">
            <b>Une question sur nos carburants ou votre carte VisionPass ?</b>
            <span>
              Notre centre d'assistance automobilistes et flottes professionnelles est joignable
              7j/7.
            </span>
          </div>
          <div className="btn-row res-help-actions">
            <a className="res-qbtn" href="tel:8001010">
              <Icon.phone /> Service Clientèle
            </a>
            <a className="btn btn--primary" href={href('/produits', 'visionpass')}>
              Découvrir la carte VisionPass
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        title="VisionPass & Solutions Flottes Pro"
        text="Paiement sécurisé sans contact, gestion de carburant par véhicule et remises automatiques en station."
        primary={{ label: 'Découvrir VisionPass', to: '/produits', sec: 'visionpass' }}
        secondary={{ label: 'Espace Entreprise', to: '/produits', sec: 'flottes' }}
      />
    </>
  )
}
