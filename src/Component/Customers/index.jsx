import React from 'react'
import customer from "../../assets/customer1.jpg"
import pic2 from "../../assets/pic-2.jpg"
import pic3 from "../../assets/pic-3.jpg"
import pic4 from "../../assets/pic-4.jpg"
import user from "../../assets/user.png"
import { useState ,useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
function Customer() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevCustomer = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? customers.length - 1 : prevIndex - 1));
    };

    const nextCustomer = () => {
        setCurrentIndex((prevIndex) => (prevIndex === customers.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextCustomer();
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    const customers = [
        { img:  customer ,  
          name : "Wo Dinesh",
          profession : "IFA",
          text : "Hey assured me not to do anything regarding packing. Just guide or supervise we will do everything.So they did in one day and luggage reached on 4th day On moving from Vadodara to New Delhi there was only one name in mind for transportation of luggage that is PACKSHIFTS Intact and safely... Thanks PACKSHIFTS"
        },
        {
            img:pic2,
            name: "Dhruv Mehta",
            profession : "Business Owner",
            text : "We have shifted our household from AHMEDABAD to Pune through PACKSHIFTS Packers & MOVERS and the services were really satisfactory. We received our household on time and without any damages. Thanks for cooperation."
        },{
            img:pic3,
            name: "Azra Tabassum",
            profession : "Branch Managar SBI",
            text : "It was a great experience taking your service for shifting my household from Vadodara to Lucknow. Prompt reply, good packing, care of goods, work within agreed time limits and care about everything make my transfer easy and comfortable."
        },{
            img:pic4,
            name: "Owais Amin Zargir",
            profession : "Branch Managar SBI",
            text : "Service provided by your company is very satisfying, safe & time bound .Thanks PACKSHIFTS"
        },{
            img:user,
            name : "Mr. Ranjit Pradhan",
            profession : "",
            text : "Good. Accept a little confusion about the size of the transportation vehicle. The supervisor and the whole staff was very polite and helpful. Made the lady of the house feel comfortable with the way of packing etc. I would highly recommend your services to all. Thank you. Capt Ranjit Pradhan."
        },
    ]
    return(
        <div className='relative'>
        <Customers {...customers[currentIndex]} />
        <div className='absolute top-1/2 left-0 transform -translate-y-1/2'>
            <BsChevronCompactLeft onClick={prevCustomer} className='text-white cursor-pointer' size={30} />
        </div>
        <div className='absolute top-1/2 right-0 transform -translate-y-1/2'>
            <BsChevronCompactRight onClick={nextCustomer} className='text-white cursor-pointer' size={30} />
        </div>
        <div className='flex justify-center mt-4 absolute bottom-4 max-md:hidden left-1/2 transform -translate-x-1/2'>
            {customers.map((_, index) => (
                <RxDotFilled
                    key={index}
                    className={`cursor-pointer ${index === currentIndex ? 'text-white' : 'text-gray-400'}`}
                    onClick={() => setCurrentIndex(index)}
                    size={40}
                />
            ))}
        </div>
    </div>
    )
}
export default Customer

function Customers({img,text ,name , profession}) {
  return (
    <div className='achivementSection w-[70%] h-[312px] rounded-3xl m-auto my-5 flex items-center p-5
    max-md:w-full max-md:h-full max-md:flex-col max-md:justify-center  '>
    <div className='w-fit h-auto bg-submain relative rounded-[8px] rounded-tl-[0px] 
    rounded-br-[0px] p-5 flex flex-col justify-center items-center top-[4px] left-[-70px]
    max-md:left-[0px] '>
        <img src={img} alt="" className='w-[120px] h-[120px] rounded-[8px] rounded-tl-[0px] rounded-br-[0px]' />
        <h2 className='text-white text-base text-center'>{name}</h2>
        <p className='text-[12px] text-white text-center'>{profession}</p>
    </div>
    <div className='ml-[-20px] flex-1 max-md:ml-0'>
        <p className='text-white text-base'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512 " className=' w-4 h-5 fill-white ml-[-30px]'>
           <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/></svg>
           {text}</p>
    </div>
</div>

  )
}




