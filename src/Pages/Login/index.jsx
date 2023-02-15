import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
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
    const [user , setUser] = useState({})
    const handleCallbackResponse=(response)=>{
      console.log(response.credential);
      var userObect = jwt_decode(response.credential)
      localStorage.setItem('token', response.credential)
      console.log(userObect)
      setUser(userObect);
      document.getElementById("SignInDiv").hidden = true
      
  };
    useEffect(() => {
      /*global google*/
      google.accounts.id.initialize({
        client_id:"698008245935-qc56vp89dajkk3oeuqpb9n68uch3fu7q.apps.googleusercontent.com",
        callback:handleCallbackResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("SignInDiv"),
        {theme:"outline" ,size:"large" }
      );
    },[]);
    const handleSignout = (e) => {
      setUser({});
      document.getElementById("SignInDiv").hidden = false;
      localStorage.clear()
    }
   
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

          <button type="submit" className="Login-button">Log In</button>
        </Form>
      </Formik>
      <div id="SignInDiv"></div>
        {
          Object.keys(user).length !== 0 && <button onClick={(e)=>{
          handleSignout(e);
        }}>Sign Out</button>
        }
        
        {user && <div>
          <img src={user.picture}/>
          <h3>{user.name}</h3>
        </div>

        }
    </div>
  );
};
export default Login;
