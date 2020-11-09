const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const sequelize = require("./config/db");
sequelize
  .authenticate()
  .then(() => console.log("datbase connected"))
  .catch((err) => console.log(err));

const shopingcart = require("./routers/shopingcart");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(fileUpload());
app.get("/", (req, res) => {
  res.send("hello user");
});
app.use("/auth",require("./routers/jwtAuth"));
app.use("/dashboard",require("./routers/dashboard"));
app.use(shopingcart);

app.listen(5000, () => {
  console.log("server started");
});
