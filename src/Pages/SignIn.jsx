import { Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import SignInForm from './SignInForm';
import { login } from "../store/userSlice";
import {Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
    const ErrorSchema = Yup.object().shape({

    
      phone_number: Yup.string()
      .required("يرجا كتابة رقم الهاتف")
      .matches(/^(((?:\+|00)964)|(0)*)7\d{9}$/,"رقم الهاتف غير صالح"),
    
        password: Yup.string()
          .required("يرجى ادخال كلمة المرور")
          .min(8, "الرمز قصير جداً")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    
      });
      const dispatch = useDispatch()

      const {error} = useSelector((state)=>state.user)
      const {isLogged} = useSelector((state)=>state.user)
      if(isLogged)
      return <Navigate to="/"/>
  return (

      <div>
        {error && (
        <div
          class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span class="font-medium"> {error}</span>
        </div>
      )}
            <Formik
        initialValues={{
          phone_number: "",
          password: "",
        }}
        validationSchema={ErrorSchema}
        onSubmit={(value) => {

            dispatch(login(value))
            
        }
        
    }
    
        component={SignInForm}/>

    </div>
      

  )
}
