const assert = require("assert");
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../app");

const Driver = mongoose.model("Driver");

describe("Drivers Controller", () => {
  it("Posts to /api/drivers to create a new driver", async () => {
    const count = await Driver.countDocuments();
    await request(app).post("/api/drivers").send({ email: "test@test.com" });
    const newCount = await Driver.countDocuments();
    assert(count + 1 === newCount);
  });
});
