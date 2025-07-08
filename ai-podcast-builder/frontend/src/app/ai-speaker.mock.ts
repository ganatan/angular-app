export function reply(topic: string, count = 4) {
  if (!topic) throw new Error('Sujet manquant');
  if (count % 2 !== 0) throw new Error('Le nombre d’intervenants doit être pair');
  if (count < 2 || count > 8) throw new Error('Le nombre d’intervenants doit être entre 2 et 8');

  const pour = [
    {
      name: 'Camille',
      personality: 'Calme et analytique',
      voiceId: { id: 'aQROLel5sQbj1vuIVi6B', name: 'nicolas' },
      avatarId: { id: 101, name: 'avatar-camille' },
    },
    {
      name: 'Julien',
      personality: 'Structuré et convaincant',
      voiceId: { id: 'kENkNtk0xyzG09WW40xE', name: 'marcel' },
      avatarId: { id: 102, name: 'avatar-julien' },
    },
    {
      name: 'Nina',
      personality: 'Empathique et méthodique',
      voiceId: { id: 'McVZB9hVxVSk3Equu8EH', name: 'audrey' },
      avatarId: { id: 103, name: 'avatar-nina' },
    },
    {
      name: 'Olivier',
      personality: 'Précis et technique',
      voiceId: { id: 'kwajW3Xh5svCeKU5ky2S', name: 'dmitry' },
      avatarId: { id: 104, name: 'avatar-olivier' },
    },
  ];

  const contre = [
    {
      name: 'Alexis',
      personality: 'Critique et passionné',
      voiceId: { id: 'D9Thk1W7FRMgiOhy3zVI', name: 'aaron' },
      avatarId: { id: 105, name: 'avatar-alexis' },
    },
    {
      name: 'Lina',
      personality: 'Directe et sceptique',
      voiceId: { id: 'sANWqF1bCMzR6eyZbCGw', name: 'marie' },
      avatarId: { id: 106, name: 'avatar-lina' },
    },
    {
      name: 'Victor',
      personality: 'Provocateur et incisif',
      voiceId: { id: 'rfkTsdZrVWEVhDycUYn9', name: 'shelby' },
      avatarId: { id: 107, name: 'avatar-victor' },
    },
    {
      name: 'Sophie',
      personality: 'Énergique et ironique',
      voiceId: { id: 'i4CzbCVWoqvD0P1QJCUL', name: 'ivy' },
      avatarId: { id: 108, name: 'avatar-sophie' },
    },
  ];

  const moitié = count / 2;

  const items = [
    ...pour.slice(0, moitié).map((item) => ({
      name: item.name,
      role: 'Intervenant',
      stance: 'Pour',
      personality: item.personality,
      voiceId: item.voiceId,
      avatarId: item.avatarId,
    })),
    ...contre.slice(0, moitié).map((item) => ({
      name: item.name,
      role: 'Intervenant',
      stance: 'Contre',
      personality: item.personality,
      voiceId: item.voiceId,
      avatarId: item.avatarId,
    })),
  ];

  return {
    moderator: {
      name: 'Ganatan',
      role: 'Animateur Mock Frontend',
      stance: 'Neutre',
      personality: 'Neutre, pose les questions et relance le débat',
      voiceId: { id: '101A8UFM73tcrunWGirw', name: 'guillaume' },
      avatarId: { id: 100, name: 'avatar-ganatan' },
    },
    items: items,
  };
}
