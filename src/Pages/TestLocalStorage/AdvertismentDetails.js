import React, { useState } from 'react';
import styles from "../styles/Loader.module.css";
import Image from 'next/future/image'
import Header from './Header'
import Breadcrumbs from './Breadcrumbs';
import Loader from './Loader';
const AdvertismentDetals = () => {

    const [currentImage, setCurrentImage] = useState("https://i0.shbdn.com/photos/32/03/15/x5_1058320315nza.jpg")
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    const handleImageLoad = () => {
        setIsLoading(false);
        setImageLoaded(true);
    };

    const images = [
        "https://i0.shbdn.com/photos/32/03/15/x5_1058320315nza.jpg",
        "https://i0.shbdn.com/photos/01/17/83/x5_311011783efe.jpg",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://i0.shbdn.com/photos/01/17/83/x5_311011783efe.jpg",
        "https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    ]
    const handleSmallImageClick = (imagePath, index) => {
        setCurrentImage(imagePath);
        setActiveIndex(index);
    };
    return (
        <>
            <Header />
            <div className='bg-white'>
                <Breadcrumbs />
                <div className='w-[1150px] mobile:w-full p-3 mx-auto mt-2 '>

                    <div className="">
                        <div className="block w-full">
                            <div className='flex justify-between items-center border-b-[1px] mb-[10px]'>
                                <div className='flex-2 mobile:w-[95%] mobile:mx-auto text-[#333]'>
                                    <h1 className='text-[18px] font-medium text-sm text-[#333] h-[#18px] py-3 text-ellipsis '>



                                        THE ONLY ADDRESS OF COMFORT HEYKEL SUIT APART 0554 666 60 98

                                    </h1>
                                </div>
                                {/* <div className=''>
                            <ul className='  flex justify-ar  w-[100%] right mt-[9px]  pb-3 list-none'>
                                <li className='mr-3 text-[11px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <a href='#'> 
                                        Add to My Favorites</a>
                                </li>
                                <li className='ml-3 text-[11px]'>print</li>
                                <li className='ml-3 text-[11px]'>face</li>
                                <li className='ml-3 text-[11px]'>twit</li>
                                <li className='ml-3 text-[11px]'>ins</li>




                            </ul>
                        </div> */}
                            </div>

                        </div>
                    </div>

                    <div className="block w-full">
                        <div className='flex justify-between mobile:flex-col items-center  mb-[10px]  '>
                            <div className='w-[50%] mobile:w-[100%] flex 2xl:mr-8 flex-col border-2'>
                                <div className='w-full h-[528px] mobile:h-[400px]  p-[4px] mb-3'>
                                    {isLoading ? (<>
                                        <Loader />
                                    </>) : (<>



                                        <img src={currentImage} onLoad={handleImageLoad} className=" object-center w-full h-full" />
                                    </>)}

                                </div>
                                <div className='flex flex-wrap justify-center items-start '>

                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            onClick={() => handleSmallImageClick(image, index)}
                                            className={activeIndex === index ? 'w-[100px] mobile:h-[90px] mobile:w-[120px] border-2 border-blue-900 h-[70px] m-[4px] brightness-[0.25]' : 'mobile:w-[120px] w-[100px] h-[70px] mobile:h-[90px] mobile:m-[2px] m-[4px] cursor-pointer '}
                                        />
                                    ))}
                                    {/* <img src="https://i0.shbdn.com/photos/32/03/15/x5_1058320315nza.jpg" className='w-[100px] border border-2 border-blue-900 h-[70px] m-[4px] '  />
                                    <img src="https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg" className='w-[100px] h-[70px] m-[4px] cursor-pointer ' />
                                    <img src="https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg" className='w-[100px] h-[70px] m-[4px] cursor-pointer ' />
                                    <img src="https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg" className='w-[100px] h-[70px] m-[4px] cursor-pointer ' />
                                    <img src="https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg" className='w-[100px] h-[70px] m-[4px] cursor-pointer ' />
                                    <img src="https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg" className='w-[100px] h-[70px] m-[4px] cursor-pointer ' />
                                    <img src="https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg" className='w-[100px] h-[70px] m-[4px] cursor-pointer ' />
                                    <img src="https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg" className='w-[100px] h-[70px] m-[4px] cursor-pointer ' />
                                    <img src="https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg" className='w-[100px] h-[70px] m-[4px] cursor-pointer ' />
                                    <img src="https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg" className='w-[100px] h-[70px] m-[4px] cursor-pointer ' /> */}

                                </div>
                                <span className='p-1'>{activeIndex + 1}/{images.length}</span>

                            </div>
                            <div className='w-[50%] mobile:w-full mobile:flex-col mobile:self-center mobile:my-5 flex self-start'>
                                {/* Product Imfo */}
                                <div className='w-[50%] mobile:mt-3 mobile:w-[95%] mobile:mx-auto flex-col'>
                                    <div>
                                        <h1 className='text-lg font-bold text-[#039] mb-2'>100T</h1>
                                    </div>
                                    <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm  w-[50%]'>
                                            İlan No
                                        </div>
                                        <div className='text-red-500 w-[50%]'>
                                            1239090293
                                        </div>
                                    </div>
                                    <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm w-[50%]'>
                                            Listing Date
                                        </div>
                                        <div className='text-slate-800 text-xs w-[50%]'>
                                            February 16, 2023

                                        </div>
                                    </div>
                                    <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm w-[50%]'>
                                            Property Type
                                        </div>
                                        <div className='text-slate-800 text-xs w-[50%]'>
                                            Daily rent

                                        </div>
                                    </div>

                                    <div className='flex justify-between  py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm w-[50%]'>
                                            m² (Gross)
                                        </div>
                                        <div className='text-slate-800 text-xs w-[50%]'>
                                            90

                                        </div>
                                    </div>

                                    <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm w-[50%]'>
                                            m² (Net)
                                        </div>
                                        <div className='text-slate-800 text-xs w-[50%]'>
                                            80

                                        </div>
                                    </div>


                                    <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm  w-[50%]'>
                                            Number of rooms
                                        </div>
                                        <div className='text-slate-800 text-xs w-[50%]'>
                                            Studio (1+0)

                                        </div>
                                    </div>

                                    <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm w-[50%]'>
                                            Floor location
                                        </div>
                                        <div className='text-slate-800 text-xs w-[50%]'>
                                            2

                                        </div>
                                    </div>

                                    <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm w-[50%]'>
                                            Number of Floors
                                        </div>
                                        <div className='text-slate-800 text-xs w-[50%]'>
                                            4

                                        </div>
                                    </div>
                                    <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm w-[50%]'>
                                            Number of bathrooms
                                        </div>
                                        <div className='text-slate-800 text-xs w-[50%]'>
                                            2

                                        </div>
                                    </div>

                                    <div className='flex  justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm w-[50%]'>
                                            Inside the Site
                                        </div>
                                        <div className='text-slate-800 text-xs w-[50%]'>
                                            No

                                        </div>
                                    </div>
                                    <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm w-[50%]'>
                                            Site Name
                                        </div>
                                        <div className='text-slate-800 text-xs w-[50%]'>
                                            Unspecified

                                        </div>
                                    </div>

                                    <div className='flex justify-between py-1 border-dotted border-b-[1px]'>
                                        <div className='font-medium text-sm w-[50%]'>
                                            From who
                                        </div>
                                        <div className='self-start text-slate-800 text-xs w-[50%]'>
                                            From the Real Estate Office

                                        </div>
                                    </div>



                                </div>
                                <div className=' flex-col ml-2 mobile:mt-5 mobile:ml-0 mobile:w-full w-[50%]'>
                                    <div className='w-[100%]  h-fit  border-[1px] p-2'>
                                        <div className="bg-[#efefef] w-full h-full justify-center items-center p-3 flex-col">
                                            <div className='flex justify-between items-center pb-[9px] border-solid border-b-[2px] border-[#ccc]'>
                                                <img src="https://image5.sahibinden.com/stores/logos/02/06/19/671b272f33b668722242be2826613de3e5582921.png" className='w-[108] h-[40px] flex-2' />
                                                <a href='#' className='text-[#00339f] flex-1 ml-4'>HEYKEL SUİT APART</a>

                                            </div>
                                            <h1 className='font-bold py-1'>Ercan Erdal
                                            </h1>
                                            <div className='flex mt-2'>
                                                <h4 className='border-solid border-r-[1px] border-[#ccc] text-xs text-[#039] mr-2 pr-2'><a href='#'>All Ads</a></h4>
                                                <h4 className='border-r-[1px] text-xs mr-2 text-[#039]'><a href='#'>Add to My Favorite Sellers</a></h4>

                                            </div>
                                            <div className='bg-[#fff] rounded-md shadow-sm border-[1px] flex-col border-solid border-[c0c0c0] p-2 mt-2'>
                                                <div className='mb-1 flex'>
                                                    <span className='font-bold'>Pocket</span> <span className='ml-8 text-sm '>0 (541) 131 23 53</span>
                                                </div>
                                                <div className='mb-1 flex'>
                                                    <span className='font-bold'>Work</span> <span className='ml-10 text-sm '>0 (541) 131 23 53</span>
                                                </div>
                                            </div>
                                            <h3 className='text-center text-xs mt-2  text-[#039]'><a href='#'>Send Message</a></h3>
                                        </div>
                                    </div>

                                    <div className='w-[100%] h-fit  border-[1px] p-2 mt-2'>
                                        <div className="bg-[#efefef] w-full h-full justify-center items-center p-3 flex-col">
                                            <div className='flex justify-between items-center pb-[9px] border-solid border-b-[2px] border-[#ccc]'>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px]">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                </svg>



                                                <a href='#' className='font-bold flex-1 ml-4'>Safety tips</a>

                                            </div>

                                            <div className='flex mt-2'>
                                                <p className='text-sm'>Never pay a deposit or send money without seeing the vehicle you are interested in</p>

                                            </div>

                                            <h3 className=' text-xs mt-2  text-[#039]'><a href='#'>Click for more informations</a></h3>
                                        </div>
                                    </div>
                                </div>







                            </div>

                        </div>
                    </div>

                    <div className="border-b-[2px] border-solid border-[#ffc000]   mt-5">
                        <button type="button" onClick={() => handleTabClick(0)} className={activeTab == 0 ? "bg-yellow-400 py-2 px-2 ml-2 w-[115px] rounded-md shadow-md rounded-b-none h-[37px] border-[1px] border-b-0 text-[#333]  font-bold bg-gradient-to-t from-[#ffe700] to-[#ffc000]" : "py-2 ml-7 h-[37px] rounded-md shadow-md rounded-b-none font-bold text-[#1064bc] border-[1px] border-[#c0c0c0] bg-gradient-to-t from-[#fff] to-[#e4e2e2] px-2 "}>Ads Details</button>

                        <button type="button " onClick={() => handleTabClick(1)} className={activeTab == 1 ? "bg-yellow-400 py-2 px-2 ml-7  rounded-md shadow-md rounded-b-none h-[37px] border-[1px] border-b-0 text-[#333]  font-bold bg-gradient-to-t from-[#ffe700] to-[#ffc000]" : "py-2 ml-7 h-[37px] rounded-md shadow-md rounded-b-none font-bold text-[#1064bc] border-[1px] border-[#c0c0c0] bg-gradient-to-t from-[#fff] to-[#e4e2e2] px-2 "}>Location And Street View</button>
                    </div>
                    <div className='border-[2px] mt-1'>
                        {activeTab === 0 &&
                            <>
                            <div className='w-full  border-b-[1px] border-solid p-1 bg-gradient-to-t from-[#fff] to-[#e4e2e2] border-[#dedede]'>
                            <h1 className='font-bold ml-2'>Explantion</h1>
                            
                        </div>
                        <div className='bg-white py-5 mt-5 pl-5 mobile:px-2 border-[1px] solid border-t-0 w-ful '>
                                    <h1 className='text-center'>
                                    FOR YOUR HEALTH,  WE STRONGLY REQUEST YOU TO READ THE MEASURES WE TAKE REGARDING THE VIRUS (COVID  19) CAREFULLY AND WITHOUT Boring!!

                                    </h1>

                                    <h1 className='text-center text-red-500'>
                                    FOR YOUR HEALTH,  WE STRONGLY REQUEST YOU TO READ THE MEASURES WE TAKE REGARDING THE VIRUS (COVID  19) CAREFULLY AND WITHOUT Boring!!

                                    </h1>
                                    <h1 className='text-blue-700 text-center'>

                                    DON'T RESPECT THE ADVERTISEMENTS WITHOUT PROOF AND BASIS, SUCH AS "MEASURES TAKEN" AND "WAS DONE IN DISINFECTION" Written in the Titles of the Ads!.

K! 
                                    </h1>
                            </div>
                            </>
                        }
                        {activeTab === 1 && <div className='w-full  border-b-[1px] border-solid p-1 bg-gradient-to-t from-[#fff] to-[#e4e2e2] border-[#dedede]'>
                            <h1 className='font-bold ml-2'>Location</h1>
                        </div>}


                    </div>
                </div>
            </div>
        </>
    );
};

export default AdvertismentDetals;






<div className="mt-5">
<div className="font-bold text-lg">{t("Productdetails")}</div>

<div className="flex text-[#0F1111] text-xs font-bold mt-2">
    {t("Location")}:{" "}
    <div className="ml-3 text-sm text-[#565959] font-normal">
        {router.query.location}
    </div>
</div>
<div className="flex text-[#0F1111] text-xs font-bold mt-2">
    {t("Status")}:{" "}
    <div className="ml-3 text-sm text-[#565959] font-normal">
        {router.query.status}
    </div>
</div>
<div className="flex text-[#0F1111] text-xs font-bold mt-2">
    {t("Isowner")}:{" "}
    <div className="ml-3 text-sm text-[#565959] font-normal">
        {router.query.isOwner === "true" ? "Yes" : "No"}
    </div>
</div>
<div className="flex text-[#0F1111] text-xs font-bold mt-2">
    {t("Price")}:{" "}
    <div className="ml-3 text-sm text-[#565959] font-normal">
        {router.query.currency === "USD" && "$"} {router.query.price}{" "}
        {router.query.currency === "IQD" && "IQD"}
    </div>
</div>
<div className="flex text-[#0F1111] text-xs font-bold mt-2">
    {t("details")}:{" "}
    <div className="text-[#0F1111] text-sm mt-5">
        {router.query.details}
    </div>
</div>
</div> 