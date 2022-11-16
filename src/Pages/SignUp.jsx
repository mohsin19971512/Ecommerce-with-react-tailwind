import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import SignUpForm from "./SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/userSlice";
import { Navigate } from "react-router-dom";
export default function SignUp() {
  const ErrorSchema = Yup.object().shape({
    first_name: Yup.string()
      .required("يرجا ادخال الاسم")
      .min(1, "too Short")
      .max(12, "Too Long"),

    last_name: Yup.string()
      .required("يرجا ادخال الأسم")
      .min(1, "قصير جداً")
      .max(12, "طويل جداً"),
    address1: Yup.string()
      .required("يرجا ادخال العنوان")
      .min(1, "قصير جداً")
      .max(100, "طويل جداً"),

    phone_number: Yup.string()
      .required("يرجا كتابة رقم الهاتف")
      .matches(/^(((?:\+|00)964)|(0)*)7\d{9}$/,"رقم الهاتف غير صالح"),

      password1: Yup.string()
      .required("يرجى ادخال كلمة المرور")
      .min(8, "كلمة السر قصيرة")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

      password2: Yup.string().oneOf(
      [Yup.ref("password1"), null],
      "كلمة السر يجب ان تكون متطابقة "
    ),
  })
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const { isSignUp } = useSelector((state) => state.user);
  if (isSignUp) return <Navigate to="/login" />;
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
          first_name: "",
          last_name: "",
          phone_number: "",
          password1: "",
          password2: "",
          address1 : "",
        }}
        validationSchema={ErrorSchema}
        onSubmit={(value) => {
          dispatch(signup(value));
          console.log("isSignUp", isSignUp);
        }}
        component={SignUpForm}
      />
    </div>
  );
}
