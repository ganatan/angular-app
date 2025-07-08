  // voiceOptions = [
  //   { id: '101A8UFM73tcrunWGirw', name: 'guillaume' },
  //   { id: 'aQROLel5sQbj1vuIVi6B', name: 'nicolas' },
  //   { id: 'kENkNtk0xyzG09WW40xE', name: 'marcel' },
  //   { id: 'kwajW3Xh5svCeKU5ky2S', name: 'dmitry' },
  //   { id: 'D9Thk1W7FRMgiOhy3zVI', name: 'aaron' },
  //   { id: 'McVZB9hVxVSk3Equu8EH', name: 'audrey' },
  //   { id: 'sANWqF1bCMzR6eyZbCGw', name: 'marie' },
  //   { id: 'rfkTsdZrVWEVhDycUYn9', name: 'shelby' },
  //   { id: 'i4CzbCVWoqvD0P1QJCUL', name: 'ivy' },
  // ];

  // avatarOptions = [
  //   { id: 100, name: 'avatar-ganatan' },
  //   { id: 101, name: 'avatar-camille' },
  //   { id: 102, name: 'avatar-julien' },
  //   { id: 103, name: 'avatar-nina' },
  //   { id: 104, name: 'avatar-olivier' },
  //   { id: 105, name: 'avatar-alexis' },
  //   { id: 106, name: 'avatar-lina' },
  //   { id: 107, name: 'avatar-victor' },
  //   { id: 108, name: 'avatar-sophie' },
  // ];



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function generateSpeakerMock(topic, count = 4) {
  await delay(1000);
  if (!topic) { throw new Error('Sujet manquant'); }
  if (count % 2 !== 0) { throw new Error('Le nombre d’intervenants doit être pair'); }

  const pour = [
    { name: 'Camille', personality: 'Calme et analytique' },
    { name: 'Julien', personality: 'Structuré et convaincant' },
    { name: 'Nina', personality: 'Empathique et méthodique' },
    { name: 'Olivier', personality: 'Précis et technique' },
  ];

  const contre = [
    { name: 'Alexis', personality: 'Critique et passionné' },
    { name: 'Lina', personality: 'Directe et sceptique' },
    { name: 'Victor', personality: 'Provocateur et incisif' },
    { name: 'Sophie', personality: 'Énergique et ironique' },
  ];

  const moitié = count / 2;

  const items = [
    ...pour.slice(0, moitié).map((speaker) => ({
      name: speaker.name,
      role: 'Intervenant',
      stance: 'Pour',
      personality: speaker.personality,
    })),
    ...contre.slice(0, moitié).map((speaker) => ({
      name: speaker.name,
      role: 'Intervenant',
      stance: 'Contre',
      personality: speaker.personality,
    })),
  ];

  return {
    moderator: {
      name: 'Ganatan',
      role: 'Animateur Mock Backend',
      stance: 'Neutre',
      personality: 'Neutre, pose les questions et relance le débat',
    },
    items: items,
  };
}
