const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routerUtilisateurWithoutToken = require("./routes/utilisateurWithoutToken");
const app = express();
const port = process.env.PORT || 8090;

const connection = require('./config/database')

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/user/withouttoken", routerUtilisateurWithoutToken);
app.use((req, res, next) => {
    res.status(404).send({
      status: 404,
      error: "Not found",
    });
  });
  app.listen(port, () => {
    console.log(`server running on port: ${port} authentification service `);
  });