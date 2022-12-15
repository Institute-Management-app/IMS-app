import sequelize from "./db_handler.js";
import { DataTypes } from "sequelize";

const Login = sequelize.define("Login", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});

const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },

  gender: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  bloodGroup: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  address: {
    type: DataTypes.STRING(250),
    allowNull: true,
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

  loginId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Login,
      key: "id",
    },
  },
});

const Parent = sequelize.define("Parent", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  fatherName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  motherName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  fatherOccupation: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  motherOccupation: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  address: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },

  loginId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Login,
      key: "id",
    },
  },

  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: "id",
    },
  },
});

// course models
const Course = sequelize.define("Course", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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

// subject model
const Subject = sequelize.define("Subject", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  subjectName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  semester: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Course,
      key: "id",
    },
  },
});

// mark model
const Mark = sequelize.define("Mark", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  mark: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: "id",
    },
  },

  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subject,
      key: "id",
    },
  },
});
// association of student and mark
Student.hasOne(Mark, {
  foreignKey: "studentId",
  sourceKey: "id",
});
Mark.belongsTo(Student, {
  foreignKey: "studentId",
  targetKey: "id",
});

export { Login, Student, Parent, Course, Subject, Mark };
