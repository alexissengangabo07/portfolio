# 🚀 KivuNex Portfolio - Alexis Senga Ngabo (Dr. Code)

Un portfolio web moderne, performant et bilingue développé avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**. Ce projet met en valeur l'expertise Full-Stack, les projets clés et le profil de fondateur de KivuNex.

---

## 🌟 Fonctionnalités Principales

- **⚡ Performance & SEO** : Rendu hybride (Server Components pour la page principale, Client Components pour les éléments interactifs) et métadonnées optimisées.
- **🌐 Multilingue (Anglais / Français)** : Gestion dynamique des langues avec persistance du choix utilisateur dans le `localStorage`.
- **🌙 Thème Sombre / Clair** : Basculement fluide avec mémorisation de la préférence dans le `localStorage`.
- **📩 Formulaire de Contact Fonctionnel** : Intégration de **Resend** via des **Server Actions** Next.js pour l'envoi d'e-mails directement à `alexxngabo@gmail.com`.
- **📱 Design Responsive & UI Soignée** : Interface moderne inspirée de Dribbble avec effets de dégradés, lueurs néon et adaptation optimale sur mobile.
- **🛠️ Configuration Dev Locale** : Support de `allowedDevOrigins` pour tester et déboguer sur mobile via le réseau local.

---

## 🛠️ Stack Technique

- **Framework** : [Next.js](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Style** : [Tailwind CSS](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Emailing** : [Resend](https://resend.com/) & Server Actions
- **Déploiement** : Vercel / Netlify (Recommandé)

---

## 📁 Structure du Projet

```text
├── app/
│   ├── actions/
│   │   └── sendEmail.ts     # Server Action pour l'envoi d'e-mails via Resend
│   ├── favicon.ico
│   ├── globals.css          # Configuration Tailwind et styles globaux
│   ├── layout.tsx           # Layout principal, métadonnées SEO et Favicon
│   └── page.tsx             # Page principale (Server Component)
├── components/
│   ├── About.tsx            # Section À propos
│   ├── Contact.tsx          # Formulaire de contact interactif
│   ├── Experience.tsx       # Parcours et expériences
│   ├── Footer.tsx           # Pied de page dynamique
│   ├── GithubIcon.tsx       # Composant d'icône GitHub SVG
│   ├── Hero.tsx             # En-tête principal avec effet de texte
│   ├── Navbar.tsx           # Barre de navigation, sélecteur de langue et thème
│   ├── Projects.tsx         # Présentation des projets
│   ├── Skills.tsx           # Compétences techniques mappées
│   └── Stats.tsx            # Statistiques clés
├── data/
│   ├── dictionary.ts        # Dictionnaire bilingue (EN / FR)
│   └── portfolioData.ts     # Données du profil, projets et expériences
├── public/
│   ├── alexis.jpeg          # Photo de profil
│   └── kivunex.jpg          # Favicon / Logo KivuNex
└── next.config.mjs          # Configuration Next.js (dev origins, etc.)
```

---

## 🚀 Installation et Lancement Local

### 1. Cloner le projet
```bash
git clone https://github.com/votre-nom-utilisateur/kivunex-portfolio.git
cd kivunex-portfolio
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
Créez un fichier `.env.local` à la racine du projet et ajoutez-y votre clé API Resend :
```env
RESEND_API_KEY=re_votre_cle_api_resend
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```

Rendez-vous sur [http://localhost:3000](http://localhost:3000) pour visualiser le site.

Pour tester sur smartphone via le réseau local, accédez à `http://<VOTRE_IP_LOCAL>:3000` (ex: `http://192.168.233.92:3000`).

---

## 👤 Auteur

**Alexis Senga Ngabo (Dr. Code)**
- **Rôle** : Full-Stack Web Developer & Founder @ [KivuNex](https://kivunex.com)
- **Email** : alexxngabo@gmail.com
- **Location** : Goma, Nord-Kivu, RDC
- **GitHub** : [@alexissengangabo07](https://github.com/alexissengangabo07)

---

## 📄 Licence

Ce projet est sous licence MIT. Vous pouvez l'utiliser et le personnaliser librement.