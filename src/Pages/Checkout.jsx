import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/userSlice";
import { Navigate } from "react-router-dom";
import CheckoutForm from './CheckoutForm';
import { checkout } from '../store/productSlice';

export default function Checkout() {
  const { userToken } = useSelector((state) => state.user);
  const { isOrderCreated } = useSelector(
    (state) => state.products
  );
  const ErrorSchema = Yup.object().shape({
    address1: Yup.string()
      .required("يرجا ادخال العنوان")
      .min(10, "too Short")
      .max(200, "Too Long"),

      address2: Yup.string()
      .required("يرجا ادخال العنوان")
      .min(10, "قصير جداً")
      .max(120, "طويل جداً"),

      note: Yup.string()
      .required("يرجا ادخال ملاحضة")
      .min(10, "too Short")
      .max(200, "Too Long"),

      phone: Yup.string()
      .required("يرجى ادخال رقم الهاتف")
      .min(8, "كلمة السر قصيرة")
      .matches(/^(((?:\+|00)964)|(0)*)7\d{9}$/, "يرجا ادخال رقم صالح"),

      password2: Yup.string().oneOf(
      [Yup.ref("password1"), null],
      "كلمة السر يجب ان تكون متطابقة "
    ),
  })
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const { isSignUp } = useSelector((state) => state.user);
  if (isOrderCreated) return <Navigate to="/" />;
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
          address1: "",
          address2: "",
          phone: "",
          note: "",
          token : userToken,

        }}
        validationSchema={ErrorSchema}
        onSubmit={(value) => {
          console.log("value",value)
          dispatch(checkout(value));
          
        }}
        component={CheckoutForm}
      />
    </div>
  );
}
