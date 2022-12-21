const db = require("../../../model/models");
const ResponseModel = require("../../../utilities/responseModel");

module.exports.registerUser = function (req, res) {
  const pemail = req.body.pemail;

  // db.LoginCredentials.findOne({ where: { email: pemail } }).then(
  //   (userExists) => {
  //     if (userExists) {
  //       return res
  //         .status(400)
  //         .json(new ResponseModel(null, null, ["User already exists."]));
  //     }
  //   }
  // );

  db.User.create({
    name: req.body.name,
    dob: req.body.dob,
    phone: req.body.phone,
    address: req.body.address,
  }).then((result) => {
    db.Student.create({
      user_id: result.dataValues.user_id,
      branch: req.body.branch,
      semester: "1",
    }).then((response) => {
      db.LoginCredentials.create({
        email: req.body.email,
        password: req.body.password,
        user_id: result.dataValues.user_id,
        role: "S",
      }).then((reus) => {
        {
          db.User.create({
            name: req.body.pname,
            dob: req.body.pdob,
            phone: req.body.pphone,
            address: req.body.address,
          }).then((resq) => {
            db.LoginCredentials.create({
              email: req.body.pemail,
              password: req.body.ppassword,
              user_id: resq.dataValues.user_id,
              role: "P",
            }).then((rep) => {
              db.Parent.create({
                occupation: req.body.occupation,
                relationship: req.body.relationship,
                user_id: resq.dataValues.user_id,
              }).then((sas) => {
                db.User.update(
                  {
                    relation: resq.dataValues.user_id,
                  },
                  { where: { user_id: result.dataValues.user_id } }
                );
              });
            });
          });
        }
      });
    });
  });
  res.json({ data: "Success" });
};
