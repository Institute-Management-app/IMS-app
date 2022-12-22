import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import courseService from "../../services/courseService";
import jwt_decode from "jwt-decode";

const CourseCreate = () => {
  return (
    <div className="container">
      <Formik
        initialValues={{
          course_name: "",
          branch: "",
          semester: "",
          fees: ""

        }}
        validationSchema={Yup.object().shape({
          course_name: Yup.string().required("Course name is required"),
          branch: Yup.string().required("Branch is required"),
          semester: Yup.string().required("Semester is required"),
          fees: Yup.string().required("Fees is required"),

        })}
        onSubmit={async (values, { setSubmitting }) => {
          var service = new courseService();
          var result = await service.courseCreate(values);

          if (!result.success) {
            alert(result.errors[0]);
            return;
          }

          alert("Course created successfully");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="course_name" className="form-label">
                Course Name
              </label>
              <Field
                type="text"
                name="course_name"
                id="course_name"
                className="form-control"
                aria-describedby="helpId"
              />
              <ErrorMessage
                name="course_name"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="branch" className="form-label">
                Branch
              </label>
              <Field
                type="text"
                name="branch"
                id="branch"
                className="form-control"
                aria-describedby="helpId"
              />
              <ErrorMessage
                name="branch"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fees" className="form-label">
                Semester
              </label>
              <Field
                type="text"
                name="semester"
                id="semester"
                className="form-control"
                aria-describedby="helpId"
              />
              <ErrorMessage
                name="semester"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fees" className="form-label">
                Fees
              </label>
              <Field
                type="text"
                name="fees"
                id="branch"
                className="form-control"
                aria-describedby="helpId"
              />
              <ErrorMessage
                name="fees"
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

export default CourseCreate;
