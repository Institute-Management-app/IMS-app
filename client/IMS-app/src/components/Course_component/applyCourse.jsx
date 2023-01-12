import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import courseService from "../../services/courseService";
import './apply.css';
const Apply = () => {
    return (
        <div className="childcontainer2">
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
                            <Field className="select" as="select" name="branch">
                                <option >Civil</option>
                                <option>Mechanical</option>
                                <option>Electrical</option>
                            </Field>
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary"
                                    style={{ marginLeft: '150px', marginTop: '20px', fontFamily: 'Trebuchet MS, Helvetica, sans-serif' }}

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
