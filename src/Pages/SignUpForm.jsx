import React from "react";
import { Form, Field } from "formik";
import styles from "./Contactform.module.css";
import validate from "../componentApi/validate";
import { Link } from "react-router-dom";
export default function SignUpForm({ errors, touched }) {
  return (
    <Form>
      <div className="bg-grey-lighter min-h-screen flex flex-col mobile:mb-[120px] mobile:mt-[-40px] xl:m-3">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center"> أنشاء حساب</h1>
            {touched.first_name && errors.first_name && (
              <div className="text-red-700 flex self-end">
                {errors.first_name}
              </div>
            )}
            <Field
              type="text"
              className={
                touched.first_name
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.first_name
                        ? `${styles.invalid}`
                        : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="first_name"
              placeholder="الأسم الاول"
            />

            {touched.last_name && errors.last_name && (
              <div className="text-red-700 flex self-end">
                {errors.last_name}
              </div>
            )}
            <Field
              type="text"
              className={
                touched.last_name
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.last_name ? `${styles.invalid}` : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="last_name"
              placeholder="الأسم الاخير"
            />

            {touched.address1 && errors.address1 && (
              <div className="text-red-700 flex self-end">
                {errors.address1}
              </div>
            )}
            <Field
              type="text"
              className={
                touched.address1
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.address1 ? `${styles.invalid}` : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="address1"
              placeholder=" العنوان مثل (بغداد حي الجامعة شارع الضباط)"
            />

            {touched.phone_number && errors.phone_number && (
              <div className="text-red-700 flex self-end">
                {errors.phone_number}
              </div>
            )}

            <Field
              type="text"
              className={
                touched.phone_number
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.phone_number
                        ? `${styles.invalid}`
                        : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="phone_number"
              placeholder="رقم الهاتف"
            />

            {touched.password1 && errors.password1 && (
              <div className="text-red-700 flex self-end">
                {errors.password1}
              </div>
            )}
            <Field
              type="password"
              className={
                touched.password1
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.password1 ? `${styles.invalid}` : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="password1"
              placeholder="كلمة السر"
            />

            {touched.password2 && errors.password2 && (
              <div className="text-red-700 flex self-end">
                {errors.password2}
              </div>
            )}
            <Field
              type="password"
              className={
                touched.password2
                  ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                      errors.password2 ? `${styles.invalid}` : `${styles.valid}`
                    } `
                  : "block border border-grey-light w-full p-3 rounded mb-4"
              }
              name="password2"
              placeholder="أعادة كلمة السر"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded text-slate-50 hover:text-teal-900 bg-teal-900 border-teal-900    hover:bg-green-dark focus:outline-none my-1"
            >
              أنشاء حساب
            </button>

            <div className="text-grey-dark text-center mx-2 mt-6">
              لديك حساب مسبقاً ؟
              <Link
                className="no-underline border-b-2 mr-2 border-blue text-teal-800"
                to="/login"
              >
                سجل دخول
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

