import React from "react";
import { Form, Field } from "formik";
import styles from "./Contactform.module.css";
import validate from "../componentApi/validate";
export default function SignUpForm({ errors, touched }) {


  return (
    <Form >
      <div className="bg-grey-lighter min-h-screen flex flex-col mt-3">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center"> أنشاء حساب</h1>
            {touched.firstname && errors.firstname && (
              <div className="text-red-700 flex self-end">{errors.firstname}</div>
            )}
            <Field
              type="text"
              className={
                touched.firstname
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.firstname
                        ? `${styles.invalid}`
                        : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="firstname"
              placeholder="الأسم الاول"
            />
            
            {touched.lastname && errors.lastname && (
              <div className="text-red-700 flex self-end">{errors.lastname}</div>
            )}
            <Field
              type="text"
              className={
                touched.lastname
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.lastname
                        ? `${styles.invalid}`
                        : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="lastname"
              placeholder="الأسم الاخير"
            />
           
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
              <div  className="text-red-700 flex self-end">{errors.password}</div>
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
            
            {touched.Vpassword && errors.Vpassword && (
              <div  className="text-red-700 flex self-end">{errors.Vpassword}</div>
            ) }
            <Field
              type="password"
              className={
                touched.Vpassword
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.Vpassword
                        ? `${styles.invalid}`
                        : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="Vpassword"
              placeholder="أعادة كلمة السر"
            />
            

            <button
              type="submit"
              
              className="w-full text-center py-3 rounded text-slate-50 hover:text-black bg-green-900 border-green-900    hover:bg-green-dark focus:outline-none my-1"
            >
              أنشاء حساب
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
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </Form>
  );
}
