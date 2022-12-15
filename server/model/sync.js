import { Login, Student, Parent, Course, Subject, Mark } from "./models.js";

// Sync models with database.
Login.sync({ alter: true });

Student.sync({ alter: true });

// associations of student and login
Login.hasOne(Student, {
  foreignKey: "loginId",
  sourceKey: "id",
});
Student.belongsTo(Login, {
  foreignKey: "loginId",
  targetKey: "id",
});

Parent.sync({ alter: true });

// associations of parent and login
Login.hasOne(Parent, {
  foreignKey: "loginId",
  sourceKey: "id",
});
Parent.belongsTo(Login, {
  foreignKey: "loginId",
  targetKey: "id",
});

// associations of student and login
Student.hasOne(Parent, {
  foreignKey: "studentId",
  sourceKey: "id",
});
Parent.belongsTo(Student, {
  foreignKey: "studentId",
  targetKey: "id",
});

Course.sync({ alter: true });

Subject.sync({ alter: true });

// associations of course and subject
Course.hasMany(Subject, {
  foreignKey: "courseId",
  sourceKey: "id",
});

Subject.belongsTo(Course, {
  foreignKey: "courseId",
  constraints: true,
  onDelete: "CASCADE",
  targetKey: "id",
});

Mark.sync({ alter: true });

// association of subject and mark
Subject.hasOne(Mark, {
  foreignKey: "subjectId",
  sourceKey: "id",
});
Mark.belongsTo(Subject, {
  foreignKey: "subjectId",
  targetKey: "id",
});
