var express = require('express');
var router = express.Router();
var controleur = require('../controleur/controleur')

router.get('/',controleur.getOne)

module.exports = router;

