//Constantes
const express = require('express');
const router = express.Router();
const controleur = require('../controleur/controleur')

//Routes pour les controleurs
router.get('/',controleur.getAll)
router.get('/name',controleur.getByName)
router.get('/underABV',controleur.getUnderABV)
router.get('/overABV',controleur.getOverABV)
router.get('/pays',controleur.getByPays)
router.get('/brewername',controleur.getByBrewerName)
router.get('/nonAlcoholic',controleur.getNonAlcoholicBeer)
router.get('/onlyAlcoholic',controleur.getOnlyAlcoholicBeer)

//ajouter et supprimer
router.put('/addbeer',controleur.addBeer)
router.delete('/deletebeer/:id',controleur.deleteBeer)
router.delete('deleteName',controleur.deleteBeerByName)
router.delete('deleteBrewer',controleur.deleteBeerByBrewer)
router.delete('deleteBrewerId',controleur.deleteBeerByBrewerID)
router.delete('deletePays',controleur.deleteBeerByPays)

//mettre a jour
router.post('/updateName/:id',controleur.updateName)
router.post('/updateABV/:id',controleur.updateABV)
router.post('/updateDescription/:id',controleur.updateDescription)
router.post('/updateBrewer/:id',controleur.updateBrewer)
router.post('/updatePays/:id',controleur.updatePays)

router.get('/:id',controleur.getByID)
router.get('/:brewerid',controleur.getByBrewerID)

//Utilisation du routeur
module.exports = router;

