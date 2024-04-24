const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const routerCompteFormateur = require("./routes/compteFormateur");
const app = express();
const port = process.env.PORT || 8089;

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
// passpowt config
app.use(passport.initialize());
app.use(passport.session());
const passport_formateur = require("./config/formateur")(passport);
const  config_passport_formateur = passport.authenticate("user-rule", { session: false });
// end passport config
app.use("/api/compteformateur", config_passport_formateur, routerCompteFormateur);

app.use((req, res, next) => {
    res.status(404).send({
      status: 404,
      error: "Not found",
    });
  });
  app.listen(port, () => {
    console.log(`server running on port: ${port} compte instructor service `);
  });