import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';



export default function Checkout() {

    let{checkOut}=useContext(CartContext)

    const formik= useFormik({
        initialValues:{
          details:'',
          phone:'',
          city:''
        }
        ,onSubmit: ()=> handleCheckout('67ab1e83fa7895e81f791582','http://localhost:5174')
      })
      

const [apiError,setapiError] =useState('');
const [isLoading,setisLoading] =useState(false);


async function handleCheckout(cartId,url){
    let{data}=await checkOut(cartId ,url, formik.values);
    console.log(data);
    
    // if(data.status === 'success'){
    //     window.location.href = data.session.url
    // }
}


  return <>
    {apiError? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {apiError}
    </div>:null}
    <h2 className='text-main text-3xl font-bold mb-10 text-center'>CheckOut Now</h2>
    <form className="md:w-1/2 mx-auto" onSubmit={formik.handleSubmit}>
    
  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="details" id="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=" "  />
    <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Enter Your details:</label>
  </div>
  
  <div className="relative z-0 w-full mb-5 group">
    <input type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=" "  />
    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Enter Your phone:</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="city" id="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=" "  />
    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Enter Your city:</label>
  </div>
  
  <div className='flex items-center'>
   <button type="submit" className="text-white bg-main-700 btn1 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-main-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800">
    {isLoading?<i className='fas fa-spinner fa-spin'></i>:'Pay Now'}
   </button>
  </div>

  
</form>

  </>
}
