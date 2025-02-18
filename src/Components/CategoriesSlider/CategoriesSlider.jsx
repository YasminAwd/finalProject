import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";


export default function CategoriesSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 8,
        slidesToScroll: 3,
        autoplay:true,
      };
      const[categories,setCategories]= useState([]);

     function getCategories(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        .then(({data})=>{

            setCategories(data.data)
        })
        .catch((error)=>{

        })
    }

    useEffect(()=>{
        getCategories()
        },[])
  return (
    <>
    <div className=' py-5'>
        <h2 className='py-4 text-xl text-gray-800 font-medium'>shop popular categories</h2>
    <Slider {...settings}>
         {categories.map((category)=> <div><img className='w-full category-image' src={category.image} alt={category?.name} />
         <h3 className='font-light mt-2'>{category.name}</h3>
         </div>)}
      
       </Slider>
        
    </div>
    
    </>
  )
}
