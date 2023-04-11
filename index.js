const express = require("express");
const images = require("./model");
const connect = require("./db");
const multer = require("multer");
const app = express();

app.use("/", express.static("view"));

// storage

const store = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});



const upload = multer({
  storage: store,
}).single("avatar");




app.post("/profile", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const img = new images({
        image: {
          data: req.file.filename,
          contentType: "image/png",
        },
      });

      images.create(img);
      res.send("uploaded");
    }
  });
});




// server is listening
app.listen(8082, () => {
  console.log("server is running on port 8082");

  connect();
});
