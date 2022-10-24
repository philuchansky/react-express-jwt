const dotenv = require("dotenv").load(),
  express = require("express"),
  app = express(),
  logger = require("morgan"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  PORT = process.env.PORT || 3001,
  usersRoutes = require("./routes/users.js"),
  kontenRoutes = require("./routes/Konten.js"),
  JWT_SECRET = process.env.JWT_SECRET,
  MONGODB_URI = process.env.MONGODB_URI;

//CORS
const cors = require("cors");
app.use(
  cors({
    origin: "https://cms.nubisub.xyz",
    credentials: true,
  })
);

//Mongoose
mongoose.set("useCreateIndex", true);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
  console.log(err || `Connected to MongoDB.`);
});

// middleware
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(logger("dev"));
app.use(bodyParser.json());

// routes
app.get("/api", (req, res) => {
  res.json({ message: "API root." + JWT_SECRET });
});
app.use("/api/users", usersRoutes);
app.use("/api/konten", kontenRoutes);

// start server
app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}.`);
});
