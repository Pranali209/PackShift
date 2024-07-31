import React from 'react'
import Header from '../Component/Header'
import guarante1 from '../assets/guarante1.png'
import guarante2 from '../assets/guarante2.png'
import Input from '../Component/Input/index'
import Box from '../Component/Box/index'
import Heading from '../Component/Heading'
import ServiceCard from '../Component/ServiceCard'
import WhyUs from '../Component/WhyUs'
import Achievements from '../Component/Acheivement'
import Customers from '../Component/Customers'
import Customer from '../Component/Customers'
import Clients from '../Component/Clients'
import Branches from '../Component/Branches'
import Places from '../Component/Places'
import Truck from '../Component/MovingTruck'
import Footer from '../Component/Footer'


function Home() {

    const videos = [
        { title: "Bike Packing Video", videoId: "pyzJTtcb_UA&t=4s" },
        { title: "Scooty Packing Video", videoId: "J4RbIkAQOEo" },
        { title: "Fridge Packing Video", videoId: "QwEyVG_4i7M&t=1s" },
        { title: "Washing machine Video", videoId: "uwJBLcu70z0" },
        { title: "Crockery Packing Video", videoId: "v_M2ikG408k" },
        { title: "Clothes Packing Video", videoId: "asE9hoAX9x8" },
        { title: "Showpiece Packing Video", videoId: "xmo3jBgD_dU" },
        { title: "Matress Packing Video", videoId: "y-T0Q1sya3o" },
        { title: "Sofa Packing Video", videoId: "vBX4i3pUaCI" }
      ];

     
    return (
        <>
            <Header />
            <div className='hero-bg bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center max-md:h-max ' >


                <div className="flex flex-col md:flex-row  p-6 rounded-lg shadow-lg  ">
                    <div className="w-[65%]  pl-[174px] mt-10 max-md:w-[100%] max-md:pl-[0px] max-md:mt-[20%] ">
                        <h1 className="text-[28px] text-white font-bold max-md:text-xl">
                            <span className='text-[30px] text-white max-md:text-2xl '>PACKSHIFTS</span> - INDIA'S BEST PACKERS AND MOVERS COMPANY</h1>
                        <p className="text-[24px] leading-[40px] text-white py-6 max-md:text-base max-md:py-[0px]">
                            CALL US NOW FOR A HASSLE-FREE SHIFTING.</p>
                        <p className='text-[20px] leading-[40px]  text-white max-md:text-base '>We Assure Safety And Time Delivery Of Items</p>
                        <div className="flex items-center mb-4">

                            <img src={guarante1} alt="guaranteImage" className='max-md:w-[20%]' />
                            <img src={guarante2} alt="guaranteImage" className='max-md:w-[20%]'  />
                        </div>
                    </div>
                    <div className=" px-[30px] py-[25px] rounded-3xl shadow-md w-[23%] max-md:w-full"
                        style={{ backgroundColor: "#F3F3F3" }}>
                        <h2 className="text-xl font-bold mb-4 text-center">GET A FREE MOVING QUOTE</h2>
                        <form>
                            <Input type="text" placeholder="Name*"
                                className="w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:px-1"
                            />

                            <Input type="email"
                                className="w-full p-1 border border-gray-300 rounded 
                                 placeholder:text-sm placeholder:px-1 "
                                placeholder='Email ID*' />

                            <Input type="text"
                                className="w-full p-1 border border-gray-300 rounded 
                                placeholder:text-sm placeholder:px-1"
                                placeholder='Mobile No.*' />

                            <Input type="text"
                                className="w-full p-1 border border-gray-300 rounded 
                                placeholder:text-sm placeholder:px-1"
                                placeholder='Location City From*' />

                            <Input type="text"
                                className="w-full p-1 border border-gray-300 rounded 
                                placeholder:text-sm placeholder:px-1"
                                placeholder='Location City To*' />


                            <input type="text" className="w-32 p-1 border border-gray-300 rounded
                              placeholder:text-sm placeholder:px-1 max-md:w-56 "
                                placeholder='Captcha' /> <span className='px-10 py-1 bg-submain max-md:px-20'>667760</span>


                            <div className="mb-4">
                                <input type="checkbox" className="mr-2" />
                                <label className="text-gray-700 text-[12px] ">
                                    By clicking on 'Submit', you consent to receive marketing
                                    communications from us as per our Privacy Policy.</label>
                            </div>
                            <button type="submit"
                                className="w-full bg-blue-500 text-white p-1 rounded">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
          {/* Videos Sections */}
            <div className="px-40 py-10 max-md:px-5">
                <Heading text1="PACKING" text2 ="VIDEOS"/>
                <div className=' flex justify-between flex-wrap max-md:flex-col max-md:w-full'> 
                   {videos.map((video)=>{
                    return <Box title={video.title} videoId={video.videoId}/>
                   })}
                </div>
                
            </div>
            {/* Service section */}

            <div className=' bg-backgroundGrey p-10 px-40 max-md:px-5'>
            <Heading text1="OUR CORE " text2 ="SERVICES"/> 
              <ServiceCard/>
            </div>

             {/* Y PackShifts */}

            <div className=' bg-white p-10 px-40 max-md:px-5'> 
            <Heading text1=" WHY " text2 ="PACKSHIFTS"/> 
             <h3 className='text-center font-semibold text-lg mb-4'>Why Choose Packshifts Packers & Movers</h3>
             <WhyUs/>
            </div>
            {/* { Achievements} */}
            <div className=' achivementSection p-10 px-40 max-md:px-5'>
              <Heading text1= "OUR" text2 = "ACHIEVEMENT"/>
              <h3 className='text-center text-white font-semibold text-xl mb-4'>Our Achievements , Which makes us the most preferable moving brand</h3>
              <Achievements/>
            </div>

            {/* Customer */}

            <div className=' bg-white p-10 px-40 max-md:px-5'>
              <Heading text1= "HAPPY" text2 = "CUSTOMERS"/>
               <Customer/>
            </div>
            {/* { clients} */}
            <div className=' bg-backgroundGrey p-10 px-40 max-md:px-5'>
               <Heading text1= "OUR" text2 = "CLIENTS"/>  
               <Clients/>
            </div>

            {/* { braches} */}
            <div className=' bg-white p-10 px-40 max-md:px-5'>
               <Heading text1= "OUR" text2 = "BRANCHES"/>  
               <div className='flex justify-evenly max-md:flex-col '>
                 <Branches 
                 branch="Vadodara"
                 text = "Vadodara Office Address : FF-06, Kanha City, Opposite Kailash Party Plot, Ajwa Road, Vadodara - 380019, Gujarat. "/>    
                  <Branches
                   branch = "Gandhinagar "
                   text = "Gandhinagar Office Address : Shop No. 5, Babulal Shops, Behind BSF Camp, Lakewada, Gandhinagar, Gujarat - 382045."/>
               </div>
               </div>
               <div className=' bg-white p-10 px-40 max-md:px-5'>
                <Heading text1= "PACKSHIFTS" text2 = "PACKERS & MOVERS"/>  
               <Places/>
            </div>
            
            <div className='achivementSection w-full '>
                <Footer/>
            </div>
            <Truck/>
            
            
        </>

    )
}

export default Home