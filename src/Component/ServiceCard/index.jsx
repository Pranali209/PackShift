import React from 'react'
import houseshifting from '../../assets/houseshifting.jpg'
import officeshifting from '../../assets/officeshifting.jpg'
import bikeshifting from '../../assets/bikeshifting.jpg'
import carshifting from '../../assets/carshifting.jpg'
import ServiceBox from '../Services/index'
function ServiceCard() {
    const Services = [
        { img : houseshifting ,
        title : "HOUSE SHIFTING" ,
        txt :"We are one of the most trusted packers and movers Across Gujarat.  We  are happy to answer all of your questions with no obligations. Packshifts Packers & Movers offers highly reliable and swift goods packing services which are carried out by trained professionals. Packshifts offers custom designed packaging material for packing and the safe transportation of goods."
        },
        {
            img: officeshifting ,
            title : "OFFICE SHIFTING",
            txt : "With the best technology available in Today's time, the rise in number of offices is also noticed. Packshifts Packer and Mover has noticed the demand of office moving . We provide the best office relocation services in Gujarat . You can reach Packshifts Packer and Mover for best office Shifting Experience."
        },
        {
            img:bikeshifting,
            title : "BIKE SHIFTING",
            txt:"Now that you are shifting from one city to another, YOUR TWO-WHEELER also needs to be transported to the new city with utmost care. However, you can lighten the load by ensuring that you zero in on a professional Packers & Movers firm that will provide you with high-quality relocation services."
        },
        {
            img:carshifting,
            title : "CAR SHIFTING",
            txt : "Vehicle moving is one of the daunting tasks. You need the best of the  vehicle moving company to relocate your vehicle without a single scratch . We are the most experienced packers and movers for vehicle moving Company ."
        }
      ]
  return (
    <div className='flex flex-wrap  justify-around '>
         { Services.map((service ,index)=>{
        return  <ServiceBox  image={service.img} title={service.title} info={service.txt} key={index}/>
     })}
    </div>
   
  )
}

export default ServiceCard