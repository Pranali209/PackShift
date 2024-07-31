import React from 'react'
import experiencedstaff from '../../assets/experiencedstaff.png'
import costefficientImg from '../../assets/costefficient.png';
import safeServiceImg from '../../assets/safeservice.png';
import supportImg from '../../assets/support.png';
import qualityImg from '../../assets/quality.png';
import hiddenChargesImg from '../../assets/hidden-charges.png';
import freeQuoteImg from '../../assets/freequote.png';
import customerSatisfactionImg from '../../assets/customersatisfaction.png';
import WhyUsCard from '../WhyUsBox';

function WhyUs() {

    const Quality = [
        { img :  experiencedstaff , title : "Experienced Staff"},
        { img :  costefficientImg , title : "Cost-Efficient"},
        { img :  safeServiceImg  , title : "Safe and Time-Saving Service"},
        { img : supportImg  , title : "24×7 Support Service"},
        { img :  qualityImg  , title : "Quality Packing Material"},
        { img :  hiddenChargesImg , title : "No Hidden Charges"},
        { img : freeQuoteImg , title : "Free Quotation"},
        { img : customerSatisfactionImg , title : "24×7 Support Service"},
    ]
  return (
    <>
    <div className='flex flex-wrap  justify-evenly mt-10  max-md:justify-between'>
         {
            Quality.map((item, index) => {
                return <WhyUsCard img ={item.img} title={item.title} key={index}/>
            })
         }
    </div>
    </>
  )
}

export default WhyUs