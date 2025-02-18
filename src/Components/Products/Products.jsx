import React from 'react'
import style from './Products.module.css'
import RecentProducts from '../RecentProduct/RecentProduct'

export default function Products() {
  
  return <>
     
 <form className="max-w-md mx-auto">   
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
    <input type="search" id="default-search" className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg
     bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
  </div>
 </form>

    <RecentProducts/>
  
  </>
}
