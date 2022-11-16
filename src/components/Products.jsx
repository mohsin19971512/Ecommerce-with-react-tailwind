import { stringify } from 'postcss';
import React, { useEffect, useState } from 'react';
import { ApiTopPropduct } from '../componentApi/TopProductsApi';
import Product from './Product';
const Products = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
  
      const getProducts = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/products`);
        const data = await response.clone().json();
        console.log("data",data)

        localStorage.setItem("products", JSON.stringify(data))
        setProduct(data);
      };
  
      getProducts();
    }, []);
  return <div className='p-5 sm:justify-center sm:items-center  flex flex-wrap'>
      {
          products.map((product, index)=>(
              <Product item={product} key={index}/>
          ))
      }
  </div>;
};

export default Products;