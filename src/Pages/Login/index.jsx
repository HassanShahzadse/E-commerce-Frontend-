import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { signin } from "../../utils/Services/firebaseapi";
import { useState } from "react";

import * as Yup from "yup";
import "./Login.css";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short  "),
});

const Login = () => {
  const redirect = useLocation();
  const location = redirect.state?.redirectedFrom.pathname;
  const navigate = useNavigate();

  const onSubmit = (values) => {
    // console.log("Values: ", values);
    signin(values,navigate, location);
    navigate("/");
  };
  //FireBase Authentication
  // const [email,setEmail]=useState('')
  // const [password,setpassword]=useState('')

  

  return (
    <div className="Login-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="Login">
          <label htmlFor="email"></label>
          <Field type="email" name="email" id="email" placeholder="Email" />
          <ErrorMessage name="email" />

          <Field type="password" name="password" placeholder="Password " />
          <ErrorMessage name="password" />

          <button type="submit" className="Login-button">
            Log In
          </button>
        
        </Form>
      </Formik>

    </div>
  );
};
export default Login;