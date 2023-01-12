// import Sequelize from "sequelize";
const Sequelize = require("sequelize");

const sequelize = new Sequelize("Edu", "root", "Shafsam@11", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
