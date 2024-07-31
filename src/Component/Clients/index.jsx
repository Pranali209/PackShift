import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import sunpharma from "../../assets/sunpharma.jpg";
import mahindra from "../../assets/mahindra.jpg";
import laren from "../../assets/lnt.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Clients() {
  const [clients, setClients] = useState([
    { id: 1, img: sunpharma },
    { id: 2, img: mahindra },
    { id: 3, img: laren },
    { id: 4, img: sunpharma },
    { id: 5, img: mahindra },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute left-0">
        <BsChevronCompactLeft className="text-black cursor-pointer" size={30} />
      </div>

      <div className="w-[80%] ">
        <Slider {...settings}>
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-[20%] flex-shrink-0 p-2 transition-transform duration-500"
            >
              <img src={client.img} alt="Client" className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute right-0">
        <BsChevronCompactRight className="text-black cursor-pointer" size={30} />
      </div>
    </div>
  );
}

export default Clients;
