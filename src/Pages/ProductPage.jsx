import React from "react";
import Counter from "../components/Counter";

const ProductPage = () => {
  return (
    <div>
      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            className="product_img"
            alt="product_image"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            Cream Hoody Orignal
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            accusamus, culpa neque ex sunt placeat. Vitae quia qui quo,
            doloribus dolore aliquam veniam. Natus totam odit consequatur
            consectetur delectus nihil!
          </p>
          <div className="flex flex-col place-self-start">
            <div className="flex">
              <p className="mt-7 text-3xl">
                <h1> السعر  : - $70 </h1>
              </p>
            </div>

            {/* <div className="colors flex mt-7 text-2xl">
              <h1 className="ml-2">Colors</h1>
              <div className="colorSelect bg-red-600 "></div>
              <div className="colorSelect bg-blue-600 "></div>
              <div className="colorSelect bg-yellow-400 "></div>
            </div> */}

            <div className="mt-7 flex text-2xl">
              <h1 className="ml-2 mt-1">الحجم</h1>
              <select style={{direction:"rtl"}} className="border-[2px] mr-5 border-silver rounded-md ">
                <option selected>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
            <div className="mt-7">
              <Counter />
            </div>
          </div>

          <button className="text-white btn bg-green-900 hover:text-green-900 border-green-900 rounded-md shadow-md mt-[30px] p-3">
            اضافة 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
