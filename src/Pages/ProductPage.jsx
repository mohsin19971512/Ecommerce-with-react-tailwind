import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ApiSlides } from "../componentApi/SliderApi";
import { SliderProduct } from "../componentApi/SliderProduct";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import FormatPrice from "../components/FormatPrice";
import { productDetailFetch, productsInCarts } from "../store/productSlice";
import CounterInput from "react-counter-input";
const ProductPage = () => {
  const { id } = useParams();
  const { userToken } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [sizeId, setSize] = useState(null);
  const [success, setSuccess] = useState(null);
  const [ qty , setQuantitu] = useState(1);
  const dispatch = useDispatch();
  const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle =
    "rounded-full mobile:hidden bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  //States
  const [slides] = useState(SliderProduct);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
      console.log(activeSlide);
    } else {
      setActiveSlide(activeSlide - 1);
      console.log(activeSlide);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
      console.log(activeSlide);
    } else {
      setActiveSlide(activeSlide + 1);
      console.log(activeSlide);
    }
  };

  useEffect(() => {
    localStorage.setItem("initalParams", `/products/${id}`);

    dispatch(productDetailFetch(id));
  }, [dispatch, productDetailFetch]);

  const { productDetails, isLoading } = useSelector((state) => state.products);
  
  const handelAddToCart = (id) => {
    const datatobodt = {
      item_in: JSON.stringify({ product_id: id, item_qty: 1 }),
    };
    /*     if (sizeId) {
       console.log(sizeId,JSON.stringify({product_size:sizeId}));
     } else {
       console.log("there is no size");
     } */
    console.log("userToken", userToken);
    console.log("size", sizeId);
    if (userToken) {
      console.log(
        "productDetails.product_size.length",
        productDetails.product_size.length
      );
      console.log("step 1");
      if (productDetails.product_size.length>=1 && sizeId == null) {
        setError("اختر حجم");
        setTimeout(function(){
          setError(null);

       }, 2000); //Time before execution
      } else {
        console.log("qty",qty)
        fetch("http://127.0.0.1:8000/api/orders/add-to-cart", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            product_id: id,
            item_qty: qty,
            item_size_id: sizeId,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            dispatch(productsInCarts(userToken));

            setSuccess("تم اضافة السلعة الى العربة");
            setTimeout(function(){
              setSuccess(null);
    
           }, 2000);
          })
          .catch((error) => {
            setError(error);
            setTimeout(function(){
              setError(null);
    
           }, 2000);
          });
      }
    } else {
      //return <Navigate to="/login"/>
      setError("يرجى تسجيل الدخول");
      setTimeout(function(){
        setError(null);

     }, 2000);
      console.log("unauth");
    }
  };
  const { activeNav, newactiveNav } = useSelector((state) => state.products);

  return (
    <div>
      <div
        className={
          activeNav
            ? "flex justify-center mobile:flex-col mobile:mt-[450px] mobile:mb-60 mobile:p-3"
            : "flex justify-center mobile:flex-col mobile:mt-4 mobile:mb-60 mobile:p-3"
        }
      >
        <div className="flex-1 xl:ml-5 xl:mt-3 flex items-center  justify-center">
          <div
            id="carouselExampleControls"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden">
              {slides.map((slide, index) => {
                if (index === activeSlide) {
                  return (
                    <div key={index} className="carousel-item active relative float-left w-full">
                      <img
                        src={slide.src}
                        className="block w-full"
                        alt="Wild Landscape"
                      />
                    </div>
                  );
                }
              })}
            </div>

            <button
              onClick={prevSlide}
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <ArrowLeftOutlined style={{ fontSize: "50px" }} />
            </button>
            <button
              onClick={nextSlide}
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <ArrowRightOutlined style={{ fontSize: "50px" }} />
            </button>
          </div>
        </div>

        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            {productDetails.name}
          </h1>
          <h5
            style={{ textAlign: "right" }}
            className="text-xl font-semibold tracking-tight mt-2 text-zinc-500 "
          >
            {productDetails.category ? (
              <>
              {productDetails.category.name} 
              </>
            ):(<></>)}
         
          </h5>
          <p className="disription  text-right  mt-4 mobile:pr-0">
            حقيبة طيران امريكيه اصليه مرقط زيتوني Pilot Flyer's Helmet Bag. جفوف
            طيران + جف لايت 🧤 🥾بساطيل قطع متنوعة اصليه بدلات جفت امريكية اصليه
            طيارين جواريبات امريكيه اصليه لون ابيض🧦
          </p>
          <div className="flex flex-col place-self-start">
            <div className="flex">
              <p className="mt-7 text-3xl">
                <span>
                  {" "}
                  السعر : -{" "}
                  <FormatPrice
                    className="text-2xl font-bold"
                    price={productDetails.price}
                  />{" "}
                </span>
              </p>
            </div>

            {/* <div className="colors flex mt-7 text-2xl">
              <h1 className="ml-2">Colors</h1>
              <div className="colorSelect bg-red-600 "></div>
              <div className="colorSelect bg-blue-600 "></div>
              <div className="colorSelect bg-yellow-400 "></div>
            </div> */}

            <div className="mt-7 flex text-2xl">
              {productDetails.product_size && (
                <>
                  <h1 className="ml-2 mt-1"> الحجم : - </h1>
                  <select
                    onChange={(e) => setSize(e.target.value)}
                    style={{ textAlign: "right" }}
                    className="border-[2px] mr-3 w-24 h-10  border-silver rounded-md "
                  >
                    <option value={null} defaultValue>
                      اختر
                    </option>
                    {productDetails.product_size.sizes.map((sizes) => (
                      <option key={sizes.id} value={sizes.id}>
                        {sizes.size}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
            <div className="mt-7 flex">
             <h1 className="text-2xl mt-2">الكمية : -  </h1>
             <div className="border-2 mr-2">
             <CounterInput
             count = {1}
                min={1}
                max={productDetails.qty}
                onCountChange={(count) => setQuantitu(count)}
              />{" "}
             </div>
              {productDetails.qty <= 4 ? (
                <>
                <span className="text-red-600 mt-2 mx-2"> باقي فقط {productDetails.qty} قطع</span>
                </>
              ):(<></>)}
            </div>
          </div>
          {success && (
            <div
              className="p-3 xl:w-auto text-right w-full mb-[-5px] mt-2 text-sm text-white bg-red-100 rounded-lg dark:bg-green-400 dark:text-green-800 m-2"
              role="alert"
            >
              {success}
            </div>
          )}
          {error && (
            <div
              className="p-3 xl:w-auto w-full mb-[-22px] mt-2 text-sm text-red-700 bg-red-100 rounded-lg text-right dark:bg-red-200 dark:text-red-800 m-2 "
              role="alert"
            >
              {error}
            </div>
          )}

          <button
            onClick={() => handelAddToCart(id)}
            className="text-white mobile:w-full btn  rounded-md shadow-md mt-[30px] p-3"
          >
            <span className="hover:text-black">اضافة</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
