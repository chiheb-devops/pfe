const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const routerFournisseur = require("./routes/fournisseur");
const app = express();
const port = process.env.PORT || 8086;

const connection = require('./config/database');

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
const passport_admin = require("./config/passport")(passport);
const  config_passport_admin = passport.authenticate("admin-rule", { session: false });
// end passport config
app.use("/api/fournisseur", config_passport_admin, routerFournisseur);
app.use((req, res, next) => {
    res.status(404).send({
      status: 404,
      error: "Not found",
    });
  });
  app.listen(port, () => {
    console.log(`server running on port: ${port} customer service `);
  });