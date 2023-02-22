import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import Products from "../components/Products";
import Slider from "../components/Slider";
import SliderComponent from "../components/SliderComponent";
// import CategoryLocalStorage from "./TestLocalStorage/CategoryLocalStorage";

function Home() {
  const { activeNav, newactiveNav } = useSelector((state) => state.products);
  const showModalval = localStorage.getItem("modal")
    ? localStorage.getItem("modal")
    : false;
  const [showModal, setShowModal] = React.useState(showModalval);
  const { isLoading } = useSelector((state) => state.products);
  const handelShowmodal = ()=>{
    setShowModal(false);
    localStorage.removeItem("modal")

  }

  return (
    <>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">تم ارسال طلبك</h3>

                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg text-right leading-relaxed">
                      تم ارسال طلبك بنجاح يمكنك مراجعة حالة الطلب سيتم الموافقة
                      عليه قريبا ويمكنك التواصل معنا عبرة مواقع التواصل او ارقام
                      الهاتف الضاهر
                      07737122445
                      <br/>
                      07537122495
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handelShowmodal()}
                    >
                      أغلاق
                    </button>
                    <Link
                      to="/order-record"
                      className="bg-teal-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handelShowmodal()}
                    >
                      سجل الطلبات{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}{" "}
      </>
      <SliderComponent />
      <Categories />
      <Products />
      <hr />
      <Footer />
    </>
  );
}

export default Home;
