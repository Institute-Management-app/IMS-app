import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import courseService from "../../services/courseService";
import jwt_decode from "jwt-decode";

const Apply = () => {
    return (
        <div className="container">
            <Formik
                initialValues={{
                    branch: ""
                }}
                validationSchema={Yup.object().shape({
                    branch: Yup.string().required("Branch is required")

                })}
                onSubmit={async (values, { setSubmitting }) => {
                    var service = new courseService();
                    var result = await service.applyCourse(values);

                    if (!result.success) {
                        alert(result.errors[0]);
                        return;
                    }


                    alert("Application Successful");
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                       <div className="a">
                        <h1>Choose your branch</h1>
                       <Field as="select" name="branch">
                            <option >Civil</option>
                            <option>Mechanical</option>
                            <option>Electrical</option>
                        </Field>
                        <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary"
                        >
                            Submit
                        </button>

                        </div>

                       </div>
                       
                        
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Apply;
