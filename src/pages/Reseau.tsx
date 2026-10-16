import '../styles/res.css'
import { Icon } from '../components/icons'
import { href } from '../router'
import { CtaBand } from './Home'

/* --------------------------------------------------------------- hero */
const services = [
  { icon: <Icon.sliders />, label: 'Tout afficher', on: true },
  { icon: <Icon.drop />, label: 'Lavage Express' },
  { icon: <Icon.shop />, label: 'Boutique V-Shop' },
  { icon: <Icon.bolt />, label: 'Borne DC Ultra' },
  { icon: <Icon.flame />, label: 'Gaz Bouteille' },
  { icon: <Icon.nfc />, label: 'VisionPass & Wave/OM' },
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
    tag: 'Flagship Hub',
    tone: 'green',
    dot: true,
    status: 'Ouvert 24/7',
    name: 'Station Bonanjo Océan',
    addr: 'Avenue de Verdun, Bonanjo, Douala',
    lead: true,
    prices: [
      { label: 'Super 95', value: '990', unit: 'CFA/L' },
      { label: 'Gazole Pro', value: '755', unit: 'CFA/L', tone: 'green' },
      { label: 'Electrique', value: '150', unit: 'kW DC', tone: 'blue' },
    ],
    svcs: [
      { icon: <Icon.drop />, label: 'Tunnel Jet' },
      { icon: <Icon.shop />, label: 'V-Market & Café' },
      { icon: <Icon.bolt />, label: '2 Bornes DC' },
      { icon: <Icon.card />, label: 'GAB 24/7' },
      { icon: <Icon.wifi />, label: 'Wifi Gratuit' },
    ],
    dist: 'À 1.4 km de vous',
    time: '4 min',
  },
  {
    tag: 'Axe Autoroutier',
    tone: 'blue',
    status: 'Ouverture enregistrée',
    name: 'Station Tobe – Poumougne',
    addr: "Axe Douala – Yaoundé, Poumougne, Région de l'Ouest",
    prices: [
      { label: 'Super 95', value: '990', unit: 'CFA/L' },
      { label: 'Gazole Pro', value: '755', unit: 'CFA/L', tone: 'green' },
      { label: 'Gaz Bout.', value: 'En stock' },
    ],
    svcs: [
      { icon: <Icon.flame />, label: 'Gaz B6 / B12' },
      { icon: <Icon.shop />, label: 'Boutique 24h' },
      { icon: <Icon.gauge />, label: 'Gonflage Pneus' },
      { icon: <Icon.nfc />, label: 'VisionPass' },
    ],
    dist: 'À 4.8 km de vous',
    time: '9 min',
  },
  {
    tag: 'Zone Portuaire & Fret',
    tone: 'gray',
    status: 'Ouvert 24/7',
    name: 'Station Port – Bonabéri',
    addr: 'Boulevard du Port, Port Autonome, Bonabéri, Douala',
    prices: [
      { label: 'Super 95', value: '990', unit: 'CFA/L' },
      { label: 'Gazole HD', value: '755', unit: 'CFA/L', tone: 'green' },
      { label: 'Lubrifiant', value: 'Pro 15W40' },
    ],
    svcs: [
      { icon: <Icon.truck />, label: 'Ravitaillement Flottes' },
      { icon: <Icon.ship />, label: 'Comptoir Vrac' },
      { icon: <Icon.card />, label: 'VisionPass Pro' },
    ],
    dist: 'À 6.2 km de vous',
    time: '12 min',
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
    title: 'Pisteurs Dédiés & Formés',
    text: "Accueil chaleureux, contrôle visuel de pression de vos pneumatiques, nettoyage gratuit du pare-brise et vérification des niveaux d'huile sur simple demande.",
    img: '/images/res-a.jpg',
    alt: 'Pisteur Vision Energy au service d’un client en station',
  },
  {
    icon: <Icon.shield />,
    tile: 'blue',
    title: 'Sécurité Nocturne Renforcée',
    text: "Éclairage LED à haute intensité sur 100% de la piste, présence constante d'agents certifiés et surveillance vidéo HD connectée au centre opérationnel 24h/24.",
    img: '/images/res-b.jpg',
    alt: 'Station Vision Energy éclairée de nuit',
  },
  {
    icon: <Icon.shop />,
    tile: 'dark',
    title: 'Boutiques V-Shop & Espaces Café',
    text: 'Café fraîchement moulu, viennoiseries du matin, sélection soignée de produits de dépannage, sanitaires inspectés toutes les 30 minutes et wifi très haut débit.',
    img: '/images/res-c.jpg',
    alt: 'Intérieur de boutique V-Shop Vision Energy',
  },
]

/* --------------------------------------------------------- partenariat */
const partPoints = [
  {
    icon: <Icon.check />,
    tone: 'green',
    title: 'Financement & Aménagement',
    text: 'Prise en charge intégrale des cuves double paroi, auvents et totems certifiés HSE.',
  },
  {
    icon: <Icon.trendUp />,
    tone: 'blue',
    title: 'Rentabilité & Approvisionnement Garanti',
    text: "Zéro rupture de stock grâce à notre flotte logistique dédiée et dépôts maritimes propres.",
  },
  {
    icon: <Icon.grad />,
    tone: 'green',
    title: 'Académie Vision Energy',
    text: 'Cycles complets de formation pour vos gérants, caissiers et techniciens de piste.',
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
                <Icon.share /> Maillage Énergétique Régional • 140+ Stations
              </span>
              <h1 className="res-hero-title">
                Trouvez une Station <span className="res-hero-mint">Vision Energy</span> à
                Proximité.
              </h1>
              <p className="res-hero-lead">
                Carburants haute performance additivés, bornes de recharge ultra-rapides, boutiques
                gourmandes et services de conciergerie automobile en continu.
              </p>
            </div>
            <div className="res-hero-stats">
              <div className="res-stat">
                <b>99.8%</b>
                <span>Disponibilité Carburant</span>
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
                    <option>Recharge électrique</option>
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
                <p className="res-st-count">3 stations identifiées sur votre périmètre</p>
              </div>
              <span className="res-live">Réseau Temps Réel</span>
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
              <Icon.pin /> Réseau en déploiement accéléré : ouvertures déjà enregistrées à Tobe /
              Poumougne, implantations à Bafoussam (centre de remplissage de gaz) — objectif
              plusieurs dizaines de stations d'ici 2028. Siège : B.P. 11 480, Douala · Cameroun.
            </p>
          </div>

          <div className="res-map">
            <img
              src="/images/res-map.jpg"
              alt="Carte des stations Vision Energy dans la région de Douala"
            />
            <div className="res-map-card">
              <span className="res-map-icon">
                <Icon.rosette />
              </span>
              <div>
                <span className="res-map-k">Engagement Qualité Totale</span>
                <h3>Contrôle Métrologique &amp; Pureté 100% Garanti</h3>
                <p>Pompes électroniques certifiées trimestriellement par les services de l'État.</p>
              </div>
              <a className="res-tariff" href={href('/produits', 'carburants')}>
                <Icon.download /> Grille Tarifaire Officielle
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
            Chez Vision Energy, faire le plein n'est plus une contrainte. Nos pistes obéissent aux
            protocoles HSE les plus stricts pour votre tranquillité d'esprit.
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
                enseigne ? Rejoignez le réseau à la plus forte croissance de la région.
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
                      placeholder="Ex: Saliou Diallo / Diallo Logistique"
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
              Consulter la FAQ Réseau
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
