const express = require("express");
const accountsRoute = require("./apps/accounts/routes");
const adminRoute = require("./apps/admin/routes");
const studentRoute = require("./apps/student/routes");
const parentRoute = require("./apps/parent/routes");
const parser = require("body-parser");
const app = express();
const authMiddleware = require("./middlewares/authMiddleware");

app.use(parser.json({ inflate: true }));
app.use(authMiddleware);
app.use("/api/v1/accounts", accountsRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/student", studentRoute);
app.use("/api/v1/parent", parentRoute);

app.listen(80);
