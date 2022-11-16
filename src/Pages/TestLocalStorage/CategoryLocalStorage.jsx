import Category from "../../components/Category";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CategoryLocalStorage() {
  const products = JSON.parse(localStorage.getItem("products"));
  const [listProduct, setlistProduct] = useState([]);
  const { activeNav, newactiveNav } = useSelector((state) => state.products);
  const {  isLoading } = useSelector((state) => state.products);
  useEffect(() => {

  }, []);
  const uniqueIds = [];
          
  const categories = products.filter(element => {
    const isDuplicate = uniqueIds.includes(element.category.name);
  
    if (!isDuplicate) {
      uniqueIds.push(element.category.name);
  
      return true;
    }
  
    return false;
  });

  return (
    <div>
      <div
        className={
          activeNav
            ? "flex justify-between mt-[400px] items-center mobile:z-10 p-5 md:flex-row mobile:flex-col"
            : "flex justify-between items-center mobile:z-10 p-5 md:flex-row mobile:flex-col"
        }
      >
        {isLoading ? (
          <div className="my-40 text-center self-center justify-center xl:mr-[700px]">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {categories.map((category, index) => (
              <Category item={category.category} key={index} />
            ))}
          </>
        )}
      </div>
      ;
    </div>
  );
}
