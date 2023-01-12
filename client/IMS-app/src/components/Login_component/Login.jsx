import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import accountsService from "../../services/accountsService";
import jwt_decode from "jwt-decode";
import './login.css';

const Login = () => {
  return (
    <div className="contain">
      <div className="cont">
        <div className="childcontainer1">


          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("Email is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              var service = new accountsService();
              var result = await service.login(values);
                
              if (result.data === "User does not exist") {

                alert("User does not exist");
                return;
              }
              alert("Login Success");
              localStorage.setItem("token", result.data);

              var decoded = jwt_decode(result.data);
              switch (decoded.role) {
                case "A":
                  window.location.href = "/admin";
                  break;
                case "S":
                  window.location.href = "/student";
                  break;
                default:
                  window.location.href = "/parent";
                  break;
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <h3 style={{ color: 'white', fontFamily: 'Trebuchet MS, Helvetica, sans-serif', textAlign: 'center' }}>Login</h3>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter email"
                    aria-describedby="helpId"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                    aria-describedby="helpId"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-md"
                  style={{
                    marginLeft: '130px',
                    marginTop: '20px',
                    fontFamily: 'Trebuchet MS, Helvetica, sans-serif'
                  }}
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
