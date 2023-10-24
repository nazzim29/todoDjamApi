// categorie controller test

const request = require("supertest");

const app = require("../src/app");

describe("GET /api/v1/categories", () => {
	it("responds with a json message", (done) => {
		request(app)
			.get("/api/v1/categories")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(
				200,
				{
					message: "categorie index",
				},
				done
			);
	});
});

describe("POST /api/v1/categories", () => {
	it("responds with a json message", (done) => {
		request(app)
            .post("/api/v1/categories")
            .send({
                name: "test"
            })
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(
				200,
				{
					message: "categorie store",
				},
				done
			);
	});
});
// put request 
describe("PUT /api/v1/categories/:id", () => {
    it("responds with a json message", (done) => {
        request(app)
            .put("/api/v1/categories/1")
            .send({
                name: "test"
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(
                200,
                {
                    message: "categorie update",
                },
                done
            );
    });
});
// get by id

describe("GET /api/v1/categories/:id", () => {
    it("responds with a json message", (done) => {
        request(app)
            .get("/api/v1/categories/1")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(
                200,
                {
                    message: "categorie show",
                },
                done
            );
    });
});