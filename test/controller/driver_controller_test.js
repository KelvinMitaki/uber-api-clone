const assert = require("assert");
const request = require("supertest");
const app = require("../../app");

describe("Drivers Controller", () => {
  it("Posts to /api/drivers to create a new driver", async () => {
    await request(app).post("/api/drivers").send({ email: "test@test.com" });
  });
});
