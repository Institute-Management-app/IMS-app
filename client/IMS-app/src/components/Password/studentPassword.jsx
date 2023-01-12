import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import passwordService from "../../services/passwordService";
import jwt_decode from "jwt-decode";

const SPassword = () => {
    return (
        <div className="container">
            <Formik
                initialValues={{
                    password: ""
                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string().required("Password is required")

                })}
                onSubmit={async (values, { setSubmitting }) => {
                    var service = new passwordService();
                    var result = await service.passwordUpdate(values);

                    if (!result.success) {
                        alert(result.errors[0]);
                        return;
                    }


                    alert("Password Changed successfully");
                }}
            >
                {({ isSubmitting }) => (
                    <Form>

                        <h1>Change your password</h1>

                        <label htmlFor="password" className="form-label">
                            New Password
                        </label>
                        <Field
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            aria-describedby="helpId"
                        />
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                            >
                                Confirm
                            </button>

                        </div>




                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SPassword;
