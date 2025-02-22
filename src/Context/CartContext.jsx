import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext =createContext()

export default function CartContextProvider(props){

    let headers={
        token:localStorage.getItem('userToken')
    }

    let[cart,setCart]=useState(null)
    let[wishlist,setWishlist]=useState(null)

    function removeCartItem(productId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers})
        .then((response)=> response)
        .catch((x)=>x)
    }
    function removeWishlistItem(productId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{headers})
        .then((response)=> response)
        .catch((x)=>x)
    }
    function updateCartItem(productId , count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            count:count
        },{headers})
        .then((response)=> response)
        .catch((x)=>x)
    }
    function getCartItems(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers})
        .then((response)=> response)
        .catch((error)=>error)
    }
    function getWishlistItems(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers})
        .then((response)=> response)
        .catch((error)=>error)
    }
    function addToCart(productId){

        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId:productId
        },{
            headers:headers
        })
        .then((response)=>response)
        .catch((err)=>err)
    }
    function addToWishlist(productId){

        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
            productId:productId
        },{
            headers:headers
        })
        .then((response)=>response)
        .catch((err)=>err)
    }
    async function getCart(){
       let response=await getCartItems()
       setCart(response.data)
    }
    async function getWishlist(){
        let response=await getWishlistItems()
        setWishlist(response.data)
     }
     function checkOut(cartId,url,value){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}}`,{
            shippingAddress:value
        },{
            headers:headers
        })
        
        .then((response)=>response)
        .catch((err)=>err)
    }
    useEffect(() => {
      getCart()
      getWishlist()
    }, [])
    
    return <CartContext.Provider value={{cart , setCart , addToCart , getCart , getCartItems , removeCartItem , updateCartItem , wishlist , removeWishlistItem ,setWishlist , addToWishlist , getWishlistItems  , checkOut}}>
        {props.children}
    </CartContext.Provider>
}