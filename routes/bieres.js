//Constantes
const express = require('express');
const router = express.Router();
const controleur = require('../controleur/controleur')

//Routes pour les controleurs
router.get('/',controleur.getAll)
router.get('/id',controleur.getByID)
router.get('/name',controleur.getByName)
router.get('/underABV',controleur.getUnderABV)
router.get('/overABV',controleur.getOverABV)
router.get('/pays',controleur.getByPays)
router.get('/brewername',controleur.getByBrewerName)
router.get('/brewerid',controleur.getByBrewerID)
router.get('/addbeer',controleur.addBeer)
router.get('/deletebeer',controleur.deleteBeer)
router.get('/updateBrewId',controleur.updateBreweryID)
router.get('/updateName',controleur.updateName)
router.get('/updateABV',controleur.updateABV)
router.get('/updateDescription',controleur.updateDescription)
router.get('/updateBrewer',controleur.updateBrewer)
router.get('/updatePays',controleur.updatePays)

//Utilisation du routeur
module.exports = router;

