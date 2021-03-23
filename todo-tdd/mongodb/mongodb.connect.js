const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/todo-tdd";

async function connect() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };
