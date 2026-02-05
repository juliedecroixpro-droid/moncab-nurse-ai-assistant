# Nurse AI Assistant - MonCab.fr

Application intelligente pour la gestion des tournées d'infirmières libérales avec assistant IA conversationnel.

## Stack Technique

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Déploiement:** Vercel
- **Domaine:** https://www.moncab.fr

## Installation

```bash
bun install
# ou
npm install
```

## Configuration

### Clé API OpenAI

1. Créer un compte sur [OpenAI Platform](https://platform.openai.com/)
2. Générer une clé API sur [API Keys](https://platform.openai.com/api-keys)
3. Créer un fichier `.env.local` à la racine du projet:

```bash
OPENAI_API_KEY=sk-proj-votre-cle-ici
```

Sur Vercel, ajouter la variable d'environnement dans les Settings du projet.

## Développement

```bash
bun dev
# ou
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build

```bash
bun run build
# ou
npm run build
```

## Déploiement

Le projet est automatiquement déployé sur Vercel via GitHub.

## Fonctionnalités

- 🔐 **Authentification** - Compte test (test/test123)
- 💬 **Chat IA** - Powered by OpenAI GPT-4o-mini
- 🎤 **Speech-to-Text** - Reconnaissance vocale en français
- 📱 **Design responsive** - Fonctionne sur mobile et desktop
- 🎨 **Interface moderne** - Tailwind CSS
- ⚡ **Performance optimisée** - Next.js 15 + Vercel

### Chat Features
- Reconnaissance vocale (Web Speech API)
- Réponses IA contextuelles pour IDEL
- Interface de chat en temps réel
- Historique des conversations

## License

Propriétaire - © 2026 MonCab.fr
