// import Sequelize from "sequelize";
const Sequelize = require("sequelize");

const sequelize = new Sequelize("test1", "root", "rootpassword", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
