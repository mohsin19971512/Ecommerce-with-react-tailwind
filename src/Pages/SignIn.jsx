import { Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function SignIn() {
    const ErrorSchema = Yup.object().shape({

    
        email: Yup.string().email("البريد الالكتروني غير صالح ").required("يرجا مليء الحقل"),
    
        password: Yup.string()
          .required("يرجى ادخال كلمة المرور")
          .min(8, "الرمز قصير جداً")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    
      });
  return (

      <div>
            <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ErrorSchema}
        onSubmit={(value) => {

            console.log(value)
            
        }
        
    }
    
        component={SignInForm}/>

    </div>
      

  )
}
