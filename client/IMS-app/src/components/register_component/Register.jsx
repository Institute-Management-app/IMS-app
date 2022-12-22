import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import accountsService from "../../services/accountsService";
import "./register.css";

// import styles from './Register.module.css'
function Register() {
  return (
    <div className="maindiv">
      <div className="page">
        <h1>Student Details </h1>

        <Formik
          initialValues={{
            name: "",
            pname: "",
            dob: "",
            pdob: "",
            phone: "",
            address: "",
            email: "",
            password: "",
            occupation: "",
            relationship: "",
            pemail: "",
            ppassword: "",
            pphone: "",
            
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().required("Password is required"),
            name: Yup.string().required("Name is required"),
            pname: Yup.string().required("Name is required"),
            dob: Yup.string().required("DOB is required"),
            pdob: Yup.string().required("Parent DOB is required"),
            phone: Yup.string().required("Phone is required"),
            address: Yup.string().required("Address is required"),
            occupation: Yup.string().required("Occupation is required"),
            relationship: Yup.string().required("Relationship is required"),
            pemail: Yup.string().email().required("Parent email is required"),
            ppassword: Yup.string().required("Parent  password  is required"),
            pphone: Yup.string().required("Parent phone is required"),
            
          })}
          onSubmit={async (values, { setSubmitting }) => {
            var service = new accountsService();
            var result = await service.register(values);
            if (!result.success) {
              alert(result.errors[0]);
              return;
            }

            alert("register Success");
          }}
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
                  Phone No.
                </label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  aria-describedby="helpId"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-danger"
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
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="text-danger"
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
                <ErrorMessage
                  name="address"
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

              <div className="parent">
                <h1>Parent Details</h1>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="pname"
                    id="pname"
                    className="form-control"
                    placeholder="Name"
                    aria-describedby="helpId"
                  />
                  <ErrorMessage
                    name="pname"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    name="pemail"
                    id="pemail"
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                  />
                  <ErrorMessage
                    name="pemail"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-1 ">
                  <label htmlFor="phone" className="form-label">
                    Phone No.
                  </label>
                  <Field
                    type="text"
                    name="pphone"
                    id="pphone"
                    className="form-control"
                    aria-describedby="helpId"
                  />
                  <ErrorMessage
                    name="pphone"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    DOB
                  </label>
                  <Field
                    type="date"
                    name="pdob"
                    id="pdob"
                    className="form-control"
                    aria-describedby="helpId"
                  />
                  <ErrorMessage
                    name="pdob"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <Field
                    type="text"
                    name="address"
                    id="paddress"
                    className="form-control"
                    aria-describedby="helpId"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="occupation" className="form-label">
                    Occupation
                  </label>
                  <Field
                    type="text"
                    name="occupation"
                    id="occupation"
                    className="form-control"
                    aria-describedby="helpId"
                  />
                  <ErrorMessage
                    name="occupation"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="relationship" className="form-label">
                    Relationship
                  </label>
                  <Field
                    type="text"
                    name="relationship"
                    id="reln"
                    className="form-control"
                    aria-describedby="helpId"
                  />
                  <ErrorMessage
                    name="relationship"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ppassword" className="form-label">
                    Password
                  </label>
                  <Field
                    type="ppassword"
                    className="form-control"
                    name="ppassword"
                    id="ppassord"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="ppassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
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
  );
}

export default Register;
