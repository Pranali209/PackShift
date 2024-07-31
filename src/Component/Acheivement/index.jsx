import React from 'react'
import ExperienceImg from '../../assets/experience.png'
import carRelocationImg from '../../assets/car-relocation.png';
import happyCustomerImg from '../../assets/happy-customer.png';
import houseRelocationImg from '../../assets/house-relocation.png';
import officeRelocationImg from '../../assets/office-relocation.png';
import twoWheelerRelocationImg from '../../assets/two-wheeler-relocation.png';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';


const Achievement = ({ img, end, title }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    return (
      <div ref={ref} className="text-center p-2 
      flex flex-col justify-center align-middle  text-white max-md:w-52 max-md:align-baseline">
        <img src={img} className='w-10 m-auto  '/>
        <div>
        {inView && <CountUp start={0} end={end} duration={2} className="text-4xl font-bold" />}
        <p className="text-[18px] text-white mt-2">{title}</p>
        </div>
        
      </div>
    );
  };

function Achievements() {

    const AchiveArray = [
        { img: ExperienceImg, end: 8, title: "+ Years Of Experience" },
        { img: carRelocationImg, end: 535, title: 'Four Wheelers Relocated' },
        { img: happyCustomerImg, end: 8554, title: 'Happy Customer' },
        { img: houseRelocationImg, end: 821, title: 'House Relocated' },
        { img: officeRelocationImg, end: 199, title: 'Office Relocated' },
        { img: twoWheelerRelocationImg, end: 1982, title: 'Two Wheeler Relocation' }

    ]
    return (
        <div className="flex justify-center gap-[19px]  max-md:gap-[10px] 
        max-md:justify-between  max-md:flex-row max-md:flex-wrap">
            {AchiveArray.map((achievement, index) => (
                <Achievement key={index} img={achievement.img} end={achievement.end} title={achievement.title} />
            ))}
        </div>
    )
}




export default Achievements

