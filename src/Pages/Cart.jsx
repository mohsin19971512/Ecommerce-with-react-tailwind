import React, { useState } from "react";
/* import NewsLetter from "../components/NewsLetter"; */
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";
const Cart = () => {
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";

  const [show, setShow] = useState(false);
  return (
    <div class="h-screen ">
      <div class="py-12">
        <div class="max-w-md mx-auto  shadow-lg rounded-lg  md:max-w-5xl">
          <div class="md:flex ">
            <div class="w-full p-4 px-5 py-5">
              <div class="md:grid md:grid-cols-3 gap-2 ">
                <div class="col-span-2 mobile:mr-[-40px] mobile:mt-[-70px] mobile:w-full p-5">
                  <h1 class="text-xl font-medium ">عربة التسوق</h1>

                  <div class="flex justify-between mobile:w-[304px] items-center mt-6 pt-6">
                    <div class="flex  items-center">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                        width="60"
                        class="rounded-full "
                      />

                      <div class="flex flex-col ml-3">
                        <span class="md:text-md font-medium">Chicken momo</span>
                        <span class="text-xs font-light text-gray-400">
                          #41551
                        </span>
                      </div>
                    </div>

                    <div class="flex justify-center items-center">
                      <div class="pr-8 flex ">
                        <span class="font-semibold">-</span>
                        <input
                          type="text"
                          class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                          value="1"
                        />
                        <span class="font-semibold">+</span>
                      </div>

                      <div class="pr-8 ">
                        <span class="text-xs font-medium">$10.50</span>
                      </div>
                      <div>
                        <i class="fa fa-close text-xs font-medium"></i>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mobile:w-[304px] pt-6 mt-6 border-t">
                    <div class="flex  items-center">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                        width="60"
                        class="rounded-full "
                      />

                      <div class="flex flex-col ml-3 ">
                        <span class="text-md font-medium w-auto">
                          Spicy Mexican potatoes
                        </span>
                        <span class="text-xs font-light text-gray-400">
                          #66999
                        </span>
                      </div>
                    </div>

                    <div class="flex justify-center items-center">
                      <div class="pr-8 flex">
                        <span class="font-semibold">-</span>
                        <input
                          type="text"
                          class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                          value="1"
                        />
                        <span class="font-semibold">+</span>
                      </div>

                      <div class="pr-8">
                        <span class="text-xs font-medium">$10.50</span>
                      </div>
                      <div>
                        <i class="fa fa-close text-xs font-medium"></i>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between mobile:w-[304px] items-center mt-6 pt-6 border-t">
                    <div class="flex  items-center">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                        width="60"
                        class="rounded-full "
                      />

                      <div class="flex flex-col ml-3 ">
                        <span class="text-md font-medium">Breakfast</span>
                        <span class="text-xs font-light text-gray-400">
                          #86577
                        </span>
                      </div>
                    </div>

                    <div class="flex justify-center items-center">
                      <div class="pr-8 flex">
                        <span class="font-semibold">-</span>
                        <input
                          type="text"
                          class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                          value="1"
                        />
                        <span class="font-semibold">+</span>
                      </div>

                      <div class="pr-8">
                        <span class="text-xs font-medium">$10.50</span>
                      </div>
                      <div>
                        <i class="fa fa-close text-xs font-medium"></i>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mt-6 pt-6 border-t">
                    <div class="flex items-center">
                      <i class="fa fa-arrow-left text-sm pr-2"></i>
                      <span  class="text-md  btn font-medium text-white">
                         مواصلة التسوق
                      </span>
                    </div>

                    
                  </div>
                </div>
                <div class=" p-5 bg-gray-800 rounded overflow-visible flex flex-col justify-items-start  ">
                  <span style={{marginLeft: "auto"}} class="text-xl font-medium self-end text-gray-100 block pb-3">
                        السعر الكلي : - 190$
                  </span>

                  <span style={{marginLeft: "auto"}} class="text-xs text-gray-400 flex-end ">عدد السلع  : -  3</span>

                  
                  <div style={{marginLeft: "auto"}} class="flex justify-center flex-col pt-3">
                    <label class="text-xs text-gray-400 ">الخصم : - 10$</label>
                   
                  </div>

                  <div style={{marginLeft: "auto"}} class="flex justify-center flex-col pt-3">
                    <label class="text-xs text-gray-400 ">سعر التوصيل  : - 5$</label>
                    
                  </div>

                  <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                    

                   
                  </div>

                  <Link to="/#" class=" text-white btn">
                    أتمام الشراء
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-10"/>
      <Footer />
    </div>
  );
};

export default Cart;
