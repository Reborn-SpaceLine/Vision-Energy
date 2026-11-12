# CONTENT REVIEW — Vision Energy Website

**Date:** 12 Novembre 2026  
**Auteur:** Kiro CLI  
**Projet:** Vision Energy S.A. — Site Web React/TypeScript/Vite

---

## 1. SYNTHÈSE

Le site Vision Energy nécessite une refonte complète de l'identité visuelle et une révision du contenu.

**PRIORITÉ ABSOLUE:** Harmoniser les couleurs de tout le site avant de procéder aux améliorations des pages Réseau et Carrières.

---

## 2. PALETTE DE COULEURS VISION ENERGY

### Palette Validée (à partir des renders 3D)

| Couleur | HEX | Utilisation |
|---------|-----|-------------|
| Vert principal | `#A8D52A` | Boutons principaux, accents, éléments de marque |
| Cyan | `#00B8D4` | Icônes, liens, éléments secondaires |
| Vert foncé | `#174D36` | Footer, titres importants, sections institutionnelles |
| Gris anthracite | `#263238` | Textes, navigation et éléments sombres |
| Gris clair | `#F3F6F5` | Arrière-plans et sections secondaires |
| Blanc | `#FFFFFF` | Cartes, surfaces et arrière-plans |

### Variables CSS actuelles (dans index.css)

```css
:root {
  --g-950: #04231a;
  --g-900: #06382a;
  --g-800: #075440;
  --g-700: #006948;
  --g-600: #1ba338;
  --mint: #1ba338;
  --blue: #2890d8;
  --dark: #2d3133;
  --ink: #1d2723;
  --muted: #6b7c76;
  --bg: #f7f9fb;
  --paper: #ffffff;
}
```

### Actions requises:

1. Mettre à jour les variables `--g-700`, `--g-600`, `--blue`, `--dark`, `--ink`, `--muted` pour correspondre à la palette Vision Energy
2. Centraliser toutes les couleurs dans le fichier `index.css`

---

## 3. AUDIT DES IMAGES

### 3.1 Lubrifiants — Page Produits ✅

**Fichiers concernés:**
- `lub-canister-synth.jpg` ✅
- `lub-graissage-bay.jpg` ✅
- `lub-drum-heavyduty.jpg` ✅
- `lub-industrial-fluid.jpg` ✅

**Décision:** Aucune modification requise. Les 4 images sont des renders 3D professionnels brandés Vision Energy, parfaitement alignées avec les produits décrits.

### 3.2 Stations Vision Energy

**Renders 3D disponibles (6+ fichiers):**
- `BNM.jpg.jpeg`
- `HNJM.jpg.jpeg`
- `VBNH.jpg.jpeg`
- `VBNM-2.jpg.jpeg`
- `dfgh-2.jpg.jpeg`
- `ertz.jpg.jpeg`
- `ChatGPT Image 31 août 2026, 12_33_12.png`
- `ChatGPT Image 31 août 2026, 15_12_52.png`
- `f6ae6565-e54b-477a-a282-11d0879313ee.png`

**Photographies réelles:**
- `station-ve-real.jpg` (1080x1080) — Photo d'équipe, utilisée dans Carrières
- `station-clean.png`, `station-panoramic.jpg`, `station-boutique.jpg`, etc.

**Images produits:**
- `gaz-agent.jpg`, `pump.jpg`, `pro-a.jpg`, `pro-b.jpg`, `pro-c.jpg`, `pro-lub2.jpg`

---

## 4. PAGE RÉSEAU — Analyse

**Fichier:** `src/pages/Reseau.tsx`

### Données des stations (6 stations listées)

| Nom | Localisation | Tag | Status |
|-----|--------------|-----|--------|
| Station Douala – Bonamoussadi | Bonamoussadi, Douala | Station Historique | Ouvert 24/7 |
| Station Douala – Logbessou PK15 | Logbessou, PK15, Douala | Quartier Populaire | Ouvert 24/7 |
| Station Bafoussam – Bamendzi | Bamendzi, Bafoussam | Chef-lieu Régional | Ouvert 24/7 |
| Station Batcham | Axe Mbouda – Batcham | Nouvelle Ouverture | Ouverte le 15/01/2026 |
| Station Mbouda | Mbouda, Bamboutos | Nouvelle Ouverture | Ouverte le 28/04/2026 |
| Station Tobe – Poumougne | Tobe, Koung-Khi | Axe Douala – Yaoundé | Mise en conformité le 27/06/2025 |

### Images utilisées
- `station-ve-real.jpg`
- `station-clean.png`
- `station-panoramic.jpg`
- `station-boutique.jpg`

### Propositions d'amélioration
- Les 6 stations sont correctement listées
- Les images s'affichent correctement
- Vérifier si les rendus 3D spectaculaires (HNJM, VBNM-2, ertz) peuvent remplacer certaines images génériques

---

## 5. PAGE CARRIÈRES — Analyse

**Fichier:** `src/pages/Carrieres.tsx`

### Statistiques du Hero

| Icon | Valeur | Label | Sub |
|------|--------|-------|-----|
| `<Icon.users />` | 30+ | Collaborateurs prévus | Avec l'objectif 30 stations |
| `<Icon.fuel />` | 6 | Stations actives | Douala, Bafoussam, Mbouda, Batcham, Tobe |
| `<Icon.briefcase />` | 5 | Postes ouverts | En CDI · Opérations & Technique |
| `<Icon.rosette />` | 4 | Spécialités internes | Lubrifiants, élec., automatisme & gaz |

### Marque employeur — 4 valeurs

1. **Grandir avec le Réseau** — Objectif 30 stations d'ici 2028
2. **Sécurité & Conformité** — Procédures strictes, plans d'urgence, dossiers MINMIDT
3. **Compétences Techniques** — 4 spécialités internes (lubrifiants, électricité, automatisme, gaz)
4. **Ancrage Local** — Équipe camerounaise en poste depuis mars 2023

### Offres d'emploi (5 postes)

| Réf | Poste | Ville | Département | Date |
|-----|-------|-------|-------------|------|
| RÉF: CM-GAZ-014 | Technicien Centre de Remplissage Gaz | Douala | Centres de Remplissage & Gaz | 2 jours |
| RÉF: CM-OPS-021 | Responsable de Station-Service | Bafoussam | Exploitation & Réseau Stations | 4 jours |
| RÉF: CM-TEC-007 | Ingénieur Électricité & Automatisme | Douala / Bafoussam | Direction Technique | 6 jours |
| RÉF: CM-CON-011 | Chargé de Conformité & Dossiers Réglementaires | Douala | Conformité & Affaires Réglementaires | 1 semaine |
| RÉF: CM-COM-018 | Commercial Gaz & Lubrifiants (B2B) | Yaoundé / Douala | Ventes Professionnels & Ménages | 10 jours |

### Témoignage

**Image:** `station-ve-real.jpg` (photographie réelle d'équipe, 1080x1080)  
**Auteur:** Exploitation Vision Energy  
**Équipes stations & centres de remplissage de gaz  
**Localisation:** Douala · Bafoussam · Mbouda · Batcham

### Propositions d'amélioration
- Le contenu est cohérent et professionnel
- L'image de témoignage est pertinente et de bonne qualité
- Aucun changement requis sur le texte

---

## 6. OPTIMISATION DES ASSETS

### Renommage des fichiers

**Proposition:** Renommer les fichiers cryptiques vers des noms descriptifs:

| Fichier actuel | Fichier propose | Raisons |
|----------------|-----------------|---------|
| `BNM.jpg.jpeg` | `station-render-bnm.jpg` | Render 3D générique |
| `HNJM.jpg.jpeg` | `station-render-hnjm.jpg` | Render 3D générique |
| `VBNH.jpg.jpeg` | `station-render-vbnh.jpg` | Render 3D générique |
| `VBNM-2.jpg.jpeg` | `station-render-vbnm-2.jpg` | Render 3D générique |
| `dfgh-2.jpg.jpeg` | `station-render-dfgh.jpg` | Render 3D générique |
| `ertz.jpg.jpeg` | `station-render-ertz.jpg` | Render 3D générique |

**Attention:** Ne pas attribuer arbitrairement une localisation géographique à une image.

---

## 7. TÂCHES À EXÉCUTER

### Task 1: Refonte des couleurs
- Mettre à jour `src/index.css` avec la palette Vision Energy
- Centraliser les variables CSS dans `:root`
- Appliquer les nouvelles couleurs à tous les composants

### Task 2: Audit Lubrifiants
- Vérifier que les 4 images existent
- Confirmer les chemins dans `Produits.tsx`

### Task 3: Analyse Réseau
- Lire `Reseau.tsx` entier
- Documenter les données stations
- Identifier les images utilisées

### Task 4: Analyse Carrières
- Lire `Carrieres.tsx` entier
- Documenter les données
- Valider l'image `station-ve-real.jpg`

### Task 5: Optimisation Assets
- Inventorier les images
- Proposer un mapping optimal
- Renommer les fichiers si nécessaire

### Task 6: Commit et Push
- Ajouter les changements au staging Git
- Créer un commit descriptif
- Pousser sur GitHub

---

## 8. IMPORTANT

**NE PAS:**
- Inventer de nouvelles données concernant les stations ou les recrutements
- Remplacer les photographies réelles pertinentes par des renders 3D sans justification
- Modifier les couleurs de façon arbitraire

**PRIORITÉ:**
1. Harmoniser les couleurs de tout le site
2. Vérifier les images des 4 lubrifiants
3. Réviser le contenu des pages Réseau et Carrières

---

## 9. RESULTAT FINAL

Le site Vision Energy doit présenter:

- Une identité visuelle moderne basée sur les couleurs de la marque
- Une palette uniforme sur toutes les pages
- Des images professionnelles et cohérentes
- Une page Réseau claire et valorisante
- Une page Carrières professionnelle
- Des informations cohérentes et correctement présentées
- Une excellente expérience utilisateur sur mobile et ordinateur
- Un code propre, organisé et maintenable
