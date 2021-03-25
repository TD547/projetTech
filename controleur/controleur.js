const Bieres = require('../Models').Bieres;

//Controleurs

//récupérer toutes les bières
exports.getAll = (req,res) => {
    Bieres.findAll()
        .then(all => res.status(200).json(all)) //200 = OK, all contient toutes les bieres
        .catch(err => res.status(500).json(err)) //500 = erreur
}

//recuperer une biere
exports.getOne = (req,res) => {
    Bieres.findOne({where: {id: req.params.id}})
        .then(beer => res.status(200).json(beer)) //200 = OK, biere trouvee
        .catch(err => res.status(500).json(err)) //500 = erreur
}
// Ajouter une bière
    exports.addBeer = (req, res) => {
        Bieres.create({
            brewery_id: req.body.brewery_id,
            name: req.body.name,
            abv: req.body.abv,
            description: req.body.description,
            brewer: req.body.brewer,
            pays: req.body.pays
        }).then(() => {
            res.status(201).json()
        }).catch(err => res.status(500).json(err))
    }

//supprimer une biere
    exports.deleteBeer = (req, res) => {
        Bieres.destroy({where: {id: req.params.id}})
            .then(res.status(200)) //200 = Ok biere supprimee
            .catch(err => {
                if (err) {
                    res.status(500).json(err) //500 = erreur
                } else {
                    res.status(404).json({error: 'Biere non trouvee'}) //400 = Biere non trouvee
                }
            })
    }

// Modifier la brasserie d'une biere (il n'y a pas de vérification pour regarder si le brewery_id correspond bien à brewer)
exports.updateBrewery = (req,res) => {
    Bieres.findOne({where: {id: req.params.id}})
        .then(biere => {
            biere.brewery_id = req.body.brewery_id,
            biere.brewer = req.body.brewer
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //400 = Biere non trouvee
            }
        })
}

// Modifier le nom d'une biere
exports.updateName = (req,res) => {
    Bieres.findOne({where: {id: req.params.id}})
        .then(biere => {
            biere.name = req.body.name
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //400 = Biere non trouvee
            }
        })
}

// Modifier la brasserie d'une biere (il n'y a pas de vérification pour regarder si le brewery_id correspond bien à brewer)
exports.updateBrewery = (req,res) => {
    Bieres.findOne({where: {id: req.params.id}})
        .then(biere => {
            biere.brewery_id = req.body.brewery_id,
                biere.brewer = req.body.brewer
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //400 = Biere non trouvee
            }
        })
}

// Modifier l'abv d'une biere
exports.updateABV = (req,res) => {
    Bieres.findOne({where: {id: req.params.id}})
        .then(biere => {
            biere.abv = req.body.abv
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //400 = Biere non trouvee
            }
        })
}

// Modifier la description d'une biere
exports.updateDescription = (req,res) => {
    Bieres.findOne({where: {id: req.params.id}})
        .then(biere => {
            biere.description = req.body.description
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //400 = Biere non trouvee
            }
        })
}

// Modifier le pays d'origne d'une biere
exports.updateDescription = (req,res) => {
    Bieres.findOne({where: {id: req.params.id}})
        .then(biere => {
            biere.pays = req.body.pays
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //400 = Biere non trouvee
            }
        })
}

