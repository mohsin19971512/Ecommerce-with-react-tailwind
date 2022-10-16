import { Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import SignUpForm from './SignUpForm';

export default function SignUp() {
    const ErrorSchema = Yup.object().shape({
        firstname: Yup.string()
          .required("يرجا ادخال الاسم")
          .min(1, "too Short")
          .max(12, "Too Long"),
    
        lastname: Yup.string()
          .required("يرجا ادخال الأسم")
          .min(1, "قصير جداً")
          .max(12, "طويل جداً"),
    
        email: Yup.string().email("البريد الالكتروني غير صالح ").required("يرجا كتابة البريد الالكتروني"),
    
        password: Yup.string()
          .required("يرجى ادخال كلمة المرور")
          .min(8, "كلمة السر قصيرة")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    
          Vpassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "كلمة السر يجب ان تكون متطابقة "
        ),
      });
  return (

      <div>
            <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          Vpassword: "",
        }}
        validationSchema={ErrorSchema}
        onSubmit={(value) => {

            console.log(value)
            
        }
        
    }
    
        component={SignUpForm}/>

    </div>
      

  )
}
