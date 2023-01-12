import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import markService from "../../services/markService";
import jwt_decode from "jwt-decode";
import './mark.css'

const markAdd = () => {
  return (
    <div className="c">
      <Formik
        initialValues={{
          user_id: "",
          course_id: "",
          mark: ""

        }}
        validationSchema={Yup.object().shape({
          user_id: Yup.string().required("Student id is required"),
          course_id: Yup.string().required("Course id is required"),
          mark: Yup.string().required("Mark is required"),

        })}
        onSubmit={async (values, { setSubmitting }) => {
          var service = new markService();
          var result = await service.markCreate(values);

          if (!result.success) {
            alert(result.errors[0]);
            return;
          }

          alert("Mark added successfully");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="user_id" className="form-label">
                Student Id
              </label>
              <Field
                type="text"
                name="user_id"
                id="user_id"
                className="form-control"
                aria-describedby="helpId"
              />
              <ErrorMessage
                name="user_id"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="course_id" className="form-label">
                Course Id
              </label>
              <Field
                type="text"
                name="course_id"
                id="course_id"
                className="form-control"
                aria-describedby="helpId"
              />
              <ErrorMessage
                name="course_id"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mark" className="form-label">
                Mark
              </label>
              <Field
                type="text"
                name="mark"
                id="mark"
                className="form-control"
                aria-describedby="helpId"
              />
              <ErrorMessage
                name="mark"
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
  );
};

export default markAdd;
