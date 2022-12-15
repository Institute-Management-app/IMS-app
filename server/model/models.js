import sequelize from "./db_handler.js";
import { DataTypes } from "sequelize";

const Login = sequelize.define("Login", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
});
