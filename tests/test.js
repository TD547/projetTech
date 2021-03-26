const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);


describe("[TEST] GET route /api/bieres", () => {
    it("retourner toutes les bieres", (done) => {
        chai.request(app)
            .get("/api/bieres")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});

describe("[TEST] GET route /api/bieres/:id", () => {
    it("retourner la biere d'id=1", (done) => {
        chai.request(app)
            .get("/api/bieres/1")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});

describe("[TEST] GET route /api/bieres/underABV", () => {
    it("retourner les bieres avec un ABV inferieur ou egale a 4", (done) => {
        chai.request(app)
            .get("/api/bieres/underABV?abv=4")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});

//Test recherche biere par nom
describe("[TEST] GET route /api/bieres/name", () => {
    it("retourner les bieres avec le nom = Lucifer", (done) => {
        chai.request(app)
            .get("/api/bieres/name?name=Lucifer")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});

//Test recherche les bieres avec un abv superieur ou egale a 3
describe("[TEST] GET route /api/bieres/overABV", () => {
    it("retourner les bieres avec un ABV superieur ou egale a 3", (done) => {
        chai.request(app)
            .get("/api/bieres/overABV?abv=3")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});

//Test recherchant les bieres provenant de la Belgique
describe("[TEST] GET route /api/bieres/pays", () => {
    it("retourner les bieres provenant de la Belgique", (done) => {
        chai.request(app)
            .get("/api/bieres/pays?pays=Belgium")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});

//Test recherchant les bieres provenant de la brasserie Magic Hat
describe("[TEST] GET route /api/bieres/underABV", () => {
    it("retourner les bieres provenant de Magic Hat", (done) => {
        chai.request(app)
            .get("/api/bieres/brewername?brewer=Magic Hat")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});

//Test ajoutant une biere
describe("[TEST] GET route /api/bieres/addbeer", () => {
    it("Ajouter une biere", (done) => {
        chai.request(app)
            .put("/api/bieres/addbeer")
            .send({brewery_id: 2,name:'iut_beer',abv: 5,description:'biere de iut',brewer:'IUT',pays:'France'})
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
});

//Test supprimant une biere
describe("[TEST] GET route /api/bieres/deletebeer", () => {
    it("Supprimer la biere avec id = 3", (done) => {
        chai.request(app)
            .delete("/api/bieres/deleteBeer/3")
            .end((err, res) => {
                res.should.have.status(201);
            });
        done()
    });
});

//Test modifiant le nom de la biere avec l'id = 8
describe("[TEST] GET route /api/bieres/updateName", () => {
    it("Modifier une biere", (done) => {
        chai.request(app)
            .post("/api/bieres/updateName/8")
            .send({name:"Salty Beer"})
            .end((err, res) => {
                res.should.have.status(200);
            });
        done()
    });
});

//Test modifiant le taux moyen d'alcool d'une biere avec l'id = 5
describe("[TEST] GET route /api/bieres/updateABV", () => {
    it("Modifier le taux", (done) => {
        chai.request(app)
            .post("/api/bieres/updateABV/5")
            .send({abv:6})
            .end((err, res) => {
                res.should.have.status(200);
            });
        done()
    });
});

