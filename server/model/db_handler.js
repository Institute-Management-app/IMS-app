import Sequelize from "sequelize";

const sequelize = new Sequelize("IMS", "root", "My$ql@wb", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
