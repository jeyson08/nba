const express = require('express')
const router = express.Router()
const dialogController = require('../../controller/v1/index')


router.get('/', dialogController.home)

router.get('/test', dialogController.test)

router.get('/joueurs', dialogController.allJoueurs)

router.get("/joueurs/:id", dialogController.getJoueurById);

module.exports = router