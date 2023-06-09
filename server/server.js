const express = require("express");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
// app use
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());

const userRoute = require("./routes/user.routes");

app.use("/user", userRoute);

// listening port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is live at ${PORT}`);
});
