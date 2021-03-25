const Bieres = require('../Models').Bieres;

//Controleurs
exports.getAll = (req,res) => {
    Bieres.findAll()
        .then(all => res.status(200).json(all)) //200 = OK, all contient toutes les bieres
        .catch(err => res.status(500).json(err)) //500 = erreur
}

Bieres.create({
    req
})

