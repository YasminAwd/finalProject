import React, { useEffect, useState } from 'react'
import mainSlider1 from '../../assets/images/slider-image-3.jpeg'
import mainSlider2 from '../../assets/images/grocery-banner-2.jpeg'
import mainSlider3 from '../../assets/images/grocery-banner.png'
import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import Slider from "react-slick";


export default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
      };
  return (
    <>
    <div className="row">
        <div className="w-3/4">
        <Slider {...settings}>
        <img src={mainSlider1} className='w-full h-[400px]' />
        <img src={mainSlider2} className='w-full h-[400px]' />
        <img src={mainSlider3} className='w-full h-[400px]' />
      
       </Slider>
        
        </div>
        <div className="w-1/4">
        <img src={slider1} className='w-full h-[200px]' />
        <img src={slider2} className='w-full h-[200px]' />
        </div>
    </div>
    </>
  )
}
