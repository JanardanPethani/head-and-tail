const express = require("express");
const cors = require("cors");
const dbClient = require("./db/dbConnection.js");
const userRoute = require("./routes/user.routes.js");

dbClient.connect((err) => {
  //Connected Database
  if (err) {
    console.log(err);
  } else {
    console.log("DB Connected!");
  }
});

const app = express();
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/user", userRoute);

// listening port
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server up and running on port = ${PORT}`);
});
