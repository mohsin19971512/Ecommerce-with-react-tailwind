import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { completedOrder } from "../store/productSlice";
import dateFormat from "dateformat";
import FormatPrice from "./FormatPrice";
export default function OrderRecord() {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { completed } = useSelector((state) => state.products);
  const { userToken } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(completedOrder(userToken));
    console.log(
      dateFormat("2022-11-12T15:50:06.328Z", "mmmm dS, yyyy ,h:MM:ss")
    );
  }, []);

  return (
    <div className="flex-col mb-64">
      <div className="flex justify-center mt-5">
        <div className="text-2xl font-bold border-b-4 border-teal-800">
          {" "}
          سجل الطلبات{" "}
        </div>
      </div>
      <div className="mobile:flex-col 2xl:flex-row justify-center items-center text-center">
        {completed.length >= 1 ? (
          <>
            {completed.map((order, index) => (
              <div
                key={index}
                className=" p-5 bg-gray-800  rounded overflow-visible self-center 2xl:w-[30%] w-[90%] flex flex-col m-4  "
              >
                <div
                  style={{ marginLeft: "auto" }}
                  className="flex justify-center flex-col pt-3"
                >
                  <label className="text-xl text-gray-100 ">
                    حالة الطلب : -
                    {order.status.title === "COMPLETED" && "تم التوصيل"}
                    {order.status.title === "NEW" && "بأنتضار الموافقة "}
                  </label>
                </div>
                <span
                  style={{ marginLeft: "auto" }}
                  className="text-xl text-right font-medium self-end text-gray-400 block pb-3"
                >
                  السعر الكلي : -{" "}
                  <FormatPrice
                    className="text-xl  px-2 py-1 font-medium text-gray-400   mobile:mt-2"
                    price={order.total_price}
                  />
                </span>

                <span
                  style={{ marginLeft: "auto" }}
                  className="text-xl text-gray-400 flex-end "
                >
                  عدد السلع : - {order.total_items}
                </span>

                <div
                  style={{ marginLeft: "auto" }}
                  className="flex justify-center flex-col pt-3"
                >
                  <label className="text-xl text-gray-400 ">
                    الخصم : - 10,000 د.ع
                  </label>
                </div>

                <div
                  style={{ marginLeft: "auto" }}
                  className="flex justify-center flex-col pt-3"
                >
                  <label className="text-xl text-gray-400 ">
                    سعر التوصيل : - 5,000 د.ع
                  </label>
                </div>

                <div
                  style={{ marginLeft: "auto" }}
                  className="flex justify-center flex-col pt-3"
                >
                  <label className="text-l text-gray-400 ">
                    التاريخ : - {dateFormat(`${order.created}`, "mm/ dd/ yyyy")}
                  </label>
                  <label className="text-l text-gray-400 ">
                    الساعة : - {dateFormat(`${order.created}`, "h:MM TT")}
                  </label>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 mb-3"></div>
              </div>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
