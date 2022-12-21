import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from 'yup';
import accountsService from "../../services/accountsService"
import './register.css'

// import styles from './Register.module.css'
function Register() {
  return (
    <div className="maindiv">
          <div className="page">
            <h1>Student Details </h1> 
        
              <Formik
                initialValues={{  name: "",pname:"",dob:"",pdob:"",phone:"",address:"",email:"",          password:"",
                    occupation:"",relationship:"" ,pemail:"",ppassword:"",pphone:"",branch:"" }}
                validationSchema={
                  Yup.object().shape({
                    email: Yup.string().email().required('Email is required'),
                    password: Yup.string().required('Password is required'),
                    name: Yup.string().required('Name is required'),
                    pname: Yup.string().required('Name is required'),
                    dob: Yup.string().required('DOB is required'),
                    pdob: Yup.string().required('Parent DOB is required'),
                    phone: Yup.string().required('Phone is required'),
                    address: Yup.string().required('Address is required'),
                    occupation: Yup.string().required('Occupation is required'),
                    relationship: Yup.string().required('Relationship is required'),
                    pemail: Yup.string().required('Parent email is required'),
                    ppassword: Yup.string().required('Parent  password  is required'),
                    pphone: Yup.string().required('Parent phone is required'),
                    branch: Yup.string().required('Branch is required'),
                    
                  })
                }
                onSubmit={async (values, { setSubmitting }) => {
                  var service = new accountsService();
                  var result = await service.register(values);
                  if (!result.success) {
                    alert(result.errors[0]);
                    return;
                  }

                  alert('register Success');
                  // localStorage.setItem('token', result.data);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div class="mb-3">
                      <label for="name" class="form-label">Name</label>
                      <Field type="text" name="name" id="name" class="form-control" placeholder="Name" aria-describedby="helpId" />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <Field type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="abc@mail.com" />
                      <ErrorMessage name="email" component="div" className='text-danger' />
                    </div>
                    <div class="mb-1 ">
                      <label for="phone" class="form-label">Phone No. </label>
                      <Field type="text" name="phone" id="phone" class="form-control" aria-describedby="helpId" />
                      <ErrorMessage name="phone" component="div" className='text-danger' />                   
                    </div>
                    <div class="mb-3">
                      <label for="dob" class="form-label">DOB</label>
                      <Field type="date" name="dob" id="dob" class="form-control" aria-describedby="helpId" />
                      <ErrorMessage name="dob" component="div" className='text-danger' /> 
                    </div>
                    <div class="mb-3">
                      <label for="address" class="form-label">Address</label>
                      <Field type="text" name="address" id="address" class="form-control" aria-describedby="helpId" />
                      <ErrorMessage name="address" component="div" className='text-danger' />                    
                    </div>
                    <div class="mb-3">
                      <label for="branch" class="form-label">Branch</label>
                      <Field type="text" class="form-control" name="branch" id="passord" />
                      <ErrorMessage name="branch" component="div" className='text-danger' />
                    </div>    
                    <div class="mb-3">
                      <label for="password" class="form-label">Password</label>
                      <Field type="password" class="form-control" name="password" id="passord" placeholder="Password" />
                      <ErrorMessage name="password" component="div" className='text-danger' />
                    </div>                  
                                     
                    <div className="parent">
                    
                      <h1>Parent Details</h1>
                      <div class="mb-3">
                      <label for="name" class="form-label">Name</label>
                      <Field type="text" name="pname" id="name" class="form-control" placeholder="Name" aria-describedby="helpId" />
                      <ErrorMessage name="pname" component="div" className='text-danger' /> 
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <Field type="email" class="form-control" name="pemail" id="email" aria-describedby="emailHelpId" placeholder="abc@mail.com" />
                      <ErrorMessage name="pemail" component="div" className='text-danger' />
                    </div>
                    <div class="mb-1 ">
                      <label for="phone" class="form-label">Phone No. </label>
                      <Field type="text" name="pphone" id="phone" class="form-control" aria-describedby="helpId" />
                      <ErrorMessage name="pphone" component="div" className='text-danger' /> 
                    </div>
                    <div class="mb-3">
                      <label for="dob" class="form-label">DOB</label>
                      <Field type="date" name="pdob" id="dob" class="form-control" aria-describedby="helpId" />
                      <ErrorMessage name="pdob" component="div" className='text-danger' /> 
                    </div>
                    <div class="mb-3">
                      <label for="address" class="form-label">Address</label>
                      <Field type="text" name="address" id="address" class="form-control" aria-describedby="helpId" />
                      <ErrorMessage name="address" component="div" className='text-danger' /> 
                    </div>
                    <div class="mb-3">
                      <label for="occupation" class="form-label">Occupation</label>
                      <Field type="text" name="occupation" id="address" class="form-control" aria-describedby="helpId" />
                      <ErrorMessage name="occupation" component="div" className='text-danger' /> 
                    </div>
                    <div class="mb-3">
                      <label for="relationship" class="form-label">Relationship</label>
                      <Field type="text" name="relationship" id="address" class="form-control" aria-describedby="helpId" />
                      <ErrorMessage name="relationship" component="div" className='text-danger' /> 
                    </div>
                    <div class="mb-3">
                      <label for="ppassword" class="form-label">Password</label>
                      <Field type="ppassword" class="form-control" name="ppassword" id="passord" placeholder="Password" />
                      <ErrorMessage name="ppassword" component="div" className='text-danger' />
                    </div>                  
                     
                    </div>

                    <button type="submit" disabled={isSubmitting} class="btn btn-primary">Submit</button>
                  </Form>

                )}

              </Formik>

            </div>

          </div>    
  );
}

export default Register;

