
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // Replace with your API call
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="username">Username:</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage
            name="username"
            component="p"
  
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
        <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="p" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage
            name="password"
            component="p"
          
          />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
