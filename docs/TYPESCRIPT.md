# Conventions TypeScript

Ces conventions s'appliquent a tous les fichiers TypeScript et TSX du projet.

## Configuration

- Le projet utilise le mode `strict` de TypeScript via `expo/tsconfig.base`.
- Toute nouvelle fonction doit avoir un type de retour explicite.
- `any` est interdit sans justification explicite dans le code.
- En cas de valeur externe ou inconnue, utiliser `unknown`, puis un narrowing ou une validation avant usage.
- Les instructions de retour ne doivent pas etre implicites : toutes les branches doivent retourner une valeur conforme au type declare.
- Les chemins d'import internes sont resolus avec des imports relatifs, coheremment avec l'arborescence courante.

## Types et interfaces

- Utiliser `type` pour les objets simples, les unions, les intersections et les types utilitaires.
- Utiliser `interface` pour les contrats publics susceptibles d'etre implementees ou etendus.
- Exporter les types partagees par plusieurs modules.
- Garder les types derives des API proches de leur module metier.
- Eviter les assertions `as` quand une validation, un guard ou l'inference peut etablir le type.
- Utiliser `unknown` plutot que `any` pour les donnees externes, notamment les reponses Supabase et les valeurs de configuration.

## Fonctions

- Declarer explicitement les types des parametres et du retour.
- Preferer les fonctions nommees pour les operations reutilisees.
- Retourner `null` pour une absence connue et documentee, pas `undefined` sauf quand la plateforme ou une API attend explicitement `undefined`.
- Ne pas utiliser `console.log` dans le code destine a la production.
- Traiter les erreurs avec un message exploitable ou les retourner au niveau de l'interface.

## React Native et Expo

- Conserver les composants dans des fichiers TSX.
- Typer les props des composants avec `type` ou `interface` dediees.
- Utiliser les types publies par React Native, Expo et Expo Router plutot que de dupliquer leurs structures.
- Utiliser les alias presentes dans `tsconfig.json` lorsque l'import relatif devient ambigu.
- Conserver la compatibilite des types avec Android, iOS et le web.
- Ne pas ajouter de types ou de declarations specifiques a une plateforme hors des types et plugins Expo existants.

## Imports

- Ordonner les imports externes avant les imports internes.
- Preferer les imports nommes.
- Eviter les imports avec des chemins de remontes qui depassent clairement la profondeur locale.
- Utiliser `import type` pour les types uniquement lorsque cela apporte une separation nette.

## Nommage

- Utiliser `PascalCase` pour les composants React, les types, les interfaces et les classes.
- Utiliser `camelCase` pour les fonctions, variables, proprietes et hooks.
- Utiliser `UPPER_SNAKE_CASE` pour les constantes vraiment globales.
- Nommer les fonctions avec un verbe ou une action claire.
- Nommer les types avec un nom representant la valeur, sans suffixes artificiels tels que `Data` ou `Object`.
- Donner aux booleens des noms affirmatifs ou interrogatifs, par exemple `isLoading`, `hasError` ou `canRetry`.

## Validation

Avant toute modification logicielle, executer :

```bash
npx tsc --noEmit
npm run lint
```
