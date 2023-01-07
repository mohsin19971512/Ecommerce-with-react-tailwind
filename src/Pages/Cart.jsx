import React, { useEffect, useState } from "react";
/* import NewsLetter from "../components/NewsLetter"; */
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseItemQuantity,
  reduceQuantity,
  totalPrice,
} from "../store/productSlice";
import { ArrowLeftOutlined } from "@material-ui/icons";
import FormatPrice from "../components/FormatPrice";
import LoadingSpinner from "../components/LoadingSpinner";
const Cart = () => {
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
    <div className="h-screen ">
      {isLoading ? (
        <div className="my-40 text-center self-center justify-center mr-[170px] xl:mr-[750px] xl:ml">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="py-12">
            <div className="max-w-md mx-auto  shadow-b-lg rounded-lg  md:max-w-5xl">
              <div className="md:flex ">
                <div className="w-full p-4 px-5 py-5">
                  <div className="md:grid md:grid-cols-3 gap-2 ">
                    <div className="col-span-2 mobile:mr-[-40px] mobile:mt-[-70px] mobile:w-full p-5">
                      <h1 className="text-2xl xl:mt-[-80px] xl:text-center  font-bold ">
                        عربة التسوق
                      </h1>
                      {/* <div className="flex items-center mobile:w-[304px]   justify-around mt-2">
                    <span className="py-2 border-b-2">الطلبات القادمة</span>
                    <span>الطلبات المكتملة</span>
                  </div> */}
                      {productsInCart.length >= 1 ? (
                        <>
                          {productsInCart.map((product) => (
                            <div
                              key={product.id}
                              className="flex justify-between mobile:w-[304px] items-center mt-6 pt-6"
                            >
                              <div className="flex mr-[-20px]  items-center">
                                <img
                                  src="https://scontent.fbgw41-4.fna.fbcdn.net/v/t39.30808-6/241644448_4342966732450865_9174567869012493168_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ytRngHV6wwIAX91UPF9&_nc_ht=scontent.fbgw41-4.fna&oh=00_AfD9HaQFjOezqZn43pgjThBdwn-83VjJYAGYhbywMERLAg&oe=63BCA7A0"
                                  width="60"
                                  className="rounded-md "
                                />

                                <div className="flex flex-col mr-3">
                                  <span className="md:text-md font-medium text-right">
                                    <Link
                                      to={`/products/${product.product.id}`}
                                      className="no-underline hover:no-underline active:no-underline"
                                    >
                                      {" "}
                                      {product.product.name}
                                    </Link>
                                  </span>
                                  {product.product.category.name && (
                                    <span className="text-xs font-light mr-1 text-right text-gray-400">
                                      {product.product.category.name}
                                    </span>
                                  )}

                                  {product.item_size ? (
                                    <span className="text-xs font-light mr-1 text-right text-gray-400">
                                      {product.item_size.size}
                                    </span>
                                  ):(<></>)}
                                </div>
                              </div>

                              <div className="flex justify-center items-center">
                                <div className="pr-8 flex ">
                                  <span
                                    onClick={() =>
                                      dispatch(
                                        reduceQuantity({
                                          id: product.id,
                                          token: userToken,
                                        })
                                      )
                                    }
                                    className="font-semibold cursor-pointer"
                                  >
                                    -
                                  </span>
                                  <input
                                    type="text"
                                    className="focus:outline-none cursor-pointer bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                    defaultValue={product.item_qty}
                                  />
                                  <span
                                    onClick={() =>
                                      dispatch(
                                        increaseItemQuantity({
                                          id: product.id,
                                          token: userToken,
                                        })
                                      )
                                    }
                                    className="font-semibold cursor-pointer"
                                  >
                                    +
                                  </span>
                                </div>

                                <div className="pr-8">
                                  <FormatPrice price={product.item_total} />
                                </div>
                                <div>
                                  <i className="fa fa-close text-xs font-medium"></i>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          <div className="flex mt-6 mobile:w-[304px] justify-center content-center items-center">
                            <h1 className="text-xl   text-right">
                              لا توجد اي سلعه مضافة{" "}
                            </h1>
                          </div>
                        </>
                      )}
                    </div>
                    {productsInCart.length >= 1 ? (
                      <>
                        <div className=" p-5 bg-gray-800 rounded overflow-visible self-center w-[100%] flex flex-col justify-items-start  ">
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

                          <div className="grid grid-cols-3 gap-2 pt-2 mb-3"></div>

                          <Link to="/checkout" className=" text-white btn">
                            أتمام الشراء
                          </Link>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                      <div className="flex items-center">
                        <i className="fa fa-arrow-left text-sm pr-2"></i>
                        <span className="text-md  btn font-medium text-white">
                          <Link
                            className="active:no-underline hover:no-underline "
                            to="/products"
                          >
                            مواصلة التسوق
                          </Link>
                          <ArrowLeftOutlined style={{ fontSize: "30px" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mb-10" />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Cart;
