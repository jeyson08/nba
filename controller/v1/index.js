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
  }
}

module.exports = dialogController