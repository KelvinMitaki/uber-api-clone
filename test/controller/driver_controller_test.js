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
  it("PUTS to api/drivers/id to edit an existing user", async () => {
    const driver = new Driver({ email: "t@t.com", driving: false });
    await driver.save();
    await request(app)
      .put(`/api/drivers/${driver._id}`)
      .send({ driving: true });
    const editedDriver = await Driver.findById(driver._id);
    assert(editedDriver.driving === true);
  });
  it("DELETE to api/drivers/id to delete an existing user", async () => {
    const driver = new Driver({ email: "g@gmail.com" });
    await driver.save();
    await request(app).delete(`/api/drivers/${driver._id}`);
    const delDriver = await Driver.findById(driver._id);
    assert(delDriver === null);
  });
  it("GET drivers within a given radius", async () => {
    try {
      const seattleDriver = new Driver({
        email: "seattle@test.com",
        geometry: { type: "Point", coordinates: [-122, 47] }
      });

      const miamiDriver = new Driver({
        email: "miami@gmail.com",
        geometry: { type: "Point", coordinates: [-80.2, 25.7] }
      });

      Promise.all([await seattleDriver.save(), await miamiDriver.save()]);
      const drivers = await request(app).get(`/api/drivers?lng=-80&lat=25`);
      console.log(drivers);
    } catch (error) {
      console.log(error);
    }
  });
});
