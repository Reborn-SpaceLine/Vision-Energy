import { useEffect, useState } from 'react'
import { href, parseHash } from '../router'
import { Icon } from '../components/icons'
import { CtaBand } from './Home'
import '../styles/act.css'

/* ------------------------------------------------------------- icônes locales */
function IconHome() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" aria-hidden="true">
      <path d="M3.5 10.5 12 3.5l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5.5h4V20" />
    </svg>
  )
}

function IconQuote() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true">
      <path d="M4 17.5c0-4.6 2.4-8 6.6-9.6l.9 1.8c-2.4 1.1-3.7 2.6-3.9 4.3.3-.1.7-.2 1.1-.2 1.7 0 3 1.2 3 2.9 0 1.8-1.5 3.1-3.5 3.1C5.6 19.8 4 19 4 17.5Zm10.2 0c0-4.6 2.4-8 6.6-9.6l.9 1.8c-2.4 1.1-3.7 2.6-3.9 4.3.3-.1.7-.2 1.1-.2 1.7 0 3 1.2 3 2.9 0 1.8-1.5 3.1-3.5 3.1-2.6 0-4.2-.8-4.2-2.3Z" />
    </svg>
  )
}

/* ---------------------------------------------------------------------- hero */
const heroStats = [
  { icon: <Icon.fuel />, value: '6', label: 'Stations en exploitation', sub: 'Douala, Bafoussam, Batcham, Mbouda, Tobe', tone: '' },
  { icon: <Icon.flame />, value: '2', label: 'Centres de remplissage de gaz', sub: 'Programme Douala & Bafoussam', tone: 'icon-tile--lav' },
  { icon: <Icon.tag />, value: '30', label: 'Stations visées d’ici 2028', sub: 'Cap de développement du réseau', tone: '' },
  { icon: <Icon.rosette />, value: '4', label: 'Spécialités d’ingénierie', sub: 'Lubrifiants, électricité, automatisme & gaz', tone: 'act-tile--gray' },
]

function Hero() {
  return (
    <section className="act-hero">
      <div className="container">
        <nav className="act-crumb" aria-label="Fil d'Ariane">
          <IconHome />
          <a href={href('/')}>Accueil</a>
          <i>/</i>
          <b>Actualités &amp; Carrières</b>
        </nav>
        <span className="act-hero-pill">
          <Icon.megaphone /> Espace Presse &amp; Recrutement
        </span>
        <h1 className="act-hero-title">
          L’Actualité du Réseau &amp; Rejoignez l’Aventure <span className="hl">Vision Energy</span>
        </h1>
        <p className="act-hero-lead">
          Suivez les ouvertures de nos stations-service, l’avancement de nos centres de remplissage de
          gaz à Douala et Bafoussam, et découvrez nos offres d’emploi pour rejoindre une équipe
          camerounaise en pleine construction.
        </p>
        <div className="btn-row act-hero-cta">
          <a className="btn btn--primary" href={href('/actualites')}>
            <Icon.calendar /> Toutes les actualités
          </a>
          <a className="btn btn--outline" href={href('/carrieres')}>
            <Icon.briefcase /> Espace Recrutement &amp; Offres
          </a>
          <a className="btn btn--outline" href={href('/actualites', 'presse')}>
            <Icon.doc /> Rapports &amp; Médias
          </a>
        </div>
        <div className="act-stats">
          {heroStats.map((s) => (
            <div className="act-stat" key={s.value}>
              <span className={`icon-tile ${s.tone}`.trim()}>{s.icon}</span>
              <div>
                <b>{s.value}</b>
                <span>{s.label}</span>
                <em>{s.sub}</em>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------- actualités */
const newsTabs = [
  { label: 'Tous (5)', on: true },
  { label: 'Réseau & Ouvertures (3)' },
  { label: 'Gaz & Centres (1)' },
  { label: 'Conformité (1)' },
]

const newsCards = [
  {
    img: '/images/station-aerial.jpg',
    date: '28 Avril 2026',
    read: '3 min',
    title: 'Inauguration officielle de la station de Mbouda',
    text: 'Ouverte le 28 avril 2026 dans le département des Bamboutos, la station rejoint le maillage de l’Ouest engagé depuis Batcham, avec carburants, gaz en bouteille et lubrifiants…',
    tone: '',
  },
  {
    img: '/images/station-clean.png',
    date: '15 Janvier 2026',
    read: '5 min',
    title: 'Batcham ouverte sur l’axe Mbouda – Batcham',
    text: 'Treize mois après la mise en conformité de Tobe, notre réseau s’étend sur un nouvel axe de la Région de l’Ouest, confirmant le cap de 30 stations d’ici 2028…',
    tone: ' link-arrow--blue',
  },
  {
    img: '/images/station-modern-2.png',
    date: '27 Juin 2025',
    read: '4 min',
    title: 'Station de Tobe (Poumougne) : accompagnement vers la mise en conformité',
    text: 'Étude d’impact, plan d’urgence et dossier technique déposés auprès des services compétents du MINMIDT : la station de Tobe, sur l’axe Douala – Yaoundé, a été accompagnée jusqu’à…',
    tone: '',
  },
]

function News() {
  return (
    <section className="section act-news" id="actualites">
      <div className="container">
        <div className="sec-head act-news-head">
          <div>
            <span className="eyebrow eyebrow--dot">Actualités du réseau Vision Energy</span>
            <h2 className="h2 act-news-title">
              Ouvertures de Stations &amp; Étapes Réglementaires
            </h2>
            <p className="act-news-lead">
              Découvrez nos avancées sur le terrain : mises en service, chantiers de centres de
              remplissage de gaz et dossiers de conformité déposés auprès des autorités.
            </p>
          </div>
          <div className="act-tabs" role="group" aria-label="Filtrer les actualités par thème">
            {newsTabs.map((t) => (
              <button type="button" key={t.label} className={`act-tab${t.on ? ' act-tab--on' : ''}`} aria-pressed={t.on}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <article className="card card--pad0 act-feat">
          <div className="act-feat-media">
            <img src="/images/station-panoramic.jpg" alt="Station-service Vision Energy en exploitation" />
          </div>
          <div className="act-feat-body">
            <div className="act-feat-meta">
              <span>
                <Icon.calendar /> 15 Janvier 2026
              </span>
              <i>•</i>
              <span>
                <Icon.clock /> 4 min de lecture
              </span>
            </div>
            <h3 className="act-feat-title">
              Cap 30 stations d’ici 2028 : le réseau poursuit sa croissance entre Littoral et Ouest.
            </h3>
            <p className="act-feat-text">
              Ouverte sur l’axe Mbouda – Batcham, notre nouvelle station prolonge le maillage engagé
              depuis Bonamoussadi (Douala), premier repère du réseau depuis 2021. En appui, le programme
              industriel de construction et de réhabilitation de centres de remplissage de gaz se
              déploie à Douala et à Bafoussam, pour rapprocher le GPL ménager des familles et tenir
              notre promesse : la qualité à bon prix.
            </p>
            <div className="act-tags">
              <span>Réseau de stations</span>
              <span>Gaz domestique</span>
              <span>Qualité à bon prix</span>
            </div>
            <div className="act-feat-cta">
              <a className="btn btn--primary" href={href('/actualites')}>
                Lire le communiqué complet <Icon.arrowR />
              </a>
              <button type="button" className="act-share" aria-label="Partager le communiqué">
                <Icon.share />
              </button>
            </div>
          </div>
        </article>

        <div className="grid grid-3 act-cards">
          {newsCards.map((c) => (
            <article className="card card--pad0 card-hover act-card" key={c.title}>
              <div className="act-card-media">
                <img src={c.img} alt="" />
              </div>
              <div className="act-card-body">
                <div className="news-meta">
                  <span>
                    <Icon.calendar /> {c.date}
                  </span>
                  <i>•</i>
                  <span>
                    <Icon.clock /> {c.read}
                  </span>
                </div>
                <h3 className="act-card-title">{c.title}</h3>
                <p className="act-card-text">{c.text}</p>
                <a className={`link-arrow${c.tone}`} href={href('/actualites')}>
                  Consulter l’article <Icon.arrowR />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="act-press" id="presse">
          <div className="icon-tile act-press-icon">
            <Icon.folderStar />
          </div>
          <div className="act-press-text">
            <span className="eyebrow eyebrow--mint">Relations médias &amp; journalistes</span>
            <h3 className="act-press-title">Espace Presse &amp; Documentation 2026</h3>
            <p>
              Logo institutionnel, photos de nos stations et repères du réseau : nous communiquons les
              éléments presse sur demande, en précisant le support et le délai souhaités.
            </p>
          </div>
          <div className="btn-row act-press-cta">
            <a
              className="btn btn--primary act-press-btn"
              href="mailto:direction@vision-energy.cm?subject=Demande%20de%20kit%20m%C3%A9dia"
            >
              <Icon.mail /> Demander le kit média
            </a>
            <a className="btn act-press-btn2" href={href('/reseau', 'contact')}>
              <Icon.phone /> Contacter le réseau
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------- carrières */
const values = [
  {
    icon: <Icon.trendUp />,
    tone: '',
    title: 'Grandir avec le Réseau',
    text: 'Objectif 30 stations d’ici 2028, centres de remplissage de gaz en construction : chaque ouverture crée des postes à responsabilité pour les équipes en place.',
    link: 'Douala, Bafoussam, Mbouda, Batcham',
    cls: '',
  },
  {
    icon: <Icon.shieldPlus />,
    tone: 'act-tile--gray',
    title: 'Sécurité & Conformité',
    text: 'Procédures strictes en station et sur les centres gaz, plans d’urgence par site et dossiers réglementaires MINMIDT suivis par nos équipes.',
    link: 'Sécurité en station, non négociable',
    cls: ' act-val-link--dark',
  },
  {
    icon: <Icon.leaf />,
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
    cls: ' act-val-link--blue',
  },
]

const jobs = [
  {
    contract: 'CDI',
    level: 'CONFIRMÉ',
    ref: 'RÉF: CM-GAZ-014',
    title: 'Technicien Centre de Remplissage Gaz',
    city: 'Douala, Cameroun',
    dept: 'Centres de Remplissage & Gaz',
    deptIcon: <Icon.flame />,
    date: 'Publié il y a 2 jours',
    text: 'Conduite des lignes de remplissage de bouteilles B6 / B12 / B35, contrôles d’étanchéité et de poids, respect des protocoles de manipulation et tenue des registres de production.',
  },
  {
    contract: 'CDI',
    level: 'CONFIRMÉ',
    ref: 'RÉF: CM-OPS-021',
    title: 'Responsable de Station-Service',
    city: 'Bafoussam, Cameroun',
    dept: 'Exploitation & Réseau Stations',
    deptIcon: <Icon.fuel />,
    date: 'Publié il y a 4 jours',
    text: 'Pilotage quotidien de la piste et de la boutique, management de l’équipe de pompage, suivi des stocks de Super 95, Gasoil et gaz en bouteille, service client fidèle à notre promesse : la qualité à bon prix.',
  },
  {
    contract: 'CDI',
    level: 'SENIOR',
    ref: 'RÉF: CM-TEC-007',
    title: 'Ingénieur Électricité & Automatisme (Réseaux & Pompes)',
    city: 'Douala / Bafoussam, Cameroun',
    dept: 'Direction Technique',
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
    deptIcon: <Icon.shieldPlus />,
    date: 'Publié il y a 1 semaine',
    text: 'Constitution et suivi des études d’impact, plans d’urgence et dossiers MINMIDT pour les nouvelles implantations et les mises en conformité, comme celles accompagnées à Tobe et Mbouda.',
  },
  {
    contract: 'CDI',
    level: 'JUNIOR / INTERMÉDIAIRE',
    ref: 'RÉF: CM-COM-018',
    title: 'Commercial Gaz & Lubrifiants (B2B)',
    city: 'Yaoundé / Douala, Cameroun',
    dept: 'Ventes Professionnels & Ménages',
    deptIcon: <Icon.truck />,
    date: 'Publié il y a 10 jours',
    text: 'Développement des livraisons de gaz et de lubrifiants VisionPro auprès des garages, transporteurs et PME des régions du Littoral et de l’Ouest, avec suivi des tournées et des contrats.',
  },
]

const steps = [
  { n: '01', tone: '', title: 'Candidature en Ligne', text: 'Étude de votre CV et de l’adéquation technique sous 72h ouvrées par la cellule RH.' },
  { n: '02', tone: '', title: 'Entretien RH Découverte', text: 'Échange en visio ou présentiel de 45 min axé sur vos motivations et valeurs partagées.' },
  { n: '03', tone: ' act-step--blue', title: 'Cas Métier & Sécurité', text: 'Mise en situation concrète avec le responsable d’exploitation et le chargé de conformité du site.' },
  { n: '04', tone: '', title: 'Rencontre & Intégration', text: 'Validation finale par la Direction Générale et remise de l’offre d’embauche personnalisée.' },
]

function Careers() {
  return (
    <div id="carrieres">
      <section className="section car-intro">
        <div className="container">
          <span className="eyebrow car-eyebrow-icon">
            <Icon.users /> Marque employeur &amp; culture d’entreprise
          </span>
          <h2 className="h2 car-intro-title">
            Faites grandir votre talent dans un réseau camerounais en pleine construction.
          </h2>
          <p className="car-intro-lead">
            Chez Vision Energy, nous formons une équipe d’ingénieurs, de responsables de station et de
            techniciens gaz engagés à distribuer énergie et services de proximité, en sécurité, à travers
            le Littoral et l’Ouest du Cameroun.
          </p>

          <div className="grid grid-4 car-values">
            {values.map((v) => (
              <article className="card card-hover car-val" key={v.title}>
                <span className={`icon-tile ${v.tone}`.trim()}>{v.icon}</span>
                <h3 className="car-val-title">{v.title}</h3>
                <p>{v.text}</p>
                <b className={`car-val-link${v.cls}`}>{v.link}</b>
              </article>
            ))}
          </div>

          <article className="card car-testi">
            <div className="car-testi-media">
              <div className="car-testi-photo">
                <img src="/images/station-ve-real.jpg" alt="Équipe Vision Energy en station" />
              </div>
              <span className="car-testi-badge">
                <IconQuote /> Équipes en poste depuis 2023
              </span>
            </div>
            <div className="car-testi-body">
              <span className="eyebrow car-eyebrow-icon">
                <Icon.userCheck /> Vu du terrain
              </span>
              <blockquote className="car-quote">
                « Chaque station que nous ouvrons ou remettons aux normes est un métier complet :
                préparer le site, former l’équipe de piste, tenir la qualité du produit et rassurer le
                client à chaque visite. Le réseau grandit vite, et les responsabilités suivent. »
              </blockquote>
              <b className="car-name">Exploitation Vision Energy</b>
              <span className="car-role">Équipes stations &amp; centres de remplissage de gaz</span>
              <span className="car-committee">Douala · Bafoussam · Mbouda · Batcham</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section car-jobs">
        <div className="container">
          <div className="sec-head car-jobs-head">
            <div>
              <span className="eyebrow">Postes &amp; opportunités actuelles</span>
              <h2 className="h2 car-jobs-title">Rejoignez Nos Équipes sur le Terrain</h2>
              <p className="car-jobs-lead">
                Découvrez nos postes ouverts et candidatez directement en ligne auprès de nos RH.
              </p>
            </div>
            <div className="car-jobs-count">
              Affichage :<span className="car-jobs-pill">5 Offres Ouvertes</span>
            </div>
          </div>

          <div className="card car-filter">
            <label className="car-field">
              <span>Filtrer par Département</span>
              <select defaultValue="all">
                <option value="all">Tous les Départements (5)</option>
                <option>Centres de Remplissage &amp; Gaz</option>
                <option>Exploitation &amp; Réseau Stations</option>
                <option>Direction Technique</option>
                <option>Conformité &amp; Affaires Réglementaires</option>
                <option>Ventes Professionnels &amp; Ménages</option>
              </select>
              <Icon.chevD />
            </label>
            <label className="car-field">
              <span>Filtrer par Ville / Localisation</span>
              <select defaultValue="all">
                <option value="all">Tous les Sites (Douala, Bafoussam)</option>
                <option>Douala, Cameroun</option>
                <option>Bafoussam, Cameroun</option>
                <option>Douala / Bafoussam, Cameroun</option>
                <option>Yaoundé / Douala, Cameroun</option>
              </select>
              <Icon.chevD />
            </label>
            <label className="car-field car-field--search">
              <span>Recherche Rapide</span>
              <span className="car-search">
                <Icon.search />
                <input type="search" placeholder="Ex: Gaz, Station, Automatisme, Conformité…" aria-label="Recherche rapide" />
              </span>
            </label>
          </div>

          <div className="car-list">
            {jobs.map((j) => (
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
                  <a className="btn btn--primary car-job-btn car-job-btn--go" href={href('/carrieres', 'candidature')}>
                    Postuler <Icon.arrowR />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section car-apply" id="candidature">
        <div className="container">
          <article className="card car-form-card">
            <div className="car-form-side">
              <span className="eyebrow">Opportunités futures</span>
              <h2 className="h2 car-form-title">Candidature Spontanée &amp; Vivier Talents</h2>
              <p className="car-form-lead">
                Vous ne trouvez pas le poste correspondant à votre profil ? Déposez votre dossier. Nos
                recruteurs étudient chaque profil sous 72 heures ouvrées.
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
                  <p>Vos informations et CV sont conservés de façon strictement confidentielle et utilisés uniquement pour le recrutement, conformément à la réglementation camerounaise sur la protection des données personnelles.</p>
                </div>
              </div>
              <div className="car-note car-note--mint">
                <span className="car-note-icon">
                  <Icon.bolt />
                </span>
                <p>
                  Nous recrutons en continu pour nos stations et nos centres de remplissage de gaz en
                  construction, ainsi que pour la direction technique : ingénieurs spécialisés en
                  lubrifiants, électricité, automatisme et gaz.
                </p>
              </div>
            </div>

            <form className="car-form" onSubmit={(e) => e.preventDefault()}>
              <div className="car-form-grid">
                <label className="car-in">
                  <span>Nom et Prénom *</span>
                  <input type="text" placeholder="Ex: Kamga Larissa" />
                </label>
                <label className="car-in">
                  <span>Email Professionnel *</span>
                  <input type="email" placeholder="prenom.nom@domaine.cm" />
                </label>
                <label className="car-in">
                  <span>Téléphone / WhatsApp *</span>
                  <input type="tel" placeholder="+237 6 00 00 00 00" />
                </label>
                <label className="car-in">
                  <span>Ville d’affectation souhaitée *</span>
                  <select defaultValue="">
                    <option value="">Sélectionnez une ville</option>
                    <option>Douala, Cameroun</option>
                    <option>Bafoussam, Cameroun</option>
                    <option>Mbouda / Batcham, Cameroun</option>
                    <option>Yaoundé / Douala, Cameroun</option>
                  </select>
                </label>
                <label className="car-in car-in--full">
                  <span>Métier / Domaine ciblé *</span>
                  <select defaultValue="">
                    <option value="">Choisissez votre expertise principale</option>
                    <option>Exploitation de stations-service</option>
                    <option>Centres de remplissage de gaz &amp; bouteilles</option>
                    <option>Conformité &amp; dossiers réglementaires</option>
                    <option>Ingénierie lubrifiants, électricité, automatisme &amp; gaz</option>
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
                    <span>Formats acceptés : PDF ou DOCX jusqu’à 10 Mo</span>
                    <input type="file" accept=".pdf,.doc,.docx" />
                  </span>
                </label>
                <label className="car-in car-in--full">
                  <span>Message de motivation ou résumé de parcours</span>
                  <textarea rows={4} placeholder="Présentez brièvement vos réalisations majeures et ce qui vous motive à rejoindre Vision Energy…" />
                </label>
              </div>
              <button type="submit" className="btn btn--primary car-submit">
                <Icon.send /> Transmettre ma candidature aux équipes RH
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="section car-process">
        <div className="container">
          <div className="sec-head sec-head--stack">
            <span className="eyebrow eyebrow--center">Transparence RH</span>
            <h2 className="h2 car-proc-title">Notre Processus de Sélection en 4 Étapes</h2>
            <p className="car-proc-lead">Un parcours clair, structuré et bienveillant pour évaluer le potentiel de chacun.</p>
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
    </div>
  )
}

/* ---------------------------------------------------------------------- page */
export default function ActualitesPage() {
  const [route, setRoute] = useState(() => parseHash())

  useEffect(() => {
    const onChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  useEffect(() => {
    if (route.path !== '/carrieres' || route.section) return
    const t = window.setTimeout(() => {
      document.getElementById('carrieres')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(t)
  }, [route.path, route.section])

  return (
    <>
      <Hero />
      <News />
      <Careers />
      <CtaBand />
    </>
  )
}
