import { useEffect, useState } from 'react'
import { href } from '../router'
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
  { icon: <Icon.briefcase />, value: '15+', label: 'Nouveaux Postes Ouverts', sub: 'Douala, Bafoussam, Kribi', tone: '' },
  { icon: <Icon.users />, value: '450+', label: 'Collaborateurs Panafriquains', sub: 'Talents ingénierie & flux', tone: 'icon-tile--lav' },
  { icon: <Icon.tag />, value: '94%', label: 'Taux de Rétention Groupe', sub: 'Engagement & bien-être', tone: '' },
  { icon: <Icon.rosette />, value: '100%', label: 'Formation Certifiée', sub: 'Normes HSE & Leadership', tone: 'act-tile--gray' },
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
          Suivez nos derniers développements régionaux, innovations durables, communiqués de presse et
          découvrez nos opportunités d’emploi pour bâtir l’énergie de demain en Afrique.
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
  { label: 'Tous (24)', on: true },
  { label: 'Réseau & Ouvertures (8)' },
  { label: 'Transition Énergétique (6)' },
  { label: 'Communiqués (5)' },
  { label: 'B2B & Partenariats (5)' },
]

const newsCards = [
  {
    img: '/images/act-n1.jpg',
    date: '14 Octobre 2025',
    read: '3 min',
    title: 'Déploiement de 40 nouvelles bornes de recharge ultra-rapide E-Vision sur l’axe Douala–Yaoundé',
    text: 'Un investissement structurant pour fiabiliser la première autoroute décarbonée de la sous-région, alimentée à 45% par des ombrières…',
    tone: '',
  },
  {
    img: '/images/act-n2.jpg',
    date: '02 Octobre 2025',
    read: '5 min',
    title: 'Vision Energy signe un partenariat d’approvisionnement en VLSFO avec les armateurs d’Afrique de l’Ouest',
    text: 'Accords pluriannuels garantissant la fourniture en fioul marin à très basse teneur en soufre conforme aux normes IMO 2020 sur les ports de…',
    tone: ' link-arrow--blue',
  },
  {
    img: '/images/act-n3.jpg',
    date: '19 Septembre 2025',
    read: '4 min',
    title: 'Lancement de la gamme Lubrifiants VisionPro™ SynthTech certifiée API SP pour climats tropicaux',
    text: 'Formulée pour résister aux contraintes de température extrême et de poussière sévère, notre nouvelle gamme réduit la consommation…',
    tone: '',
  },
]

function News() {
  return (
    <section className="section act-news" id="actualites">
      <div className="container">
        <div className="sec-head act-news-head">
          <div>
            <span className="eyebrow eyebrow--dot">Magazine d’information énergétique</span>
            <h2 className="h2 act-news-title">
              Les Récentes Réalisations &amp; Événements
            </h2>
            <p className="act-news-lead">
              Découvrez nos avancées industrielles, investissements logistiques et engagements RSE à
              travers nos dépêches certifiées.
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
            <img src="/images/act-hero.jpg" alt="Inauguration du hub multi-énergies" />
          </div>
          <div className="act-feat-body">
            <div className="act-feat-meta">
              <span>
                <Icon.calendar /> 28 Octobre 2025
              </span>
              <i>•</i>
              <span>
                <Icon.clock /> 4 min de lecture
              </span>
            </div>
            <h3 className="act-feat-title">
              Inauguration du Hub Multi-Énergies de Kribi Deep Sea : Vision Energy renforce son corridor
              logistique et ses bornes ultra-rapides.
            </h3>
            <p className="act-feat-text">
              Ce complexe multimodal intègre le premier corridor de recharge haute puissance E-Vision pour
              le fret routier, 12 pompes haut débit à flux régulé et une station de soutes pour la desserte
              portuaire maritime, consolidant le transit vers le Bassin du Congo. En appui, le réseau de
              stations-service s’accélère : ouvertures à Tobe / Poumougne et Bafoussam, cap sur plusieurs
              dizaines de sites d’ici 2028 et centres de remplissage de gaz à Douala et Bafoussam.
            </p>
            <div className="act-tags">
              <span>Corridors Logistiques</span>
              <span>Mobilité Électrique</span>
              <span>Soutes Maritimes</span>
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
            <h3 className="act-press-title">Espace Presse Officiel 2025</h3>
            <p>
              Téléchargez notre kit média complet : logos institutionnels haute résolution, photos libres de
              droits de nos infrastructures, dossier stratégique et charte d’utilisation de marque.
            </p>
          </div>
          <div className="btn-row act-press-cta">
            <a className="btn btn--primary act-press-btn" href={href('/actualites', 'presse')}>
              <Icon.download /> Télécharger le Kit Média (.ZIP 48Mo)
            </a>
            <a className="btn act-press-btn2" href={href('/groupe', 'contact')}>
              <Icon.mail /> Contact Presse Groupe
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
    title: 'Parcours d’Évolution Rapide',
    text: 'Mobilité interne proactive et passerelles fonctionnelles directes entre opérations terrain, dépôts portuaires, trading et siège stratégique.',
    link: '+68% de promotions internes',
    cls: '',
  },
  {
    icon: <Icon.shieldPlus />,
    tone: 'act-tile--gray',
    title: 'Excellence & Sécurité HSE',
    text: 'Formations certifiantes continues aux standards mondiaux Seveso II, gestes d’urgence et culture inflexible du zéro accident avec arrêt de travail.',
    link: 'Certifications ISO 14001 & 45001',
    cls: ' act-val-link--dark',
  },
  {
    icon: <Icon.leaf />,
    tone: '',
    title: 'Impact Réel & Transition',
    text: 'Contribuez concrètement à l’indépendance énergétique et au déploiement des infrastructures solaires, gaz propre et mobilité électrique en Afrique.',
    link: 'Projets RSE à fort impact',
    cls: '',
  },
  {
    icon: <Icon.rosette />,
    tone: 'icon-tile--lav',
    title: 'Avantages Compétitifs',
    text: 'Rémunérations stimulantes, couverture santé premium familiale intégrale, intéressement annuel et programmes d’aide à la scolarité.',
    link: 'Package social de référence',
    cls: ' act-val-link--blue',
  },
]

const jobs = [
  {
    contract: 'CDI',
    level: 'SENIOR',
    ref: 'RÉF: CM-DEP-042',
    title: 'Responsable de Dépôt Pétrolier & Logistique Cuves',
    city: 'Douala, Cameroun',
    dept: 'Dépôts & Flux Hydrocarbures',
    deptIcon: <Icon.building />,
    date: 'Publié il y a 2 jours',
    text: 'Supervision de la chaîne de stockage de 85 000 m³, pilotage des dépotages navires, audit de conformité douanière et gestion d’une équipe de 35 techniciens de piste.',
  },
  {
    contract: 'CDI',
    level: 'CONFIRMÉ (5 ANS+)',
    ref: 'RÉF: CM-HSE-118',
    title: 'Ingénieur HSE & Conformité Seveso II',
    city: 'Douala, Cameroun',
    dept: 'Qualité, Sécurité & Environnement',
    deptIcon: <Icon.shieldPlus />,
    date: 'Publié il y a 4 jours',
    text: 'Mise en application des directives HSE groupe, audit annuel des dépôts côtiers, analyse des risques industriels et déploiement du programme mondial "Vision Tolérance Zéro".',
  },
  {
    contract: 'CDI',
    level: 'CONFIRMÉ',
    ref: 'RÉF: CM-RET-091',
    title: 'Chef de Zone Réseau Stations-Service (Territoire Sud)',
    city: 'Bafoussam, Cameroun',
    dept: 'Retail & Réseau Forecourt',
    deptIcon: <Icon.shop />,
    date: 'Publié il y a 6 jours',
    text: 'Pilotage opérationnel de 22 stations-service : rentabilité des pistes, conformité de marque, animation des gérants, développement des boutiques Express et déploiement Vision Pay.',
  },
  {
    contract: 'CDI',
    level: 'INTERMÉDIAIRE',
    ref: 'RÉF: CM-B2B-015',
    title: 'Commercial Grands Comptes B2B & Bunkering',
    city: 'Kribi, Cameroun',
    dept: 'Trading & Ventes Industrielles',
    deptIcon: <Icon.ship />,
    date: 'Publié il y a 1 semaine',
    text: 'Négociation de contrats d’approvisionnement en vrac pour flottes minières, forestières et armateurs maritimes. Négociation de contrats de soutes et suivi de livraison par barges.',
  },
  {
    contract: 'CDI',
    level: 'JUNIOR / INTERMÉDIAIRE',
    ref: 'RÉF: HQ-FIN-088',
    title: 'Analyste Financier Trading Hydrocarbures & Hedging',
    city: 'Siège Régional — Douala',
    dept: 'Finance & Contrôle des Risques',
    deptIcon: <Icon.chart />,
    date: 'Publié il y a 10 jours',
    text: 'Suivi des cotations Platts, modélisation des marges raffinées, couverture des risques de change et reporting quotidien des positions physiques pour la direction du Trading.',
  },
]

const steps = [
  { n: '01', tone: '', title: 'Candidature en Ligne', text: 'Étude de votre CV et de l’adéquation technique sous 72h ouvrées par la cellule RH.' },
  { n: '02', tone: '', title: 'Entretien RH Découverte', text: 'Échange en visio ou présentiel de 45 min axé sur vos motivations et valeurs partagées.' },
  { n: '03', tone: ' act-step--blue', title: 'Cas Métier & HSE', text: 'Mise en situation concrète avec le Manager Opérationnel et le Responsable HSE.' },
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
            Faites grandir votre talent dans un groupe panafricain en pleine expansion.
          </h2>
          <p className="car-intro-lead">
            Chez Vision Energy, nous formons une communauté d’ingénieurs, gestionnaires de flux, techniciens
            et stratèges engagés à alimenter l’économie réelle en toute sécurité.
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
                <img src="/images/act-testi-clean.jpg" alt="Aminata Touré, sur le terrain" />
              </div>
              <span className="car-testi-badge">
                <IconQuote /> 8 ans d’ancienneté
              </span>
            </div>
            <div className="car-testi-body">
              <span className="eyebrow car-eyebrow-icon">
                <Icon.userCheck /> Témoignage collaborateur
              </span>
              <blockquote className="car-quote">
                « Entrée comme ingénieure stagiaire sur le terminal de Douala, j’ai eu l’opportunité de diriger
                l’automatisation de nos cuves avant de prendre la tête des opérations réseau pour 3 filiales.
                Vision Energy offre la confiance et les moyens d’entreprendre. »
              </blockquote>
              <b className="car-name">Aminata Touré</b>
              <span className="car-role">Directrice Adjointe des Opérations Réseau &amp; Logistique Régionale</span>
              <span className="car-committee">Membre du Comité Technique Transition E-Vision</span>
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
                <option>Dépôts &amp; Flux Hydrocarbures</option>
                <option>Qualité, Sécurité &amp; Environnement</option>
                <option>Retail &amp; Réseau Forecourt</option>
                <option>Trading &amp; Ventes Industrielles</option>
                <option>Finance &amp; Contrôle des Risques</option>
              </select>
              <Icon.chevD />
            </label>
            <label className="car-field">
              <span>Filtrer par Pays / Localisation</span>
              <select defaultValue="all">
                <option value="all">Tous les Sites (Douala, Bafoussam, Kribi)</option>
                <option>Douala, Cameroun</option>
                <option>Bafoussam, Cameroun</option>
                <option>Kribi, Cameroun</option>
              </select>
              <Icon.chevD />
            </label>
            <label className="car-field car-field--search">
              <span>Recherche Rapide</span>
              <span className="car-search">
                <Icon.search />
                <input type="search" placeholder="Ex: HSE, Cuves, Retail, Trader…" aria-label="Recherche rapide" />
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
                  <p>Vos informations et CV sont hébergés conformément aux normes de confidentialité panafricaines et RGPD.</p>
                </div>
              </div>
              <div className="car-note car-note--mint">
                <span className="car-note-icon">
                  <Icon.bolt />
                </span>
                <p>
                  Notre équipe RH recrute continuellement dans les métiers de la mobilité électrique E-Vision
                  et du Gaz propre (GPL), ainsi que pour la direction technique : ingénieurs spécialisés en
                  lubrifiants, électricité, automatisme et gaz.
                </p>
              </div>
            </div>

            <form className="car-form" onSubmit={(e) => e.preventDefault()}>
              <div className="car-form-grid">
                <label className="car-in">
                  <span>Nom et Prénom *</span>
                  <input type="text" placeholder="Ex: Moussa Diallo" />
                </label>
                <label className="car-in">
                  <span>Email Professionnel *</span>
                  <input type="email" placeholder="moussa.diallo@domaine.com" />
                </label>
                <label className="car-in">
                  <span>Téléphone / WhatsApp *</span>
                  <input type="tel" placeholder="+237 6 00 00 00 00" />
                </label>
                <label className="car-in">
                  <span>Pays de résidence souhaité *</span>
                  <select defaultValue="">
                    <option value="">Sélectionnez un pays</option>
                    <option>Cameroun</option>
                    <option>Côte d’Ivoire</option>
                    <option>Gabon</option>
                    <option>Autre</option>
                  </select>
                </label>
                <label className="car-in car-in--full">
                  <span>Métier / Domaine ciblé *</span>
                  <select defaultValue="">
                    <option value="">Choisissez votre expertise principale</option>
                    <option>Exploitation de stations-service</option>
                    <option>Dépôts &amp; logistique cuves</option>
                    <option>HSE &amp; conformité</option>
                    <option>Ingénierie lubrifiants, électricité, automatisme &amp; gaz</option>
                    <option>Trading, B2B &amp; finance</option>
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
  const [path, setPath] = useState(() => window.location.hash.replace(/^#/, '').split('#')[0] || '/')

  useEffect(() => {
    const onChange = () => setPath(window.location.hash.replace(/^#/, '').split('#')[0] || '/')
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  useEffect(() => {
    if (path !== '/carrieres') return
    const t = window.setTimeout(() => {
      document.getElementById('carrieres')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(t)
  }, [path])

  return (
    <>
      <Hero />
      <News />
      <Careers />
      <CtaBand />
    </>
  )
}
