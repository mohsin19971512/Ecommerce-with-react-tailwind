import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../components/Product';

export default function LatestProductsPage() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
  
      const getProducts = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/products/best-selling-products`);
        const data = await response.clone().json();        
        setProduct(data);
      };
  
      getProducts();
    }, []);
  return <div className='p-5 sm:justify-center sm:items-center  flex flex-wrap'>
    <div className="2xl:hidden text-2xl self-center text-center mx-auto mb-4 pb-2b border-b-4 border-teal-800">
    المنتجات المضافة مؤخراً

    </div>
      {
          products.map((product, index)=>(
              <Product item={product} key={index}/>
          ))
      }
  </div>;
}
