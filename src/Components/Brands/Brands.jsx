import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios'
import { data } from 'react-router-dom'

export default function Brands() {

  const[brands,setBrands]=useState(null)

  async function getBrands(){
    let response=await axios.get(`https://ecommerce.routemisr.com/api/v1/brands?limit=10`)
    console.log(response);
    
    setBrands(response.data)
  }
  useEffect(() => {
   getBrands()
  }, [])
  
  return <>
  <h2 className='text-center text-green-600 text-4xl font-medium'>All Brands</h2>
  <div className="row text-center " >
  { brands?.data.map((brand)=>
      <div className="w-1/4 ">
       <div className="m-4">
       <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800
           dark:border-gray-700 dark:hover:bg-gray-700">
          <img src={brand.image}  alt="brand" />
          <span>{brand.name}</span>
        </a>
       </div>
      </div>
   )}
    </div>
    
    


  </>
}
