  const mysql = require("mysql");
  const connection = mysql.createConnection({
      host: "mydb",
      database: "management",
      user: "root",
      password: "VdZDPFXDxpedA123",
    });
    module.exports = connection