const mysql = require("mysql");
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
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
