import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signin } from "../../utils/Services/firebaseapi";

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
    signin(values, navigate, location);
    navigate("/");
  };

  return (
    <div className="mainLogin">
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
        <hr></hr>
        <div className="Sign-up-container">
          <h3>Dont have a Acount?</h3>
          <Link to="/signup">SignUp</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
