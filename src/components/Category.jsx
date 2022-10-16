import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({item}) => {

  return (<div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
      <img src={item.src} className="w-[100%] brightness-[0.25]" alt='category_img'/>
      <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
          <h2 className='text-white font-medium text-[30px]'>{item.title}</h2>
          <Link to="/categorypage" className='text-white  btn'>معاينة الكل</Link>
      </div>
  </div>)
};

export default Category;