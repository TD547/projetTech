const {Op} = require("sequelize");
const Bieres = require('../Models').Bieres;

//Controleurs

//récupérer toutes les bières
exports.getAll = (req, res) => {
    Bieres.findAll()
        .then(all => res.status(200).json(all)) //200 = OK, all contient toutes les bieres
        .catch(err => res.status(500).json(err)) //500 = erreur
}

//recuperer une biere par l'id
exports.getByID = (req, res) => {
    Bieres.findAll({where: {id: req.params.id}})
        .then(beer => res.status(200).json(beer)) //200 = OK, biere trouvee
        .catch(err => res.status(500).json(err)) //500 = erreur
}

//recuperer les biere portant le nom entré
exports.getByName = (req, res) => {
    Bieres.findAll({where: {name: req.query.name}})
        .then(beer => res.status(200).json(beer)) //200 = OK, biere trouvee
        .catch(err => res.status(500).json(err)) //500 = erreur
}

//recuperer les biere ayant un ABV en dessous ou égal à l'ABV entré
exports.getUnderABV = (req, res) => {
    Bieres.findAll({where: {abv: {[Op.lte]: req.query.abv}}})
        .then(beer => res.status(200).json(beer)) //200 = OK, bieres trouvee
        .catch(err => res.status(500).json(err)) //500 = erreur
}

//recuperer les biere ayant un ABV supérieur ou égal à l'ABV entré
exports.getOverABV = (req, res) => {
    Bieres.findAll({where: {abv: {[Op.gte]: req.query.abv}}})
        .then(beer => res.status(200).json(beer)) //200 = OK, bieres trouvee
        .catch(err => res.status(500).json(err)) //500 = erreur
}

//recuperer les bieres originaires du pays entré (Commence par une majuscule)
exports.getByPays = (req, res) => {
    Bieres.findAll({where: {pays: req.query.pays}})
        .then(beer => res.status(200).json(beer)) //200 = OK, biere trouvee
        .catch(err => res.status(500).json(err)) //500 = erreur
}

//recuperer les bieres créer dans la brasserie entrée grace au nom de la brasserie
exports.getByBrewerName = (req, res) => {
    Bieres.findAll({where: {brewer: req.query.brewer}})
        .then(beer => res.status(200).json(beer)) //200 = OK, biere trouvee
        .catch(err => res.status(500).json(err)) //500 = erreur
}

//recuperer les bieres créer dans la brasserie entrée grace à l'ID de la brasserie
exports.getByBrewerID = (req, res) => {
    Bieres.findAll({where: {brewery_id: req.params.brewery_id}})
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
        }).catch(err => {
        console.log(err.message)
        res.status(500).json(err)
    })
}

//supprimer une biere
exports.deleteBeer = (req, res) => {
    Bieres.destroy({where: {id: req.params.id}})
        .then(res.status(200)) //200 = Ok biere supprimee
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //404 = Biere non trouvee
            }
        })
}

// Modifier le nom d'une biere
exports.updateName = (req, res) => {
    Bieres.findAll({where: {id: req.params.id}})
        .then(biere => {
            biere.name = req.body.name
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //404 = Biere non trouvee
            }
        })
}

// Modifier l'abv d'une biere
exports.updateABV = (req, res) => {
    Bieres.findAll({where: {id: req.params.id}})
        .then(biere => {
            biere.abv = req.body.abv
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //404 = Biere non trouvee
            }
        })
}

// Modifier la description d'une biere
exports.updateDescription = (req, res) => {
    Bieres.findAll({where: {id: req.params.id}})
        .then(biere => {
            biere.description = req.body.description
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //404 = Biere non trouvee
            }
        })
}

// Modifier la brasserie d'une biere (il n'y a pas de vérification pour regarder si le brewery_id correspond bien à brewer)
exports.updateBrewer = (req, res) => {
    Bieres.findAll({where: {id: req.params.id}})
        .then(biere => {
            biere.brewer = req.body.brewer
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //404 = Biere non trouvee
            }
        })
}

// Modifier le pays d'origne d'une biere
exports.updatePays = (req, res) => {
    Bieres.findAll({where: {id: req.params.id}})
        .then(biere => {
            biere.pays = req.body.pays
            biere.save().then(() => res.status(200)) //200 = Ok biere modifier
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(404).json({error: 'Biere non trouvee'}) //404 = Biere non trouvee
            }
        })
}

//supprimer toutes les bieres portant le nom entré
exports.deleteBeerByName = (req, res) => {
    Bieres.destroy({where: {name: req.query.name}})
        .then(res.status(200)) //200 = Ok biere supprimee
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            }
        })
}

//supprimer toutes les bière brassées dans le brasserie entrée
exports.deleteBeerByBrewer = (req, res) => {
    Bieres.destroy({where: {brewer: req.query.brewer}})
        .then(res.status(200)) //200 = Ok biere supprimee
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            }
        })
}

//supprimer toutes les bières dans la brasserie portant l'id entré
exports.deleteBeerByBrewerID = (req, res) => {
    Bieres.destroy({where: {brewery_id: req.params.brewery_id}})
        .then(res.status(200)) //200 = Ok biere supprimee
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            }
        })
}

//supprimer toutes les bière qui proviennent du pays entré
exports.deleteBeerByPays = (req, res) => {
    Bieres.destroy({where: {pays: req.params.pays}})
        .then(res.status(200)) //200 = Ok biere supprimee
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            }
        })
}

//recuperer les biere toutes les bières sans alcool
exports.getNonAlcoholicBeer = (req,res) => {
    Bieres.findAll({where: {abv : 0}})
        .then(beer => res.status(200).json(beer)) //200 = OK, bieres trouvee
        .catch(err => res.status(500).json(err)) //500 = erreur
}

//recuperer toutes les bières qui contiennent de l'alcool
exports.getOnlyAlcoholicBeer = (req,res) => {
    Bieres.findAll({where: {abv : {[Op.ne] : 0}}})
        .then(beer => res.status(200).json(beer)) //200 = OK, bieres trouvee
        .catch(err => res.status(500).json(err)) //500 = erreur
}
