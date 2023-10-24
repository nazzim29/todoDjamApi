// task controller test

const request = require("supertest");

const app = require("../src/app");

describe("GET /api/v1/tasks", () => {
	it("responds with a json message", (done) => {
		request(app)
			.get("/api/v1/tasks")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(
				200,
				{
					message: "task index",
				},
				done
			);
	});
});

describe("POST /api/v1/tasks", () => {
	it("responds with a json message", (done) => {
		request(app)
			.post("/api/v1/tasks")
			.send({
				name: "test",
			})
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect(
				200,
				{
					message: "task store",
				},
				done
			);
	});
});

// put request
describe("PUT /api/v1/tasks/:id", () => {
    it("responds with a json message", (done) => {
        request(app)
            .put("/api/v1/tasks/1")
            .send({
                name: "test",
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(
                200,
                {
                    message: "task update",
                },
                done
            );
    });
});

// get by id

describe("GET /api/v1/tasks/:id", () => {
    it("responds with a json message", (done) => {
        request(app)
            .get("/api/v1/tasks/1")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(
                200,
                {
                    message: "task show",
                },
                done
            );
    });
});

