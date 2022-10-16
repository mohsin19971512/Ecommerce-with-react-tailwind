import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Badge} from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import {Navigate} from 'react-router-dom'

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelClick = () => setNav(!nav);
  const style = 'text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]';
  const openCartPage = ()=>{
    window.open('/cart')
  }
  const handelClick2 = ()=> {
    console.log("Navigate")


  }

  return (
    <div className="e-screen h-[80px] bg-white drop-shadow-lg z-40" >
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 onClick={handelClick2} className="text-3xl font-bold mr-4 cursor-pointer sm:text-4xl">
            <Link className="text-3xl font-bold mr-4  sm:text-4xl no-underline hover:no-underline hover:text-green-900" to="/">تجهيزات عسكرية</Link>
          </h1>
          <ul className="hidden md:flex">
            <li className="cursor-pointer hover:text-green-900">الرئيسية</li>
            <li className="cursor-pointer hover:text-green-900">الاجهزة الامنية</li>
            <li className="cursor-pointer hover:text-green-900">المنتجات</li>
            <li className="cursor-pointer hover:text-green-900">اخر المنتجات</li>
            <li className="cursor-pointer hover:text-green-900"> <Link to="/contact" className="hover:no-underline active:text-green-900">اتصل بنا</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <Link to="/login" className="border-none hover:text-green-900 bg-transparent hover:no-underline text-black ml-4 mr-4 mt-10">
            تسجيل دخول
          </Link>
          <Link to="/register" className="px-8 text-slate-50 btn  hover:bg-white hover:text-green-900 mb-4 py-2 ">أنشاء حساب</Link>
          <Link to="/cart" className="m-8 mt-10  cursor-pointer"> 
                <Badge badgeContent={4} color='primary'>
                  <ShoppingCartOutlined/>
                </Badge>
              </Link>
        </div>
        <div className=" md:hidden flex">
            <a className="mr-3" href="#">
            <Badge badgeContent={4} color='primary'>
                  <ShoppingCartOutlined/>
                </Badge>

            </a>

          <div className="md:hidden flex" onClick={handelClick}>
          {!nav ? (
            
            <MenuIcon className="w-5 mr-3" />
          ) : (
            <XIcon className="w-5 mr-2"></XIcon>
          )}
          
        </div>
        </div>

      </div>

      <ul className={!nav ? "hidden" : "absolute mobile:z-40  mobile:sticky bg-white w-full px-8 md:hidden shadow-md" } >
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <Link onClick={handelClick} to="/login" className="bg-transparent text-black btn  border-green-900 text-blackpx-8 py-3 mb-2">
            Sign In
          </Link>

          <Link onClick={handelClick} to="/register" className="w-full text-center hover:no-underline  py-3 rounded text-slate-50 hover:text-black bg-green-900 border-green-900  mb-4  hover:bg-green-dark focus:outline-none my-1">Sign Up</Link>
        </div>
      </ul>
    </div>
    
  );
};
