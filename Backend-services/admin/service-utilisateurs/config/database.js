const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "mydb",
  database: "management",
  user: "root",
  password: "VdZDPFXDxpedA123",
});
module.exports = connection

  /**
   * 
  const connection = mysql.createConnection({
    host: "localhost",
    database: "management",
    user: "linsoftxtrapp",
    password: "VdZDPFXDxpedA123",
  });
  module.exports = connection
   */