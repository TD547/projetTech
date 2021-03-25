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
    Bieres.findOne({where: {id: 1}})
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
            res.status(200).json()
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
                    res.status(400).json({error: 'Biere non trouvee'}) //400 = Biere non trouvee
                }
            })
    }

// Modifier le nom d'une biere
exports.updateName = (req,res) => {
    Bieres.findOne({where: {id: req.params.id}})
        .then(res.status(200)) //200 = Ok biere supprimee
        .catch(err => {
            if (err) {
                res.status(500).json(err) //500 = erreur
            } else {
                res.status(400).json({error: 'Biere non trouvee'}) //400 = Biere non trouvee
            }
        })
}





