const joueur = require("../../data");

const dialogController = {
  home: (req, res) => {
    res.send('Hello World!')
  },
  test: (req, res) => {
    res.send('Hello Test!')
  },
  allJoueurs: (req, res) => {
    res.status(200).json(joueur);
  },
  getJoueurById: (req, res) => {
    const joueurId = req.params.id;
    const joueurById = joueur.find((joueur) => joueur.id === parseInt(joueurId));

    if (joueurById) {
      res.status(200).json(joueurById);
    } else {
      res.status(404).json({ message: "Joueur non trouvé" });
    }
  }
}

module.exports = dialogController