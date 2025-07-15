import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/persons', (req, res) => {
    res.json({
        "success": true,
        "metadata": {
            "pagination": {
                "currentPage": 1,
                "perPage": 10,
                "totalItems": 4,
                "totalPages": 1
            }
        },
        "data": [
            {
                "id": 1,
                "name": "Steven Spielberg-javascript-backend-mock",
                "city": "Cincinnati"
            },
            {
                "id": 2,
                "name": "Ridley Scott-javascript-backend-mock",
                "city": "South Shields"
            },
            {
                "id": 4,
                "name": "Denis Villeneuve-javascript-backend-mock",
                "city": "Bécancour"
            },
            {
                "id": 3,
                "name": "Christopher Nolan-javascript-backend-mock",
                "city": "London"
            }
        ]
    });
});

// Démarrage du serveur
app.listen(3000, () => {
    console.log('Backend démarré sur http://localhost:3000');
});
