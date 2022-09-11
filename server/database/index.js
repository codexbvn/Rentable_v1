const config = require("./db.config");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

intialize();

async function intialize() {
  const { HOST, PORT, USER, PASSWORD, DB } = config;
  const connection = await mysql.createConnection({
    HOST,
    PORT,
    USER,
    PASSWORD,
    DB,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB}\`;`);

  //CONNECT TO DB
  const sequelize = new Sequelize(DB, USER, PASSWORD, {
    dialect: "mysql",
  }).showAllSchemas();

  await sequelize.sync({ alter: true });
}
