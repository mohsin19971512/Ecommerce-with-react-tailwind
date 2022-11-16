import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { completedOrder } from "../store/productSlice";
import dateFormat from 'dateformat';
export default function OrderRecord() {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { completed } = useSelector((state) => state.products);
  const { userToken } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(completedOrder(userToken));
    console.log( dateFormat("2022-11-12T15:50:06.328Z", "mmmm dS, yyyy"))
  }, []);

  return (
    <div className="flex-col">
      <div className="flex justify-around mt-5">
        <div
          className={active ? "text-xl border-b-4 border-teal-800" : "text-xl "}
        >
          {" "}
          الطلبات المكتملة{" "}
        </div>
        <div
          onClick={() => setActive(true)}
          className={active ? "text-xl border-b-4 border-teal-800" : "text-xl "}
        >
          {" "}
          الطلبات القادمة{" "}
        </div>
        </div>
<div className="flex-col justify-center items-center text-center">
        {completed.length >= 1 ? (
          <>
            {completed.map((order) => (
              <>
                 <div  key={order.id}class=" p-5 bg-gray-800  rounded overflow-visible self-center 2xl:w-[30%] w-[90%] flex flex-col m-4  ">
              <span
                style={{ marginLeft: "auto" }}
                class="text-xl text-right font-medium self-end text-gray-100 block pb-3"
              >
                السعر الكلي : - {order.total_price} د.ع
              </span>

              <span
                style={{ marginLeft: "auto" }}
                class="text-xl text-gray-400 flex-end "
              >
                عدد السلع : - {order.total_items}
              </span>

              <div
                style={{ marginLeft: "auto" }}
                class="flex justify-center flex-col pt-3"
              >
                <label class="text-xl text-gray-400 ">
                  الخصم : - 10,000 د.ع
                </label>
              </div>

              <div
                style={{ marginLeft: "auto" }}
                class="flex justify-center flex-col pt-3"
              >
                <label class="text-xl text-gray-400 ">
                  سعر التوصيل : - 5,000 د.ع
                </label>
              </div>

              <div
                style={{ marginLeft: "auto" }}
                class="flex justify-center flex-col pt-3"
              >
                <label class="text-xl text-gray-400 ">
                 التاريخ : - { dateFormat(`${order.created}`, "mm/ dd/ yyyy")}
                </label>
              </div>

              <div class="grid grid-cols-3 gap-2 pt-2 mb-3"></div>

            </div>
              </>
            ))}
           
          </>
        ) : (
          <></>
        )}
        </div>
    </div>
  );
}
