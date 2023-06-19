const express = require("express");
const app = express();
const port = 3000;

const joueur = require("./data");

app.get('/', (req, res) => {
    res.status(200).json({"message": "Accueil"});
});

app.get('/joueurs', (req, res) => {
    res.status(200).json(joueur);
});

app.listen(port, () => {
    console.log("Server is runningggg on port " + port);
});

app.use('/api/v1', require('./routes/v1'))
