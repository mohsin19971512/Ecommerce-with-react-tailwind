import React from "react";
import { ApiTopPropduct } from "../componentApi/TopProductsApi";
import Product from "../components/Product";

export default function CategoryPage() {
  return (
    <>
    <div className="p-5 mobile:justify-center justify-center  mobile:items-center mb-[-100px] mobile:sticky mobile:top-[-25px] mobile:mb-1 mobile:shadow-md mobile:bg-white mobile:z-50  flex flex-nowrap">
            
    <span className="cursor-pointer bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">active</span>
    <span class="cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
    
    <span class=" cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
    <span class="cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
    
    <span class="cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
    <span class=" cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
    
            </div>
    <div className="p-5 sm:justify-center sm:items-center  flex flex-wrap">

      {ApiTopPropduct.map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
    </>
  );
}
