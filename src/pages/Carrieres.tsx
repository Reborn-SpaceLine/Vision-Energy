import { useState } from 'react'
import { href } from '../router'
import { Icon } from '../components/icons'
import { CtaBand } from './Home'
import '../styles/act.css'
import '../styles/carrieres.css'

/* ------------------------------------------------------------------ hero */
function Hero() {
  return (
    <section className="car-page-hero page-hero">
      <div className="car-page-hero-bg" aria-hidden="true" />
      <div className="container">
        <nav className="act-crumb" aria-label="Fil d'Ariane">
          <a href={href('/')}>Accueil</a>
          <Icon.chevR />
          <b>Carrières &amp; Recrutement</b>
        </nav>
        <span className="act-hero-pill car-pill">
          <Icon.briefcase /> Recrutement &amp; Opportunités · Vision Energy
        </span>
        <h1 className="car-page-title">
          Rejoignez une équipe camerounaise{' '}
          <span className="hl--mint">en pleine construction.</span>
        </h1>
        <p className="car-page-lead">
          Ingénieurs, responsables de station et techniciens gaz : rejoignez le développement de notre
          réseau, avec un objectif de 30 stations d’ici 2028.
        </p>
        <div className="btn-row">
          <a className="btn btn--primary btn--lg" href={href('/carrieres', 'offres')}>
            <Icon.briefcase /> Voir les offres ouvertes
          </a>
          <a className="btn btn--ghost btn--lg" href={href('/carrieres', 'candidature')}>
            <Icon.send /> Candidature spontanée
          </a>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------- marque employeur */
const valeurs = [
  {
    icon: <Icon.trendUp />,
    tone: '',
    title: 'Grandir avec le Réseau',
    text: 'Objectif 30 stations d\'ici 2028, centres de remplissage de gaz en construction : chaque ouverture crée des postes à responsabilité pour les équipes en place.',
    link: 'Douala, Bafoussam, Mbouda, Batcham',
    cls: '',
  },
  {
    icon: <Icon.shieldPlus />,
    tone: 'act-tile--gray',
    title: 'Sécurité & Conformité',
    text: 'Procédures strictes en station et sur les centres gaz, plans d\'urgence par site et dossiers réglementaires MINMIDT suivis par nos équipes.',
    link: 'Sécurité en station, non négociable',
    cls: ' car-val-link--dark',
  },
  {
    icon: <Icon.cpu />,
    tone: '',
    title: 'Compétences Techniques',
    text: 'Quatre spécialités internes — lubrifiants, électricité, automatisme et gaz — entretenues par nos ingénieurs et transmises aux équipes de terrain.',
    link: 'Ingénierie camerounaise',
    cls: '',
  },
  {
    icon: <Icon.rosette />,
    tone: 'icon-tile--lav',
    title: 'Ancrage Local',
    text: 'Une équipe camerounaise en poste depuis mars 2023, formée à la conduite de station, au service client et à la manipulation des bouteilles de gaz.',
    link: 'Emplois formés localement',
    cls: ' car-val-link--blue',
  },
]

function MarqueEmployeur() {
  return (
    <section className="section car-intro" id="culture">
      <div className="container">
        <span className="eyebrow car-eyebrow-icon">
          <Icon.users /> Marque employeur &amp; culture d'entreprise
        </span>
        <h2 className="h2 car-intro-title">
          Faites grandir votre talent dans un réseau camerounais en pleine construction.
        </h2>
        <p className="car-intro-lead">
          Ingénieurs, responsables de station et techniciens gaz contribuent à notre croissance au
          Littoral et dans l’Ouest du Cameroun.
        </p>

        <div className="grid grid-4 car-values">
          {valeurs.map((v) => (
            <article className="card card-hover car-val" key={v.title}>
              <span className={`icon-tile ${v.tone}`.trim()}>{v.icon}</span>
              <h3 className="car-val-title">{v.title}</h3>
              <p>{v.text}</p>
              <b className={`car-val-link${v.cls}`}>{v.link}</b>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

/* -------------------------------------------------------- offres d'emploi */
type Job = {
  contract: string
  level: string
  ref: string
  title: string
  city: string
  dept: string
  deptKey: string
  deptIcon: React.ReactNode
  date: string
  text: string
}

const allJobs: Job[] = [
  {
    contract: 'CDI',
    level: 'CONFIRMÉ',
    ref: 'RÉF: CM-GAZ-014',
    title: 'Technicien Centre de Remplissage Gaz',
    city: 'Douala, Cameroun',
    dept: 'Centres de Remplissage & Gaz',
    deptKey: 'gaz',
    deptIcon: <Icon.flame />,
    date: 'Publié il y a 2 jours',
    text: 'Conduite des lignes de remplissage de bouteilles B6 / B12 / B35, contrôles d\'étanchéité et de poids, respect des protocoles de manipulation et tenue des registres de production.',
  },
  {
    contract: 'CDI',
    level: 'CONFIRMÉ',
    ref: 'RÉF: CM-OPS-021',
    title: 'Responsable de Station-Service',
    city: 'Bafoussam, Cameroun',
    dept: 'Exploitation & Réseau Stations',
    deptKey: 'exploitation',
    deptIcon: <Icon.fuel />,
    date: 'Publié il y a 4 jours',
    text: 'Pilotage quotidien de la piste et de la boutique, management de l\'équipe de pompage, suivi des stocks de Super 95, Gasoil et gaz en bouteille, service client fidèle à notre promesse : la qualité à bon prix.',
  },
  {
    contract: 'CDI',
    level: 'SENIOR',
    ref: 'RÉF: CM-TEC-007',
    title: 'Ingénieur Électricité & Automatisme (Réseaux & Pompes)',
    city: 'Douala / Bafoussam, Cameroun',
    dept: 'Direction Technique',
    deptKey: 'technique',
    deptIcon: <Icon.bolt />,
    date: 'Publié il y a 6 jours',
    text: 'Installation, maintenance et supervision des équipements électriques et des automatismes de distribution ; participation à la réhabilitation des îlots et unités de pompage du réseau.',
  },
  {
    contract: 'CDI',
    level: 'INTERMÉDIAIRE',
    ref: 'RÉF: CM-CON-011',
    title: 'Chargé de Conformité & Dossiers Réglementaires',
    city: 'Douala, Cameroun',
    dept: 'Conformité & Affaires Réglementaires',
    deptKey: 'conformite',
    deptIcon: <Icon.shieldPlus />,
    date: 'Publié il y a 1 semaine',
    text: 'Constitution et suivi des études d\'impact, plans d\'urgence et dossiers MINMIDT pour les nouvelles implantations et les mises en conformité, comme celles accompagnées à Tobe et Mbouda.',
  },
  {
    contract: 'CDI',
    level: 'JUNIOR / INTERMÉDIAIRE',
    ref: 'RÉF: CM-COM-018',
    title: 'Commercial Gaz & Lubrifiants (B2B)',
    city: 'Yaoundé / Douala, Cameroun',
    dept: 'Ventes Professionnels & Ménages',
    deptKey: 'commercial',
    deptIcon: <Icon.truck />,
    date: 'Publié il y a 10 jours',
    text: 'Développement des livraisons de gaz et de lubrifiants VisionPro auprès des garages, transporteurs et PME des régions du Littoral et de l\'Ouest, avec suivi des tournées et des contrats.',
  },
]

const deptOptions = [
  { value: 'all', label: 'Tous les départements (5)' },
  { value: 'gaz', label: 'Centres de Remplissage & Gaz' },
  { value: 'exploitation', label: 'Exploitation & Réseau Stations' },
  { value: 'technique', label: 'Direction Technique' },
  { value: 'conformite', label: 'Conformité & Affaires Réglementaires' },
  { value: 'commercial', label: 'Ventes Professionnels & Ménages' },
]

const cityOptions = [
  { value: 'all', label: 'Tous les sites' },
  { value: 'douala', label: 'Douala, Cameroun' },
  { value: 'bafoussam', label: 'Bafoussam, Cameroun' },
  { value: 'yaounde', label: 'Yaoundé / Douala, Cameroun' },
]

function Offres() {
  const [dept, setDept] = useState('all')
  const [city, setCity] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = allJobs.filter((j) => {
    if (dept !== 'all' && j.deptKey !== dept) return false
    if (city !== 'all') {
      const c = city.toLowerCase()
      if (!j.city.toLowerCase().includes(c === 'yaounde' ? 'yaoun' : c)) return false
    }
    if (query) {
      const q = query.toLowerCase()
      if (!j.title.toLowerCase().includes(q) && !j.text.toLowerCase().includes(q) && !j.dept.toLowerCase().includes(q)) return false
    }
    return true
  })

  return (
    <section className="section car-jobs" id="offres">
      <div className="container">
        <div className="sec-head car-jobs-head">
          <div>
            <span className="eyebrow">Postes &amp; opportunités actuelles</span>
            <h2 className="h2 car-jobs-title">Rejoignez Nos Équipes sur le Terrain</h2>
            <p className="car-jobs-lead">
              Découvrez nos postes ouverts et candidatez directement auprès de nos RH.
            </p>
          </div>
          <div className="car-jobs-count">
            Résultats :
            <span className="car-jobs-pill">
              {filtered.length} offre{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Filtres interactifs */}
        <div className="card car-filter">
          <label className="car-field">
            <span>Département</span>
            <select value={dept} onChange={(e) => setDept(e.target.value)}>
              {deptOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <Icon.chevD />
          </label>
          <label className="car-field">
            <span>Ville / Site</span>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              {cityOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <Icon.chevD />
          </label>
          <label className="car-field car-field--search">
            <span>Recherche rapide</span>
            <span className="car-search">
              <Icon.search />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: Gaz, Station, Automatisme, Conformité…"
                aria-label="Recherche rapide"
              />
            </span>
          </label>
        </div>

        {filtered.length > 0 ? (
          <div className="car-list">
            {filtered.map((j) => (
              <article className="card car-job" key={j.ref}>
                <div className="car-job-main">
                  <div className="car-job-tags">
                    <span className="car-tag car-tag--mint">{j.contract}</span>
                    <span className="car-tag">{j.level}</span>
                    <span className="car-tag car-ref">{j.ref}</span>
                  </div>
                  <h3 className="car-job-title">{j.title}</h3>
                  <div className="car-job-meta">
                    <span>
                      <Icon.pin /> {j.city}
                    </span>
                    <span>
                      {j.deptIcon} {j.dept}
                    </span>
                    <span>
                      <Icon.calendar /> {j.date}
                    </span>
                  </div>
                  <p className="car-job-text">{j.text}</p>
                </div>
                <div className="btn-row car-job-cta">
                  <button type="button" className="btn car-job-btn">
                    Détail du poste
                  </button>
                  <a
                    className="btn btn--primary car-job-btn car-job-btn--go"
                    href={href('/carrieres', 'candidature')}
                  >
                    Postuler <Icon.arrowR />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="car-empty">
            <Icon.search />
            <b>Aucune offre ne correspond à vos critères.</b>
            <p>Essayez d'élargir vos filtres ou déposez une candidature spontanée.</p>
            <a className="btn btn--primary" href={href('/carrieres', 'candidature')}>
              Candidature spontanée <Icon.arrowR />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

/* -------------------------------------------------- candidature spontanée */
function Candidature() {
  return (
    <section className="section car-apply" id="candidature">
      <div className="container">
        <article className="card car-form-card">
          <div className="car-form-side">
            <span className="eyebrow">Opportunités futures</span>
            <h2 className="h2 car-form-title">
              Candidature Spontanée &amp; Vivier Talents
            </h2>
            <p className="car-form-lead">
              Vous ne trouvez pas le poste correspondant à votre profil ? Déposez votre dossier.
              Nos recruteurs étudient chaque profil sous 72 heures ouvrées.
            </p>
            <div className="car-recruit">
              <span className="car-recruit-icon">
                <Icon.card />
              </span>
              <div>
                <b>Cellule Recrutement Groupe</b>
                <a href="mailto:direction@vision-energy.cm">direction@vision-energy.cm</a>
                <span>Réponse sous 3 jours ouvrés</span>
                <span>B.P. 11 480, Douala · Cameroun</span>
              </div>
            </div>
            <div className="car-note car-note--gray">
              <span className="car-note-icon car-note-icon--blue">
                <Icon.lock />
              </span>
              <div>
                <b>Protection des Données RH</b>
                <p>
                  Vos informations et CV sont conservés de façon strictement confidentielle et
                  utilisés uniquement pour le recrutement.
                </p>
              </div>
            </div>
            <div className="car-note car-note--mint">
              <span className="car-note-icon">
                <Icon.bolt />
              </span>
              <p>
                Nous recrutons en continu pour nos stations et nos centres de remplissage de gaz,
                ainsi que pour la direction technique : ingénieurs spécialisés en lubrifiants,
                électricité, automatisme et gaz.
              </p>
            </div>
          </div>

          <form
            className="car-form"
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href =
                'mailto:direction@vision-energy.cm?subject=Candidature%20Vision%20Energy'
            }}
          >
            <div className="car-form-grid">
              <label className="car-in">
                <span>Nom et Prénom *</span>
                <input required type="text" placeholder="Ex: Kamga Larissa" />
              </label>
              <label className="car-in">
                <span>Email Professionnel *</span>
                <input required type="email" placeholder="prenom.nom@domaine.cm" />
              </label>
              <label className="car-in">
                <span>Téléphone / WhatsApp *</span>
                <input required type="tel" placeholder="+237 6 00 00 00 00" />
              </label>
              <label className="car-in">
                <span>Ville d'affectation souhaitée *</span>
                <select required defaultValue="">
                  <option value="" disabled>
                    Sélectionnez une ville
                  </option>
                  <option>Douala, Cameroun</option>
                  <option>Bafoussam, Cameroun</option>
                  <option>Mbouda / Batcham, Cameroun</option>
                  <option>Yaoundé / Douala, Cameroun</option>
                </select>
              </label>
              <label className="car-in car-in--full">
                <span>Métier / Domaine ciblé *</span>
                <select required defaultValue="">
                  <option value="" disabled>
                    Choisissez votre expertise principale
                  </option>
                  <option>Exploitation de stations-service</option>
                  <option>Centres de remplissage de gaz &amp; bouteilles</option>
                  <option>Conformité &amp; dossiers réglementaires</option>
                  <option>
                    Ingénierie lubrifiants, électricité, automatisme &amp; gaz
                  </option>
                  <option>Ventes gaz &amp; lubrifiants aux professionnels</option>
                </select>
              </label>
              <label className="car-in car-in--full">
                <span>Curriculum Vitae (PDF, DOCX max 10 Mo) *</span>
                <span className="car-upload">
                  <Icon.uploadCloud />
                  <b>
                    Glissez-déposez votre CV ici ou <u>parcourez vos fichiers</u>
                  </b>
                  <span>Formats acceptés : PDF ou DOCX jusqu'à 10 Mo</span>
                  <input type="file" accept=".pdf,.doc,.docx" />
                </span>
              </label>
              <label className="car-in car-in--full">
                <span>Message de motivation ou résumé de parcours</span>
                <textarea
                  rows={4}
                  placeholder="Présentez brièvement vos réalisations majeures et ce qui vous motive à rejoindre Vision Energy…"
                />
              </label>
            </div>
            <button type="submit" className="btn btn--primary car-submit">
              <Icon.send /> Transmettre ma candidature aux équipes RH
            </button>
          </form>
        </article>
      </div>
    </section>
  )
}

/* ------------------------------------------------------- processus de sélection */
const steps = [
  {
    n: '01',
    tone: '',
    title: 'Candidature en Ligne',
    text: 'Étude de votre CV et de l\'adéquation technique sous 72h ouvrées par la cellule RH.',
  },
  {
    n: '02',
    tone: '',
    title: 'Entretien RH Découverte',
    text: 'Échange en visio ou présentiel de 45 min axé sur vos motivations et valeurs partagées.',
  },
  {
    n: '03',
    tone: ' car-step--blue',
    title: 'Cas Métier & Sécurité',
    text: 'Mise en situation concrète avec le responsable d\'exploitation et le chargé de conformité du site.',
  },
  {
    n: '04',
    tone: '',
    title: 'Rencontre & Intégration',
    text: 'Validation finale par la Direction Générale et remise de l\'offre d\'embauche personnalisée.',
  },
]

function Processus() {
  return (
    <section className="section car-process">
      <div className="container">
        <div className="sec-head sec-head--stack">
          <span className="eyebrow eyebrow--center">Transparence RH</span>
          <h2 className="h2 car-proc-title">Notre Processus de Sélection en 4 Étapes</h2>
          <p className="car-proc-lead">
            Un parcours clair, structuré et bienveillant pour évaluer le potentiel de chacun.
          </p>
        </div>
        <div className="grid grid-4 car-steps">
          {steps.map((s) => (
            <article className={`card car-step${s.tone}`} key={s.n}>
              <b className="car-step-n">{s.n}</b>
              <h3 className="car-step-title">{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ page */
export default function CarrieresPage() {
  return (
    <>
      <Hero />
      <MarqueEmployeur />
      <Offres />
      <Candidature />
      <Processus />
      <CtaBand
        title="Découvrez le Groupe Vision Energy"
        text="Gouvernance, valeurs et trajectoire d'un acteur camerounais en pleine expansion."
        primary={{ label: 'Le Groupe', to: '/groupe' }}
        secondary={{ label: 'Nos Métiers', to: '/metiers' }}
      />
    </>
  )
}
