const Bieres = require('../Models').Bieres;

//Controleurs

//récupérer toutes les bières
exports.getAll = (req,res) => {
    Bieres.findAll()
        .then(all => res.status(200).json(all)) //200 = OK, all contient toutes les bieres
        .catch(err => res.status(500).json(err)) //500 = erreur
}

// Ajouter une bière
exports.addBeer = (req, res) => {
    Bieres.create({
        brewery_id : req.body.brewery_id,
        name: req.body.name,
        abv: req.body.abv,
        description: req.body.description,
        brewer: req.body.brewer,
        pays: req.body.pays
    }).then(() => {
        res.status(200).json()
        }).catch(err => res.status(500).json(err))
}



