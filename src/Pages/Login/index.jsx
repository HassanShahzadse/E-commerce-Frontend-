import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const onSubmit = values => {
      console.log("Values: ", values);
      navigate("/home");
    };
   
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="Login">
          <label htmlFor="email"></label>
          <Field type="email" name="email" id="email" placeholder="Email" />
          <ErrorMessage name="email" />

          <Field type="password" name="password" />
          <ErrorMessage name="password" />

          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
