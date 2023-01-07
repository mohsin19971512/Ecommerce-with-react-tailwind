import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, EffectFade } from "swiper";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function SliderComponent() {
  const { activeNav, newactiveNav } = useSelector((state) => state.products);

  const images = [
    {
      src: "https://ufpro.com/storage/app/media/Product%20Categories/Camouflage%20Patterns/category-multicam.jpg",
      content: "خصم 10%  على جميع البزات",
    },
    {
      src: "https://www.thefirearmblog.com/blog/wp-content/uploads/2020/03/7D77B991-A4D0-4684-AC74-31F08336AC43-660x660.jpeg",
      active: true,
      content: "خصم 70% لمدة اسبوع",
    },
    {
      src: "https://concamo.com/wp-content/uploads/2020/09/Concamo-Gen2-Vergleich-660x420.jpg",
      active: true,
      content: "خصم 40% لمدة محدودة",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(images.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === images.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation, EffectFade]}
        navigation
        slidesPerView={1}
        spaceBetween={0}
        speed={800}
        effect={"fade"}
        className={activeNav ? "mt-[450px]" : ""}
      >
        {/*         <button
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
        </button> */}

        {/*  */}
        {images.map((image)=>{
          return(
            <SwiperSlide className="w-full h-[100hv]" >
              
            <img
              className="w-[100%] mx-auto object-cover h-[100%] duration-1000 brightness-[0.25]  mobile:h-[400px]"
              src={image.src}
              alt="image slide 1"
            />
          </SwiperSlide>
          )

        })}


      </Swiper>
    </>
  );
}

/*         {images.map((slide, index) => {
          if (index === activeSlide) {
            return (
              <SwiperSlide key={index}>
    <div className="relative w-full">
                
    <img
    
      className="w-[93%] mx-auto rounded-md mt-4 object-cover h-[100%] duration-1000 brightness-[0.25]  mobile:h-[400px]"
      src={slide.src}
      alt="image slide 1"
    /> 
    <div className="text-right  text-white absolute top-52 right-36 mobile:top-11 mobile:right-8  ">
        <h1 className="text-8xl mobile:text-3xl">
{slide.content}                       </h1>
           <p className="text-4xl mobile:text-lg text-gray-300">
           سارع بالتسوق العرض محدود لفترة قصيرة 
           سارع بالتسوق العرض محدود لفترة قصيرة 
           </p>
    </div> 
    </div>
    

  </SwiperSlide>
);
}
})} */
