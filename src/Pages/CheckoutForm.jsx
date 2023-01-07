import React, { useEffect } from "react";
import { Form, Field } from "formik";
import styles from "./Contactform.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { totalPrice } from "../store/productSlice";
import FormatPrice from "../components/FormatPrice";

export default function CheckoutForm({ errors, touched }) {
  const { userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { productsInCart, isLoading, total_price, total_items } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    localStorage.setItem("initalParams", `/cart`);
    dispatch(totalPrice(userToken));
  }, [dispatch, total_items]);
  return (
    <div className="flex justify-center mobile:flex-col items-center h-[100%]">
      <div className=" p-5 bg-gray-800 rounded overflow-visible mobile:w-[90%] xl-w-[35%] w-[50%] flex flex-col xl:self-start m-5 xl:mt-6 align-top   ">
        <span
          style={{ marginLeft: "auto" }}
          className="text-xl text-right font-medium self-end text-gray-100 block pb-3"
        >
          السعر الكلي : - {total_price} د.ع
        </span>

        <span
          style={{ marginLeft: "auto" }}
          className="text-xl text-gray-400 flex-end "
        >
          عدد السلع : - {total_items}
        </span>

        <div
          style={{ marginLeft: "auto" }}
          className="flex justify-center flex-col pt-3"
        >
          <label className="text-xl text-gray-400 ">الخصم : - 10,000 د.ع</label>
        </div>

        <div
          style={{ marginLeft: "auto" }}
          className="flex justify-center flex-col pt-3"
        >
          <label className="text-xl text-gray-400 ">
            سعر التوصيل : - 5,000 د.ع
          </label>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2 mb-3"></div>
      </div>
      <div className="w-[50%] xl-w-[30%]  mt-5  mobile:mt-[-50px] mb-3 mobile:w-[100%]  ">
        <Form className="" style={{ width: "100%", marginTop: "-34px" }}>
          <div className="bg-grey-lighter w-[100%]  min-h-screen flex flex-col mobile:mt-[-100px] mb-auto xl:m-3">
            <div className="container max-w-sm mx-auto  shadow-lg flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 py-8 rounded  h-[100%] text-black w-full">
                <h1 className="mb-8 text-3xl mt-[-180px] text-center">
                  {" "}
                  ادخل المعلومات
                </h1>
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
                          errors.address1
                            ? `${styles.invalid}`
                            : `${styles.valid}`
                        } `
                      : "block border border-grey-light w-full p-3 rounded mb-4"
                  }
                  name="address1"
                  placeholder="العنوان مثل ( بغداد الكرخ الطوبجي )"
                />

                {touched.address2 && errors.address2 && (
                  <div className="text-red-700 flex self-end">
                    {errors.address2}
                  </div>
                )}
                <Field
                  type="text"
                  className={
                    touched.address2
                      ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                          errors.address2
                            ? `${styles.invalid}`
                            : `${styles.valid}`
                        } `
                      : "block border border-grey-light w-full p-3 rounded mb-4"
                  }
                  name="address2"
                  placeholder=" اقرب نقطة دالة "
                />

                <div className="flex">
                  <label className="w-[80%] ml-2 mr-[-180px]">
                    مكان العمل ؟{" "}
                  </label>

                  <label>
                    <Field type="radio" name="work_address" value="true" />
                    نعم
                  </label>
                  <label>
                    <Field type="radio" name="work_address" value="false" />
                    لا
                  </label>
                </div>

                {touched.phone && errors.phone && (
                  <div className="text-red-700 flex self-end">
                    {errors.phone}
                  </div>
                )}

                <Field
                  type="text"
                  className={
                    touched.phone
                      ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                          errors.phone ? `${styles.invalid}` : `${styles.valid}`
                        } `
                      : "block border border-grey-light w-full p-3 rounded mb-4"
                  }
                  name="phone"
                  placeholder="رقم الهاتف"
                />

                {touched.note && errors.note && (
                  <div className="text-red-700 flex self-end">
                    {errors.note}
                  </div>
                )}
                <Field
                  type="text"
                  className={
                    touched.note
                      ? `block border border-grey-light w-full p-3 rounded mb-4 ${
                          errors.note ? `${styles.invalid}` : `${styles.valid}`
                        } `
                      : "block border border-grey-light w-full p-3 rounded mb-4"
                  }
                  name="note"
                  placeholder="الملاحضات "
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded text-slate-50 hover:text-teal-900 bg-teal-900 border-teal-900    hover:bg-green-dark focus:outline-none my-1"
                >
                  أتمام الشراء{" "}
                </button>
                <h1 className="text-grey-dark text-center mt-6">
                  {" "}
                  راجع حالة الطلب من قائمة الطلبات
                </h1>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
