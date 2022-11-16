import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiCategories } from '../componentApi/CategoryApi';
import { getCategories } from '../store/productSlice';
import Category from './Category';
import LoadingSpinner from './LoadingSpinner';


const Categories = () => {
  const dispatch = useDispatch()
  const [categoriesItemes, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getCategories())

/*   const getCategories = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/category/categories`
      );
      const data = await response.clone().json();
      setCategories(data);
    };
    getCategories();  */
    
    
  }, [dispatch,getCategories]);

  const { categories, isLoading } = useSelector(
    (state) => state.products
  );
  const {activeNav,newactiveNav} = useSelector((state)=>state.products) 


  return <div className={activeNav ? 'flex justify-between mt-[400px] items-center mobile:z-10 p-5 md:flex-row mobile:flex-col':'flex justify-between items-center mobile:z-10 p-5 md:flex-row mobile:flex-col'}>
    {isLoading ? (

<div className="my-40 text-center self-center justify-center xl:mr-[700px]"> 
<LoadingSpinner />

</div>
    ):(
      <>
          {categories.map((category, index)=>(
        <Category item={category} key={index}/>
        
    ))}</>
    )}

  </div>;
};

export default Categories;