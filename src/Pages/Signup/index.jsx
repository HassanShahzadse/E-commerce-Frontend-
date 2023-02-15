import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Signup.css";
import { getAuth } from "firebase/auth";
import { signup } from "../../utils/Services/firebaseapi";

const initialValues = {
  firstname: "",
  lastname: "",
  number: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  firstname: Yup.string().min(2, "Too Short!").required("Required"),
  lastname: Yup.string().min(2, "Too Short!"),
  email: Yup.string().email("Invalid email").required("Required"),
  number: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[0-9]/, "Password requires a number"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const Signup = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log("Values: ", values);
    signup(values,navigate);
    navigate("/login");
  };
  const auth = getAuth();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="userDetail">
          <label htmlFor="email"></label>
          <Field type="email" name="email" id="email" placeholder="Email" />
          <ErrorMessage name="email" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
          <div className="Double">
            <label htmlFor="firstname"></label>
            <Field
              type="name"
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
            <ErrorMessage name="firstname" />
            <label htmlFor="lastname"></label>
            <Field
              type="name"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
            />
            <ErrorMessage name="lastname" />
          </div>
          <label htmlFor="number"></label>
          <Field
            type="number"
            name="number"
            id="number"
            placeholder="03*********"
          />
          <ErrorMessage name="number" />

          <Field type="password" name="passwordConfirmation" />
          <ErrorMessage name="passwordConfirmation" />
          <button type="submit">submit</button>
          <button type="submit">
            <Link to="/home">Continue to Shopping </Link>
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default Signup;
