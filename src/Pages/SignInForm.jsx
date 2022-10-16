import React from "react";
import { Form, Field } from "formik";
import styles from "./Contactform.module.css";
import validate from "../componentApi/validate";
import { Link } from "react-router-dom";
export default function SignInForm({ errors, touched }) {


  return (
    <Form >
      <div className="bg-grey-lighter min-h-screen flex flex-col mobile:mt-[-100px] mt-[-50px] ">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">تسجيل دخول </h1>
            
           
           {touched.email && errors.email && (
              <div className="text-red-700 flex self-end">{errors.email}</div>
            ) }

            <Field
              type="text"
              className={
                touched.email
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.email
                        ? `${styles.invalid}`
                        : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="email"
              placeholder="البريد الالكتروني"
            />
            
            {touched.password && errors.password && (
              <div className="text-red-700 flex self-end">{errors.password}</div>
            ) }
            <Field
              type="password"
              className={
                touched.password
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.password
                        ? `${styles.invalid}`
                        : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="password"
              placeholder="كلمة السر"
            />
            

           

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-900 text-slate-50 hover:text-black border-green-900  hover:bg-green-dark focus:outline-none my-1"
            >
              تسجيل الدخول 
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
 ليس لديك حساب ؟           <Link to=""
              className="no-underline border-b border-blue text-blue"
              href="../register"
            >
              انشاء حساب
            </Link>
            .
          </div>
        </div>
      </div>
    </Form>
  );
}
