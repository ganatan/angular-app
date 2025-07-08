# mock\llm\claude.mock.js

```js
function reply(type, data) {
  const name = (data.name || 'Inconnu').replace('-', ' ');
  const style = data.style || 'neutral';
  const length = data.length || 'medium';
  const llm = data.llm || 'claude';
  const validType = ['biography', 'filmography', 'summary'].includes(type) ? type : 'contenu';

  return `Mock Backend - Demande envoyée à ${llm} pour une ${validType} de "${name}", avec un style "${style}" et une longueur "${length}".`;
}

export default reply;

```
