import React from 'react'
import Logo from '../../assets/Logo.png'

function Header() {
    return (
        <nav className='w-full z-50 h-20 bg-white flex justify-around fixed'>
            <img src={Logo} alt="Logo" />
            <div className="border-2 h-10   flex items-center justify-center p-6 m-4 blinking-gradient  rounded-t-[30px]
             rounded-br-[0px] rounded-bl-[30px] max-md:hidden">
          
            <span className=" font-bold  text-white text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
             className='w-[2.5rem] h-[1.3rem] inline-block pr-1 fill-white phonetxt'>
            <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
            8287 244 244</span>
            </div>
        </nav>
    )
}

export default Header