import React from 'react'
import facebook from "../../assets/facebook.png"
import youtube from "../../assets/youtube.png"
function Footer() {
    return (

        <div className=' w-full p-5'>
            <div className=' flex  justify-between '>
                <span className='flex ml-40 max-md:ml-[10px]'>
                    <img src={facebook} alt="fb" />
                    <img src={youtube} alt="yt" />
                </span>

                <p className='text-white text-base hover:text-submain mr-40 max-md:mr-[20px]'>TERMS AND CONDITIONS</p>

            </div>
            <hr className='w-[80%] m-auto  border-white border-2 ' />
            <p className='text-white text-base text-center my-2'>All Rights Reserved. © 2022 Packshifts Relocation Pvt. Ltd.</p>
           
        </div>
    )
}

export default Footer