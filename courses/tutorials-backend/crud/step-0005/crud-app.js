const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Données en mémoire pour les continents
let continents = [
  { id: 1, code: "AF", name: "Africa", area: 30370000, population: 1287920000 },
  { id: 2, code: "EU", name: "Europe", area: 10180000, population: 742648000 },
];

// CREATE - Ajouter un nouveau continent
/*
{
  "code": "AS",
  "name": "Asia",
  "area": 44579000,
  "population": 4641054775
}
  */

app.post('/continents', (req, res) => {
  console.log('Appel POST /continents pour ajouter un nouveau continent');
  const newContinent = {
    id: continents.length ? continents[continents.length - 1].id + 1 : 1,
    code: req.body.code,
    name: req.body.name,
    area: req.body.area,
    population: req.body.population,
  };
  continents.push(newContinent);
  console.log('Nouveau continent ajouté:', newContinent);
  res.status(201).json(newContinent);
});

// READ - Récupérer tous les continents
app.get('/continents', (req, res) => {
  console.log('Appel GET /continents pour récupérer tous les continents');
  res.status(200).json(continents);
});

// UPDATE - Mettre à jour un continent par ID
/*
{
  "name": "Asia Updated",
  "population": 4642000000
}
  */
app.put('/continents/:id', (req, res) => {
  console.log(`Appel PUT /continents/${req.params.id} pour mettre à jour un continent`);
  const continentId = parseInt(req.params.id, 10);
  const continent = continents.find(c => c.id === continentId);
  
  if (!continent) {
    console.log('Continent non trouvé pour mise à jour');
    return res.status(404).json({ message: 'Continent non trouvé' });
  }

  continent.code = req.body.code || continent.code;
  continent.name = req.body.name || continent.name;
  continent.area = req.body.area || continent.area;
  continent.population = req.body.population || continent.population;

  console.log('Continent mis à jour:', continent);
  res.status(200).json(continent);
});

// DELETE - Supprimer un continent par ID
app.delete('/continents/:id', (req, res) => {
  console.log(`Appel DELETE /continents/${req.params.id} pour supprimer un continent`);
  const continentId = parseInt(req.params.id, 10);
  const index = continents.findIndex(c => c.id === continentId);
  
  if (index === -1) {
    console.log('Continent non trouvé pour suppression');
    return res.status(404).json({ message: 'Continent non trouvé' });
  }

  const deletedContinent = continents.splice(index, 1);
  console.log('Continent supprimé:', deletedContinent[0]);
  res.status(200).json(deletedContinent[0]);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
