import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from '../../firebase'
export const signin = (values,navigate,location) => {
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Succesfull Sign In");
      localStorage.setItem("token",user.accessToken);
      location?navigate(location):navigate("/home");
      navigate("/home")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
    });
};
export const signup = (values,navigate) =>{
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(values.email)
      console.log(user)
      alert("Succesfull")  
      navigate("/login") 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
      // ..
    });
}