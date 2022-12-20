// import Sequelize from "sequelize";
const Sequelize = require("sequelize");

const sequelize = new Sequelize("IMS", "root", "My$ql@wb", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
