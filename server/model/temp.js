import sequelize from "./db_handler.js";
import { DataTypes } from "sequelize";

// Define login model
const Login = sequelize.define("Login", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(150),
    allowNull: false,
    defaultValue: "1234",
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

// Define student model
const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  mobileNo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  bloodGroup: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  class_12: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  class_10: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  entranceScore: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  course: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
});
Login.hasOne(Student, {
  foreignKey: "loginId",
});

Student.belongsTo(Login);

// Define parent model
const Parent = sequelize.define("Parent", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    primaryKey: true,
  },
  fatherName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  motherName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  mobileNo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  fatherOccupation: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  motherOccupation: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: "cascade",
    references: {
      model: "students",
      key: "id",
    },
  },
});
Login.hasOne(Parent, {
  foreignKey: "loginId",
});
Parent.belongsTo(Login);

// Define course model
const Course = sequelize.define("Course", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  courseName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  courseDuration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fee: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define subject model
const Subject = sequelize.define("Subject", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  subjectName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  semester: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
Course.hasMany(Subject, {
  foreignKey: "courseId",
});
Subject.belongsTo(Course, {
  foreignKey: "courseId",
  onDelete: "CASCADE",
  constraints: true,
});

// Define  mark model
const Mark = sequelize.define("Mark", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  mark: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: "CASCADE",
    references: {
      model: "students",
      key: "id",
    },
  },
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: "CASCADE",
    references: {
      model: "subjects",
      key: "id",
    },
  },
});

export { Login, Student, Parent, Course, Subject, Mark };
