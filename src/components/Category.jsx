import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productsInCarts } from "../store/productSlice";

const Category = ({item}) => {



  return (

  <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
      <img  src="https://scontent.fbgw41-3.fna.fbcdn.net/v/t1.6435-9/121225669_3395730493841165_157324781084929008_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hzzpkSMzJfEAX8dD8jN&_nc_ht=scontent.fbgw41-3.fna&oh=00_AfDMP-DF_zExTvU8miJ3OuuZWCnylehavIE7LX8fZO7uyA&oe=63DFF52A" className=" block w-full brightness-[0.25]" alt='category_img'/>
      <div  className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
          <h2 className='text-white font-medium text-[30px]'>{item.name}</h2>
          <Link to={`/category/${item.name}/${item.id}`}  className='text-white btn'>معاينة الكل</Link>
      </div>
  </div>)
};

export default Category;