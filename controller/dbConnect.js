const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  // process.env.저장해놓은 변수 선언
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: '3306',
  database: process.env.MYSQL_DB,
});

connection.connect();

module.exports = connection;
