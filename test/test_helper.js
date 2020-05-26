const mongoose = require("mongoose");

before(done => {
  mongoose.connect("mongodb://127.0.0.1/uber_test", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  });
  mongoose.connection
    .once("open", () => done())
    .on("error", error => console.log(error));
});
beforeEach(done => {
  try {
    mongoose.connection.collections["drivers"].drop(err => {
      console.log("collection dropped");
      done();
    });
  } catch (error) {
    console.log(error);
  }
});
