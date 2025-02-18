import React, {useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import useProducts from '../../Hooks/useProducts';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';


export default function RecentProducts() {

    let {addToCart , addToWishlist , setCart ,setWishlist} =useContext(CartContext)

    async function addProduct(productId){
      let response=  await addToCart(productId)
      console.log(response);
      
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

    async function addProductToWishlist(productId){
      let response=  await addToWishlist(productId)
      console.log(response);
      
      if (response.data.statusMsg==='success'){
        setWishlist(response.data)
        toast.success('product added successfully ',{
        })
      }
      else{
        toast.error('error added ',{
        })
      }
    }

    function getRecent(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }

    let {data,isError,error,isLoading,isFetching}=useProducts()

    if(isLoading){
        return <div className='py-8 '>
            <Loading/>
        </div>
    }
    if(isError){
        return <div className='py-8'>
            <h3>{error}</h3>
        </div>
    }

  return (
   <>
   <div className="row text-center">
    {data?.data.data.map((product)=> <div key={product.id} className='w-1/6 px-4'>
    <div className='product py-4 relative'>
     <Link to={`/productdetails/${product.id}/${product.category.name}`}>
        <img className='w-full' src={product.imageCover} alt={product.title} />
        <span className='block font-light mt-2  text-main'>{product.category.name}</span>
        <h3 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
        <div className="flex justify-around items-center">
            <span>{product.price} EGP</span>
            <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-500'></i></span>
        </div>
     </Link>
     <div className="flex justify-between py-4 heart">
     <button onClick={()=>addProductToWishlist(product.id)}  className=''> <i class="fa-solid fa-heart fa-xl "></i></button>
     <button onClick={()=>addProduct(product.id)} className='btn'> add to cart <i class="fa-solid fa-cart-plus"></i></button>
     </div>
    </div>
    </div>)}
   </div>
   </>
  )
}
