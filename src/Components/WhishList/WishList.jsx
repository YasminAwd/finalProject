import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'


export default function WishList() {
    const[wishlistDetails,setWishlistDetails]= useState(null)
    
    let {getWishlistItems,removeWishlistItem,addToCart,setWishlist} =useContext(CartContext)

    async function addProduct(productId){
      let response=  await addToCart(productId)

      
      if (response.data.status==='success'){
        setCart(response.data)
        toast.success('product added successfully to your cart',{
        })
      }
      else{
        toast.error('error added to your cart',{
        })
      }
    }
      async function getWishlist() {
        let response =await getWishlistItems()
        setWishlistDetails(response.data)
        
        
      }
      async function removeItem(productId) {
        let response =await removeWishlistItem(productId)
        getWishlist()
       
      }
    
      useEffect(()=>{
        getWishlist()
      },[])
    
  return (
    <>
    <div className="relative my-5 overflow-x-auto shadow-md sm:rounded-lg">
   <table className="w-75 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {wishlistDetails?.data.map((product) => 
      <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.title}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.price}
        </td>
        <td className="px-6 py-4">
          <span onClick={()=>removeItem(product.id)} className="font-medium  text-red-600 dark:text-red-500 hover:text-black ">Remove</span>
          <button onClick={()=>addProduct(product.id)} className="font-medium w-full  text-white mt-4 bg-green-600 rounded-md dark:text-green-500 py-1 ">add to cart</button>
        </td>
      </tr> )}
    </tbody>
  </table>
</div>
    </>
  )
}


