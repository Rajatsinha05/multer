const mongoose = require("mongoose");

let img = new mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String,
  },
});

let images = mongoose.model("imge", img);

module.exports = images;
