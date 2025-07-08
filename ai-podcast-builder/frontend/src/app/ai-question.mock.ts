import { environment } from '../environments/environment';

export function reply(topic: string, count = 4) {
  if (!topic) throw new Error('Sujet manquant');
  if (count < 1) throw new Error('Le nombre de questions doit être supérieur à 0');

  const angularVsReactQuestions = [
    `Angular est-il trop lourd pour des projets simples par rapport à React ?`,
    `React offre-t-il plus de liberté ou plus de complexité que Angular ?`,
    `Quelle solution est la plus adaptée pour une grande équipe : Angular ou React ?`,
    `Les performances sont-elles réellement meilleures avec React qu’avec Angular ?`,
    `Pourquoi Angular est-il souvent préféré dans les environnements d’entreprise ?`,
    `React est-il trop dépendant de son écosystème pour fonctionner efficacement ?`,
    `Quel framework offre la meilleure expérience développeur à long terme ?`,
    `Angular est-il plus robuste grâce à TypeScript intégré nativement ?`,
    `React favorise-t-il une meilleure séparation des préoccupations ?`,
    `Quelle courbe d’apprentissage est la plus accessible pour un débutant ?`,
  ];

  const dialogueCount = environment.useMock ? 4 : 4;

  const items = angularVsReactQuestions.slice(0, count).map((text) => ({
    text: text,
    enabled: true,
    dialogueCount: dialogueCount,
  }));

  return {
    topic,
    items,
  };
}


// export function reply(topic: string, count = 4) {
//   if (!topic) throw new Error('Sujet manquant');
//   if (count < 1) throw new Error('Le nombre de questions doit être supérieur à 0');

//   const angularVsReactQuestions = [
//     `Angular est-il trop lourd pour des projets simples par rapport à React ?`,
//     `React offre-t-il plus de liberté ou plus de complexité que Angular ?`,
//     `Quelle solution est la plus adaptée pour une grande équipe : Angular ou React ?`,
//     `Les performances sont-elles réellement meilleures avec React qu’avec Angular ?`,
//     `Pourquoi Angular est-il souvent préféré dans les environnements d’entreprise ?`,
//     `React est-il trop dépendant de son écosystème pour fonctionner efficacement ?`,
//     `Quel framework offre la meilleure expérience développeur à long terme ?`,
//     `Angular est-il plus robuste grâce à TypeScript intégré nativement ?`,
//     `React favorise-t-il une meilleure séparation des préoccupations ?`,
//     `Quelle courbe d’apprentissage est la plus accessible pour un débutant ?`,
//   ];

//   const items = angularVsReactQuestions.slice(0, count).map((text) => ({
//     text,
//     enabled: true,
//   }));

//   return {
//     topic,
//     items,
//   };
// }
