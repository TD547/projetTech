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

describe("[TEST] GET route /api/bieres", () => {
    it("retourner la biere d'id=1", (done) => {
        chai.request(app)
            .get("/api/bieres/id?id=1")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});


