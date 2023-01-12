// import {
//   Course,
//   Feedback,
//   Mark,
//   User,
//   Student,
//   Parent,
//   LoginCredentials,
// } from "./models.js";
const {Course,
    Feedback,
    Mark,
    User,
    Student,
    Parent,
    LoginCredentials} = require("./models")

Course.sync();
User.sync();
Student.sync();
Parent.sync();
LoginCredentials.sync();
Feedback.sync();
Mark.sync();
