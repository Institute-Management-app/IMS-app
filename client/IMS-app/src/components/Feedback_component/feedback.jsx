import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import feedbackService from "../../services/feedbackService";
import './feedback.css'

const Feedback = () => {
    return (
        <div className="container3">
            <Formik
                initialValues={{
                    content: ""
                }}
                validationSchema={Yup.object().shape({
                    content: Yup.string().required("Feedback is required")

                })}
                onSubmit={async (values, { setSubmitting }) => {
                    var service = new feedbackService();
                    var result = await service.feedbackCreate(values);

                    if (!result.success) {
                        alert(result.errors[0]);
                        return;
                    }


                    alert("Feedback Sent");
                }}
            >
                {({ isSubmitting }) => (
                    <Form>

                        <h1>Provide your valuable feedback</h1>

                      
                        <Field as = "textarea"
                            type="text"
                            name="content"
                            id="content"
                            className="form-control"
                            aria-describedby="helpId"
                        />
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                style={{marginLeft:'240px', marginTop:'20px',fontFamily:'Trebuchet MS, Helvetica, sans-serif'}}
                            >
                                Send
                            </button>

                        </div>




                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Feedback;
