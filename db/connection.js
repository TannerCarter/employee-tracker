const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: "dogs",
  database: "employees",
});

module.exports = connection;
