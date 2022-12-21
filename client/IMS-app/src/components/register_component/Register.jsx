import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./register.css";
// import AuthService from "../modules/authservice";

const Register = () => {
  return (
    <div className="maindiv">
      <div className="home">
        <div className="pic">
          <h1>
            <center>Register</center>
          </h1>
          {/* <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p> */}
        </div>
        <div className="container">
          <div className="page">
            {/* <div className={styles.reg} */}
            <div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  address: "",
                  dob: "",
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email().required("Email is required"),
                  password: Yup.string().required("Password is required"),
                })}
                // onSubmit={async (values, { setSubmitting }) => {
                //   var service = new AuthService();
                //   var result = await service.register(values);
                //   if (!result.success) {
                //     alert(result.errors[0]);
                //     return;
                //   }

                //   alert("register Success");
                //   // localStorage.setItem('token', res.data);
                // }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        aria-describedby="helpId"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <Field
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="emailHelpId"
                        placeholder="abc@mail.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-1 ">
                      <label htmlFor="phone" className="form-label">
                        Phone No.{" "}
                      </label>
                      <Field
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control"
                        aria-describedby="helpId"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dob" className="form-label">
                        DOB
                      </label>
                      <Field
                        type="date"
                        name="dob"
                        id="dob"
                        className="form-control"
                        aria-describedby="helpId"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <Field
                        type="text"
                        name="address"
                        id="address"
                        className="form-control"
                        aria-describedby="helpId"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        className="form-control"
                        name="password"
                        id="passord"
                        placeholder="Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cpassword" className="form-label">
                        Confirm Password
                      </label>
                      <Field
                        type="password"
                        className="form-control"
                        name="cpassword"
                        id="cpassword"
                        placeholder="Confirm Password"
                      />
                      <ErrorMessage
                        name="cpassword"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
