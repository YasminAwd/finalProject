import React, { useEffect, useState } from 'react'
import style from './categories.module.css'
import axios from 'axios'
import { data } from 'react-router-dom'

export default function Categories() {

  const[categories,setCategories]=useState(null)

  async function getCategories(){
    let response=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    console.log(response);
    
    setCategories(response.data)
  }
  useEffect(() => {
   getCategories()
  }, [])
  
  return <>
  <div className="row text-center " >
  { categories?.data.map((category)=>
      <div className="w-1/3 ">
       <div className="m-4">
       <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800
           dark:border-gray-700 dark:hover:bg-gray-700">
          <img src={category.image} className='h-80 w-full py-3' alt="category" />
          <span className='text-2xl text-green-600 font-bold'>{category.name}</span>
        </a>
       </div>
      </div>
   )}
    </div>
    
    


  </>
}
