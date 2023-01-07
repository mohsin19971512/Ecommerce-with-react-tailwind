import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../components/Product';

export default function BestSellingProductsPage() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
  
      const getProducts = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/products/best-selling-products`);
        const data = await response.clone().json();        
        setProduct(data);
      };
  
      getProducts();
    }, []);
  return( 
  <>
        <div className="text-4xl w-full  text-center mx-auto mt-5">
        <h1 className=" mobile:hidden  w-[20%]  mx-auto">
        المنتجات الأكثر مبيعاً
             </h1>
      </div>
  <div className='p-5 sm:justify-center sm:items-center  flex flex-wrap'>
  <div className="text-2xl 2xl:hidden mt-[-50px] self-center text-center mx-auto mb-4 pb-2b border-b-4 border-teal-800">
  المنتجات الأكثر مبيعاً

    </div>

      {
          products.map((product, index)=>(
              <Product item={product} key={index}/>
          ))
      }
  </div>;
  </>)
}
