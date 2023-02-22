import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productsInCarts } from "../store/productSlice";

const Category = ({item}) => {

  const { activeNav, newactiveNav } = useSelector((state) => state.products);


  return (

  <div className={activeNav ? 'flex-1 m-2 -z-0 shadow-lg rounded-md overflow-hidden relative':'flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'}>
      <img  src="https://i.pinimg.com/originals/47/ed/c7/47edc74c250c69e9721cd500c07c0988.jpg" className={activeNav?"w-full brightness-[0.25]":" block w-full brightness-[0.25]"} alt='category_img'/>
      <div  className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
          <h2 className='text-white font-medium text-[30px]'>{item.name}</h2>
          <Link to={`/category/${item.name}/${item.id}`}  className='text-white btn'>معاينة الكل</Link>
      </div>
  </div>)
};

export default Category;