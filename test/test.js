let server = require('../server/server');
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp); 

describe('Ticket APIs', () => {

    describe("Test GET route /api/tickets", () => {
        it("It should return all tickets", (done) => {
            chai.request(server)
                .get("/api/tickets")
                .end((err, response) => {
                    response.body.should.be.a('object');
                done();
                });
        });
 
        it("It should NOT return all the tickets", (done) => {
            chai.request(server)
                .get("/api/tickets")
                .end((err, response) => {
                    response.body.should.be.a('object');
                done();
                });
        });

    });

});