import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
 import * as Yup from 'yup'
import './UserDetails.css'
const initialValues = {
    country: "",
    firstname: "",
    lastname: "",
    address:"",
    city: "",
    postalcode: "",
    number:"",
    email:""
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = Yup.object({
    firstname: Yup.string()
     .min(2, 'Too Short!')
     .required('Required'),
   lastname: Yup.string()
     .min(2, 'Too Short!')
     .required('Required'),
     email: Yup.string().email('Invalid email').required('Required'),
     number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
     address: Yup.string()
     .min(6, 'Too Short!')
     .required('Required'),
     city: Yup.string()
     .min(2, 'Too Short!')
     .required('Required'),
     postalcode: Yup.string()
     .min(5, 'Too Short!')
     .required('Required'),

})
const UserDetails = ()=>{

    
    return( <div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        >
     <Form className="userDetail">
     <select name="country" id="country">
  <option value="Pakistan">Pakistan</option>
  </select>
        <div className="Double">
     <label htmlFor="firstname"></label>
    <Field type="firstname" name="firstname" id="firstname" placeholder="First Name"
    />
    <ErrorMessage name='firstname'/>
    <label htmlFor="lastname"></label>
    <Field type="lastname" name="lastname" id="lastname" placeholder="Last Name"/>
    <ErrorMessage name='lastname'/>
    </div>
    <label htmlFor="address"></label>
    <Field type="address" name="address" id="address" placeholder="Address"
    />
    <ErrorMessage name='address'/>
    <div className="Double">
    <label htmlFor="city"></label>
    <Field type="city" name="city" id="city" placeholder="City"
    />
    <ErrorMessage name='city'/>
    <label htmlFor="postalcode"></label>
    <Field type="postalcode" name="postalcode" id="postalcode" placeholder="Please Enter 5 digit Postal Code"
    />
    <ErrorMessage name='postalcode'/>
    </div>
    <label htmlFor="number"></label>
    <Field type="number" name="number" id="number" placeholder="03*********"
    />
    <ErrorMessage name='number'/>
    <label htmlFor="email"></label>
    <Field type="email" name="email" id="email" placeholder="Email"
    />
    <ErrorMessage name='email'/>
    </Form>
   
        </Formik>
        <div className="buttons">
         <p><Link to="../">Return to cart</Link></p>

         <button className="continueShoping"><Link to="/home">Continue to Shopping </Link></button>
        </div>

        </div>
        
    )
}
export default UserDetails;