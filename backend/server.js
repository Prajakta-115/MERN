const express = require("express"); //import package
const user = require("./data/user");
const dotenv = require("dotenv");
const app = express(); //object of the imported package
dotenv.config();
app.get("/", (req, res) => {
  res.send("API is running. .");
});

app.get("/api/user", (req, res) => {
  res.json(user);
});

app.get("/api/user/:id", (req, res) => {
  const users = user.find((u) => u._id === req.params.id);
  res.send(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
