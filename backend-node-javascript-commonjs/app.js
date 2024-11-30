const express = require('express');
const path = require('path');
const app = express();

app.get('/tutorial/img/:id', (req, res) => {
    const imageId = req.params.id;
    const imagePath = path.join('D:/chendra/00-data/articles/photo', `${imageId}.jpg`);
    
    res.sendFile(imagePath);
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});