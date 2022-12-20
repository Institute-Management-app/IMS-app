import {
  Course,
  Feedback,
  Mark,
  User,
  Student,
  Parent,
  LoginCredentials,
} from "./models.js";

Course.sync();
User.sync();
Student.sync();
Parent.sync();
LoginCredentials.sync();
Feedback.sync();
Mark.sync();
