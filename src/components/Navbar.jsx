import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { logout } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { navAction, testing } from "../store/productSlice";

export const Navbar = () => {
  const cartnum = localStorage.getItem("cartItemsNum")
    ? localStorage.getItem("cartItemsNum") : 0;
  const [nav, setNav] = useState(false);
  /*  const userToken = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const dispatch = useDispatch(); */

  const dispatch = useDispatch();

  const { activeNav, newactiveNav } = useSelector((state) => state.products);

  const handelClick = () => {
    dispatch(navAction());
  };

  const { isLogged, userToken } = useSelector((state) => state.user);

  const style = "text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]";

  return (
    <div className="e-screen h-[80px] bg-white drop-shadow-lg z-40">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 cursor-pointer sm:text-4xl">
            <Link
              className="text-3xl font-bold mr-4  sm:text-4xl no-underline hover:no-underline hover:text-teal-900"
              to="/"
            >
              تجهيزات عسكرية
            </Link>
          </h1>
          <ul className="hidden md:flex">
            <li className="cursor-pointer hover:text-teal-900">
              <Link
                to="/"
                className="hover:no-underline active:no-underline hover:text-teal-900 active:text-teal-900"
              >
                الرئيسية
              </Link>
            </li>
            <li className="cursor-pointer hover:text-teal-900">
              <Link
                to="/category"
                className="hover:no-underline active:no-underline hover:text-teal-900 active:text-teal-900"
              >
                الاجهزة الامنية
              </Link>
            </li>
            <li className="cursor-pointer hover:text-teal-900">المنتجات</li>
            <li className="cursor-pointer hover:text-teal-900">
              <Link
                to="/products"
                className="hover:no-underline active:no-underline hover:text-teal-900 active:text-teal-900"
              >
                اخر المنتجات
              </Link>
            </li>
            <li className="cursor-pointer hover:text-teal-900">
              {" "}
              <Link
                to="/contact"
                className="hover:no-underline active:no-underline hover:text-teal-900 active:text-teal-900"
              >
                اتصل بنا
              </Link>
            </li>
            <li className="cursor-pointer hover:text-teal-900">
              {" "}
              <Link
                to="/order-record"
                className="hover:no-underline active:no-underline hover:text-teal-900 active:text-teal-900"
              >
                سجل الطلبات 
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          {userToken ? (
            <button
              onClick={() => dispatch(logout())}
              className="px-8 text-slate-50 btn  hover:bg-none hover:shadow-none hover:text-black mb-4 py-2 "
            >
              تسجيل خروج
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="border-none hover:text-teal-900 bg-transparent hover:no-underline text-black ml-4 mr-4 mt-10"
              >
                تسجيل دخول
              </Link>
              <Link
                to="/register"
                className="px-8 text-slate-50 btn  hover:bg-white hover:text-teal-900 mb-4 py-2 "
              >
                أنشاء حساب
              </Link>
            </>
          )}

          <Link
            to="/cart"
            onClick={() => dispatch(navAction())}
            className="m-8 mt-10 hover:text-teal-800 cursor-pointer"
          >
            {/*  <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge> */}

            <span class="relative inline-block">
              <ShoppingCartOutlined />

              <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-teal-900 rounded-full">
                {cartnum}
              </span>
            </span>
          </Link>
        </div>
        <div className=" md:hidden flex">
          <Link className="mr-3 hover:text-teal-800" to="/cart">
            <span class="relative inline-block">
              <ShoppingCartOutlined />

              <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-teal-900	 rounded-full">
                {cartnum}
              </span>
            </span>
          </Link>

          <div onClick={() => dispatch(navAction())} className="md:hidden flex">
            {!activeNav ? (
              <MenuIcon className="w-5 mr-3 cursor-pointer" />
            ) : (
              <XIcon className="w-5 mr-2"></XIcon>
            )}
          </div>
        </div>
      </div>

      <ul
        style={{ direction: "rtl", textAlign: "center" }}
        className={
          !activeNav
            ? "hidden"
            : "absolute mobile:z-40 mobile:mb-[400px]  mobile:sticky bg-white w-full px-8 md:hidden shadow-md"
        }
      >
        <li
          style={{ marginLeft: "auto" }}
          className="  self-start border-zinc-300 hover:no-underline w-full"
        >
          <Link
            className="hover:no-underline active:no-underline"
            onClick={() => dispatch(activeNav())}
            to="/"
          >
            الرئيسية
          </Link>
        </li>
        <li
          style={{ marginLeft: "auto" }}
          className="  border-zinc-300 hover:no-underline w-full"
        >
          <Link
            className="hover:no-underline active:no-underline"
            onClick={() => dispatch(activeNav())}
            to="/category"
          >
            الاجهزة الامنية
          </Link>
        </li>
        <li className="  border-zinc-300 w-full">
          <Link
            className="hover:no-underline active:no-underline"
            onClick={() => dispatch(activeNav())}
            to="/products"
          >
            الأكثر مبيعاً
          </Link>
        </li>
        <li className="  border-zinc-300 w-full">
          <Link
            className="hover:no-underline active:no-underline"
            onClick={() => dispatch(activeNav())}
            to="/products"
          >
            اخر المنتجات
          </Link>
        </li>
        <li className="  border-zinc-300 hover:no-underline w-full">
          <Link
            className="hover:no-underline active:no-underline"
            onClick={() => dispatch(activeNav())}
            to="/contact"
          >
            اتصل بنا
          </Link>
        </li>
        <li className="  border-zinc-300 hover:no-underline w-full">
          <Link
            className="hover:no-underline active:no-underline"
            onClick={() => dispatch(activeNav())}
            to="/order-record"
          >
            سجل الطلبات{" "}
          </Link>
        </li>
        <div className="flex flex-col my-4">
          {userToken ? (
            <>
              <Link
                onClick={() => dispatch(logout())}
                to="/register"
                className="w-full text-center hover:no-underline  py-3 rounded text-slate-50 hover:text-black bg-teal-900   mb-4  hover:bg-none focus:outline-none my-1"
              >
                تسجيل خروج{" "}
              </Link>
            </>
          ) : (
            <>
              <Link
                onClick={() => dispatch(activeNav())}
                to="/login"
                className="bg-transparent text-black btn  border-teal-900 text-blackpx-8 py-3 mb-2"
              >
                تسجيل الدخول
              </Link>

              <Link
                onClick={() => dispatch(activeNav())}
                to="/register"
                className="w-full text-center hover:no-underline  py-3 rounded text-slate-50 hover:text-teal-900 hover:bg-none bg-teal-900 border-teal-900  mb-4  focus:outline-none my-1"
              >
                أنشاء حساب
              </Link>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};
