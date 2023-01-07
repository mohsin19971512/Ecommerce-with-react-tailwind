import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ApiTopPropduct } from "../componentApi/TopProductsApi";
import LoadingSpinner from "../components/LoadingSpinner";
import Product from "../components/Product";
import { categoryFetch, getProductByType } from "../store/productSlice";

export default function CategoryPage() {
  const { name, id } = useParams();
  const dispatch = useDispatch();
  const [type_id, setcaType_id] = useState([]);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [badge_id, setId] = useState(null);
  const { isLoading } = useSelector((state) => state.products);

  const { userToken } = useSelector((state) => state.user);
  const { activeNav, newactiveNav } = useSelector((state) => state.products);

  const getProducts = (id) => {
    if (userToken) {
      fetch(`http://127.0.0.1:8000/api/category/categories/${id}`)
        .then((response) => response.json())
        .then((data) => {
          fetch(
            `http://127.0.0.1:8000/api/category/category/${id}/${data[0].id}`
          )
            .then((response2) => response2.json())
            .then((data2) => {
              setProducts(data2);
              setId(data[0].id);
              setActive(true);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("unauth");
    }
  };

  useEffect(() => {
    dispatch(categoryFetch(id));
    getProducts(id);
    localStorage.setItem("initalParams", `/category/${id}`);
  }, [dispatch]);
  const { categoryTypes, products_category_types } = useSelector(
    (state) => state.products
  );

  const handelProducts = (id, categ_id) => {
    dispatch(getProductByType([id, categ_id]));
    setActive(true);
    setId(categ_id);
  };

  return (
    <>
      <div
        className={
          activeNav
            ? "p-5 mobile:justify-center justify-center mobile:mt-[400px]  mobile:items-center mb-[-100px]  mobile:top-[-25px] mobile:mb-1 mobile:shadow-md mobile:bg-white mobile:z-50  flex flex-nowrap"
            : "p-5 mobile:justify-center mobile:sticky justify-center  mobile:items-center mb-[-100px]  mobile:top-[-25px] mobile:mb-1 mobile:shadow-md mobile:bg-white mobile:z-50  flex flex-nowrap"
        }
      >
        <div className="flex flex-col">
          <h1 className="text-center  text-xl font-bold mt-[-10px] mb-2 ">
            {name}
          </h1>
          <div className="flex flex-wrap ">
            {categoryTypes.map((categ, index) => (
              <>
                <span
                  onClick={() => handelProducts(id, categ.id)}
                  key={index}
                  className={
                    active && badge_id == categ.id
                      ? "cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded p-2 dark:bg-teal-800 dark:text-white m-1"
                      : " m-1 cursor-pointer p-2 bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300"
                  }
                >
                  {categ.name}
                </span>
              </>
            ))}
          </div>
        </div>

        {/*     <span className="cursor-pointer bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">active</span>
    <span class="cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
    
    <span class=" cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
    <span class="cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
    
    <span class="cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
    <span class=" cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
  */}
      </div>
      {isLoading ? (
        <div className="my-40 mr-[170px]">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="p-5 sm:justify-center sm:items-center  2xl:mt-7 mobile:mb-32 flex flex-wrap">
            {products_category_types.length >= 1 ? (
              <>
                {products_category_types.map((product, index) => (
                  <Product item={product} key={index} />
                ))}
              </>
            ) : (
              <>
                {products.length >= 1 ? (
                  <>
                    {products.map((product) => (
                      <Product item={product} key={product.id} />
                    ))}
                  </>
                ) : (
                  <>
                    <h1 className="text-2xl text-center">
                      لا توجد اي سلعة مضافة الى الان
                    </h1>
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
