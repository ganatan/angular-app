function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function reply(type, input) {
  await delay(1000);

  const name = (input.name || 'Inconnu').replace('-', ' ');
  const style = input.style || 'neutral';
  const length = input.length || 'medium';
  const llm = 'chatgtp';
  const validType = ['biography', 'filmography', 'summary'].includes(type) ? type : 'contenu';

  return `Mock Backend - Demande envoyée à ${llm} pour une ${validType} de "${name}", avec un style "${style}" et une longueur "${length}".`;
}

export default reply;
